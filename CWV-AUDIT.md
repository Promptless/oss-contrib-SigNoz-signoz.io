# Core Web Vitals Audit — signoz.io

**Date:** 2026-03-30
**Auditor:** Claude Code
**Scope:** Full codebase static analysis — LCP, CLS, INP, bundle size, images, fonts, scripts, hydration

---

## Prioritized Fix List

| # | Issue | Metric | File | Effort |
|---|-------|--------|------|--------|
| P0.1 | `productionBrowserSourceMaps: true` ships source maps to all users | LCP/FCP | `next.config.js:70` | 1 line |
| P0.2 | Luma `<Script>` missing `strategy` prop | INP | `app/launch-week/page.tsx:24` | 1 line |
| P1.1 | `cookies()` in `GrowthBookProvider` forces every page to dynamic SSR (no CDN caching) | LCP/TTFB | `components/GrowthBookProvider.tsx:7` | Medium |
| P1.2 | GrowthBook flag consumers re-render up to 1s after mount when flags arrive → layout shift | CLS | `components/GrowthBookClientProvider.tsx:65` | Low |
| P1.3 | No `priority` on above-fold images on homepage/pricing/comparison pages | LCP | Multiple | Low |
| P1.4 | 5+ images over 3 MB in `public/img/` need re-compression before upload | LCP | `public/img/logs/pipelines/`, `public/img/blog/` | Medium |
| P1.5 | `<AnonymousIdSetter>` not wrapped in `<Suspense>` in root layout | INP | `app/layout.tsx:110` | Low |
| P2.1 | Zero `dynamic()` imports on heavy comparison pages (2400/1722/789 lines + recharts + framer-motion) | FCP/LCP | `datadog/newrelic/grafana-alternative` | Medium |
| P2.2 | `useCallback` missing on PricingCalculator slider handlers — new refs on every render | INP | `app/pricing/pricingv1/components/PricingCalculator.tsx` | Low |
| P3.1 | 79/83 pages missing `loading.tsx` — users see blank page during SSR | FCP | All major routes | Medium |
| P3.2 | Only 7 pages (8%) use `<Suspense>` — no progressive streaming on homepage or landing pages | FCP | All major routes | Medium |
| P3.3 | 19 files use `<img>` instead of `next/image` — no lazy loading, no srcset, no CLS protection | LCP/CLS | See section 4 | Medium |
| P4.1 | 118 `'use client'` files — many server-renderable | Bundle | Throughout | High |
| P4.2 | Dual icon libraries (`react-icons` + `lucide-react`) both in bundle | Bundle | 97+ usages | Medium |

---

## 1. LCP Causes

### 1.1 `productionBrowserSourceMaps: true` — `next.config.js:70`

```js
productionBrowserSourceMaps: true, // Enable source maps for debugging
```

Source maps are served to every user's browser in production, adding 10–50% to JS payload. This is almost certainly unintentional — source maps are a debugging tool, not a runtime requirement.

**Fix:**
```js
productionBrowserSourceMaps: false,
```

Or gate on environment:
```js
productionBrowserSourceMaps: process.env.VERCEL_ENV === 'preview',
```

---

### 1.2 `cookies()` forces entire app to dynamic rendering — `components/GrowthBookProvider.tsx:7`

```tsx
export async function GrowthBookProvider({ children }) {
  const cookieStore = cookies()  // ← makes every page dynamic
  const anonymousId = cookieStore.get('gb_anonymous_id')?.value || 'unknown'
  // ...
  return <GrowthBookClientProvider data={growthBookData}>{children}</GrowthBookClientProvider>
}
```

In Next.js App Router, calling `cookies()` in a Server Component opts the entire subtree into **per-request dynamic rendering**. Because `GrowthBookProvider` wraps `children` in `app/layout.tsx`, **every page on the site** is fully SSR'd on every request — no static HTML is generated at build time and no CDN-cached shells exist.

Consequences:
- TTFB increases because every request hits the Node.js runtime
- LCP increases because the browser waits for a full server render on every navigation
- Any CDN caching of the HTML shell is disabled for all routes

**Fix:** Scope the dynamic opt-in. Move the `cookies()` call to a lazy child component that doesn't wrap the primary content tree, or read the anonymous ID from a `Suspense`-wrapped async component that renders after the main content.

---

### 1.3 No `dynamic()` code-splitting on heavy comparison pages

Only **1 `dynamic()` import** exists in the entire codebase (`app/enterprise/Enterprise.tsx`). Meanwhile:

| File | Lines | Heavy Dependencies |
|------|-------|--------------------|
| `app/(alternatives)/datadog-alternative/SigNozVsDatadogV2.tsx` | 2,406 | recharts, framer-motion, lucide-react |
| `app/(alternatives)/newrelic-alternative/SigNozVsNewRelicV2.tsx` | 1,722 | recharts, framer-motion |
| `app/(alternatives)/grafana-alternative/SigNozVsGrafanaV2.tsx` | 789 | framer-motion |
| `app/unified-observability/UnifiedObservability.tsx` | 951 | framer-motion |

All are `'use client'` and bundled statically into the page chunk. `recharts` is ~180 KB uncompressed; `framer-motion` is ~90 KB. These land in the bundle for every user who visits the page, whether or not they scroll to the interactive chart.

**Fix pattern:**
```tsx
// app/(alternatives)/datadog-alternative/page.tsx
import dynamic from 'next/dynamic'

const SigNozVsDatadogV2 = dynamic(() => import('./SigNozVsDatadogV2'), {
  loading: () => <ComparisonSkeleton />,
  // ssr: true (default) — keeps server-rendered HTML for SEO
})
```

---

### 1.4 Large images in `public/img/`

Images are stored as full-resolution source files. `next/image` can optimize format and resize on-the-fly, but the source file size creates origin overhead and CDN storage cost. Files confirmed over 3 MB:

| Size | Path |
|------|------|
| 9.6 MB | `public/img/logs/pipelines/save-json-parsing-pipeline.png` |
| 9.5 MB | `public/img/logs/pipelines/pipeline-preview-processed.png` |
| 7.7 MB | `public/img/logs/pipelines/save-trace-parsing-pipeline.png` |
| 6.7 MB | `public/img/guides/2026/03/newrelic-pricing-diagram.webp` |
| 6.0 MB | `public/img/guides/2026/02/vpc-flow-logs-working.webp` |
| 5.8 MB | `public/img/guides/2026/02/activemq-monitoring-flow-diagram.webp` |
| 4.4 MB | `public/img/events/kubecon-2025/bag.png` |
| 4.1 MB | `public/img/blog/2025/12/reduce-bundle-size-cover.webp` |

**Fix:** Re-export at 2x the maximum display resolution before committing. For a full-width docs image on a 1440px screen, 1440–2880px wide at 80% WebP quality is sufficient. A 9 MB PNG should compress to under 400 KB.

---

## 2. CLS Causes

### 2.1 GrowthBook re-render after flag load — `components/GrowthBookClientProvider.tsx:65`

`GrowthBookClientProvider` renders children immediately (line 90 — no render gate), which is correct. However, `isOn()` and `getValue()` return defaults (`false`/`defaultValue`) until `gb.init({ timeout: 1000 })` resolves. Any component that uses a feature flag to conditionally render visible UI will paint once with the default, then re-render up to 1 second later when flags arrive — causing layout shift.

**Assess:** Check every `isOn()`/`getValue()` call site. If any controls above-fold UI dimensions (height, visibility, text), that's a measurable CLS event.

---

### 2.2 `suppressHydrationWarning` on `<html>` — `app/layout.tsx:66`

```tsx
<html lang="en" className={inter.className} suppressHydrationWarning>
```

`ThemeProviders` writes the `dark` class client-side after mount. The server renders without it; the client adds it on hydration. `suppressHydrationWarning` hides this mismatch but the style recalculation still happens and can cause a flash of unstyled content (FOUC) or layout shift if dark/light mode changes element dimensions.

---

### 2.3 `<img>` tags without dimensions — 19 files

Plain `<img>` tags without explicit `width`/`height` or `aspect-ratio` CSS cause the browser to reserve zero space until the image loads, then shift content down. Key locations:

- `app/pricing/pricingv1/components/PricingCalculator.tsx:27–51` — 3 SVG icons
- `app/launch-week/LaunchWeek.tsx:70,98,162,215,268,321` — 6 icons
- `app/events/kubecon-*/Kubecon.tsx` — speaker avatar photos (`className="h-10 w-10"` sets display size but no `width`/`height` HTML attrs, so browser doesn't know intrinsic size before paint)

---

## 3. INP / Main-Thread Blocking

### 3.1 PricingCalculator: handlers without `useCallback` — `app/pricing/pricingv1/components/PricingCalculator.tsx:81–96`

`linearToLog` and `logToLinear` are defined in module scope (fine), but the 6 `handleChangeX` slider handlers that call them lack `useCallback`. On every state change from a slider drag, all 6 handlers are recreated as new function references, causing Radix slider primitives to receive new props and re-render unnecessarily.

```tsx
// Current — new reference on every render
const handleChangeTraces = (value: number | number[]) => {
  const numValue = typeof value === 'number' ? value : value[0]
  if (isNaN(numValue)) return
  setTracesValue(numValue)
  setInputTracesValue(linearToLog(numValue, MIN_LOG_VALUE, MAX_VALUE).toString())
}

// Fix
const handleChangeTraces = useCallback((value: number | number[]) => {
  const numValue = typeof value === 'number' ? value : value[0]
  if (isNaN(numValue)) return
  setTracesValue(numValue)
  setInputTracesValue(linearToLog(numValue, MIN_LOG_VALUE, MAX_VALUE).toString())
}, []) // linearToLog is module-scope, no deps needed
```

---

### 3.2 `<AnonymousIdSetter>` not in Suspense — `app/layout.tsx:110`

```tsx
// layout.tsx — current
<Suspense fallback={null}>
  <PageViewTracker />        {/* correctly deferred */}
</Suspense>

<AnonymousIdSetter />        {/* ← no Suspense */}
```

`AnonymousIdSetter` is a `'use client'` component that accesses `localStorage` and `js-cookie` in `useEffect`. Its work happens after paint so it doesn't block LCP, but wrapping it in `<Suspense>` would lower its hydration priority and reduce main-thread contention during the critical interactive window.

**Fix:**
```tsx
<Suspense fallback={null}>
  <AnonymousIdSetter />
</Suspense>
```

---

### 3.3 Luma script missing `strategy` — `app/launch-week/page.tsx:24`

```tsx
<Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" />
```

Missing `strategy` defaults to `afterInteractive` — acceptable behavior, but ambiguous. Should be explicit:

```tsx
<Script
  id="luma-checkout"
  src="https://embed.lu.ma/checkout-button.js"
  strategy="lazyOnload"
/>
```

---

## 4. Bundle Size

### 4.1 `productionBrowserSourceMaps: true` (see section 1.1)

### 4.2 No code-splitting on heavy pages (see section 1.3)

### 4.3 Dual icon libraries

`react-icons` is used in 97+ files; `lucide-react` is also imported in several components. Both ship to the client bundle. Tree-shaking works per-icon but maintaining two systems fragments the icon import graph and makes audits harder.

**Assess:** Run `ANALYZE=true yarn build` and check if both land in the same chunk or are split appropriately. Consolidate to one library.

### 4.4 118 `'use client'` files

Every `'use client'` file ships its JS to the browser. Many of these may not require browser APIs and could be converted to Server Components. Audit candidates are components that:
- Only render static/data-driven HTML
- Have no `useState`, `useEffect`, `useRef`, or event handlers
- Import `'use client'` only because a child does

---

## 5. Image / Font / Script Loading

### 5.1 Fonts — confirmed clean

`next/font/google` with `display: 'swap'` and `latin` subset only, loaded at root layout level. No component-level font loading detected. No action needed.

### 5.2 Third-party scripts

Scripts allowed by CSP (`next.config.js:14`):
- Google Tag Manager — loaded via `@next/third-parties/google` (`afterInteractive`) ✓
- Vercel Speed Insights — `@vercel/speed-insights/next` ✓
- HubSpot Forms (`js.hsforms.net`)
- Microsoft Clarity (`clarity.ms`)
- ContentSquare (`contentsquare.net`)
- Reo (`static.reo.dev`)
- LinkedIn Insight Tag (`snap.licdn.com`)
- Chatbase (`chatbase.co`, `strategy="lazyOnload"`) ✓

Clarity and ContentSquare are both session-recording tools. If both are active simultaneously they compete for the main thread during the first interaction window, increasing INP. Confirm whether both are intentionally active in production.

---

## 6. Loading States / Streaming

### 6.1 Missing `loading.tsx` — 79/83 routes

`loading.tsx` creates a React Suspense boundary at the route level, enabling Next.js to stream a loading UI shell while the page renders on the server. Without it, users see a blank page.

Routes confirmed missing `loading.tsx`:
- `app/pricing/`
- `app/(alternatives)/datadog-alternative/`
- `app/(alternatives)/newrelic-alternative/`
- `app/(alternatives)/grafana-alternative/`
- `app/enterprise/`
- `app/application-performance-monitoring/`
- `app/distributed-tracing/`
- `app/log-management/`
- `app/metrics-and-dashboards/`
- All remaining ~70 routes

**Minimum viable fix** — add an empty loading file to unblock streaming:
```tsx
// app/pricing/loading.tsx
export default function Loading() {
  return null
}
```

A skeleton that matches the page layout is better for perceived performance.

### 6.2 Suspense on homepage — `app/page.tsx`

The homepage renders 8+ components sequentially with no Suspense boundaries. If any component suspends (data fetch, lazy import), the entire page waits. Wrapping independent sections allows progressive streaming:

```tsx
// app/page.tsx
<Suspense fallback={<HeroSkeleton />}>
  <Header />
</Suspense>
<Suspense fallback={<SectionSkeleton />}>
  <TrustedByTeams page="homepage" />
</Suspense>
// ...
```

---

## Quick Reference — Files to Change First

```
next.config.js:70                          productionBrowserSourceMaps: false
app/launch-week/page.tsx:24               strategy="lazyOnload" on Script
app/layout.tsx:110                         wrap AnonymousIdSetter in Suspense
components/GrowthBookProvider.tsx:7        move cookies() out of root layout subtree
app/(alternatives)/datadog-alternative/   dynamic() import SigNozVsDatadogV2
app/(alternatives)/newrelic-alternative/  dynamic() import SigNozVsNewRelicV2
app/pricing/pricingv1/components/         useCallback on 6 slider handlers
public/img/logs/pipelines/               re-compress 3 images from 7–9 MB
```
