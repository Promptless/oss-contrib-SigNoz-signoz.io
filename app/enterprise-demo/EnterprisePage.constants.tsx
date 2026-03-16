import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const SourceLink: React.FC<{ href: string }> = ({ href }) => (
  <Link
    href={href}
    className="mt-1 block text-xs text-signoz_vanilla-400 underline decoration-signoz_slate-400 underline-offset-2 hover:text-signoz_robin-400"
    target="_blank"
    rel="noopener noreferrer"
    prefetch={false}
  >
    Source
    <ArrowRight size={14} className="inline-block" />
  </Link>
)

export const OBSERABILITY_LANDSCAPE_CARDS = [
  {
    title: <span className="text-4xl font-bold">85%</span>,
    description: (
      <div className="flex min-h-24 flex-col items-start justify-between">
        OpenTelemetry Adoption is accelerating
        <SourceLink href="https://grafana.com/" />
      </div>
    ),
  },
  {
    title: <span className="text-4xl font-bold">99%</span>,
    description: (
      <div className="flex min-h-24 flex-col items-start justify-between">
        Businesses actively reducing observability costs
        <SourceLink href="https://dimensionalreserach.com" />
      </div>
    ),
  },
  {
    title: <span className="text-4xl font-bold">57%</span>,
    description: (
      <div className="flex min-h-24 flex-col items-start justify-between">
        Teams cut costs with tool consolidation
        <SourceLink href="https://dimensionalreserach.com" />
      </div>
    ),
  },
  {
    title: <span className="text-4xl font-bold">71%</span>,
    description: (
      <div className="flex min-h-24 flex-col items-start justify-between">
        Engineering teams hit unexpected observability overages regularly
        <SourceLink href="https://dimensionalreserach.com" />
      </div>
    ),
  },
]

export const TRUSTED_BY_LOGOS = [
  {
    src: '/svgs/icons/lovart.svg',
    alt: 'Lovart',
  },
  {
    src: '/svgs/icons/sarvam.svg',
    alt: 'Sarvam',
  },
  {
    src: '/svgs/icons/blaxel.svg',
    alt: 'Blaxel',
  },
  {
    src: '/svgs/icons/salient.svg',
    alt: 'Salient',
  },
  {
    src: '/img/case_study/logos/shaped-logo.svg',
    alt: 'Shaped',
  },
  {
    src: '/svgs/icons/tavus.svg',
    alt: 'Tavus',
  },
  {
    src: '/svgs/icons/inkeep.svg',
    alt: 'Inkeep',
  },
  {
    src: '/svgs/icons/drivetrain.svg',
    alt: 'Drivetrain',
  },
]

export const NUMBERS_THAT_SPEAK_CARDS = [
  {
    icon: <div className="text-4xl font-bold text-[#FF3B23]">50%</div>,
    title: 'Reduction in MTTR and Total Cost of Ownership',
    description: (
      <div className="flex min-h-36 flex-col items-start justify-between">
        Our logs, metrics, traces work on an innovative co-related architecture so you find the
        needle in the haystack - faster
        <Button
          variant="secondary"
          to="/blog/cost-effective-datadog-alternative/"
          className="mt-4 block w-fit"
          rounded="full"
        >
          Learn more
        </Button>
      </div>
    ),
  },
  {
    icon: <div className="text-4xl font-bold text-[#FF3B23]">10 TB+/Day</div>,
    title: 'Daily Ingest — Single Deployment',
    description: (
      <div className="flex min-h-36 flex-col items-start justify-between">
        ClickHouse at the core handles high-cardinality Kubernetes and AI inference telemetry at any
        scale.
        <Button
          variant="secondary"
          to="/blog/optimizing-log-processing-at-scale/"
          className="mt-4 block w-fit"
          rounded="full"
        >
          Learn more
        </Button>
      </div>
    ),
  },
  {
    icon: <div className="text-4xl font-bold text-[#FF3B23]">1,000s</div>,
    title: 'Engineering Teams in Production',
    description: (
      <div className="flex min-h-36 flex-col items-start justify-between">
        Seed-stage startups to public companies. Self-hosted, cloud, or BYOC. Your choice. With
        Enterprise-Grade Observability.
        <Button variant="secondary" to="/case-study/" className="mt-4 block w-fit" rounded="full">
          Learn more
        </Button>
      </div>
    ),
  },
]

export const HIGH_GROWTH_TEAMS_CARDS = [
  {
    description: (
      <Image
        src="/img/datadog-migration-tool/get-your-dashboard-data.png"
        alt="Multi-threshold rules"
        width={1200}
        height={675}
      />
    ),
  },
  {
    title: 'Unified Observability — Single Pane of Glass',
    description: (
      <div>
        <p>
          Logs, metrics, distributed traces, and alerts live in one highly optimized-backed store
          One-click navigation UI from a trace to its correlated log line to the underlying
          infrastructure metric makes it an easy choice.
        </p>
      </div>
    ),
    className: 'flex-col items-start justify-center gap-4',
  },
  {
    title: 'AI & LLM Workload Observability — Zero Silos',
    description: (
      <div>
        <p>
          Token-level tracing, per-model cost attribution, prompt latency breakdown, and inference
          pipeline metrics via OpenTelemetry. Unlike LLM-only observability tools, our AI layer
          correlates with the entire infrastructure - Databases, microservices, and applications.
        </p>
      </div>
    ),
    className: 'flex-col items-start justify-center gap-4',
  },
  {
    description: (
      <Image
        src="/img/platform/ObservabilityForAiNativeCompaniesMeta.webp"
        alt="Multi-threshold rules"
        width={1200}
        height={675}
      />
    ),
  },
  {
    description: (
      <Image
        src="/img/platform/ObservabilityForAiNativeCompaniesMeta.webp"
        alt="Multi-threshold rules"
        width={1200}
        height={675}
      />
    ),
  },
  {
    title: 'Open Source + OpenTelemetry — No Lock-In',
    description: (
      <div>
        <p>
          Built natively on OpenTelemetry with native features like Messaging Queues. Your
          instrumentation becomes a company asset — not a vendor dependency. Instrument once, stay
          flexible, no learning curve.
        </p>
      </div>
    ),
    className: 'flex-col items-start justify-center gap-4',
  },
  {
    title: 'TCO Advantage — Predictable Pricing at Scale',
    description: (
      <div>
        <p>
          Our usage-based transparent pricing model charges on the telemetry data being ingested.
          This ensures you only pay for what you use, with no surprise costs. No per-host penalties
          for auto-scaling. No custom metric charges for adopting open standards.
        </p>
      </div>
    ),
    className: 'flex-col items-start justify-center gap-4',
  },

  {
    description: (
      <Image
        src="/img/platform/ObservabilityForAiNativeCompaniesMeta.webp"
        alt="Multi-threshold rules"
        width={1200}
        height={675}
      />
    ),
  },
  {
    description: (
      <Image
        src="/img/platform/ObservabilityForAiNativeCompaniesMeta.webp"
        alt="Multi-threshold rules"
        width={1200}
        height={675}
      />
    ),
  },
  {
    title: 'Enterprise & Platform Ready — Compliance, Scale, RBAC',
    description: (
      <div>
        <p>
          SOC 2 Type II. Self-hosted bring-your-own-cloud for HIPAA and GDPR requirements.
          Fine-grained RBAC for team-level data access. With enterprise-grade support.
          High-cardinality is a breeze with ClickHouse.
        </p>
      </div>
    ),
    className: 'flex-col items-start justify-center gap-4',
  },

  {
    title: 'Integrations — Terraform, Kubernetes, Your Stack',
    description: (
      <div>
        <p>
          Native Kubernetes monitoring. Terraform provider for IaC-managed alerting and dashboards.
          100+ collector integrations via OpenTelemetry. Connects to your CI/CD, on-call tooling,
          and cloud-native ecosystem — without overheads and downtime.
        </p>
      </div>
    ),
    className: 'flex-col items-start justify-center gap-4',
  },
  {
    description: (
      <Image
        src="/img/platform/ObservabilityForAiNativeCompaniesMeta.webp"
        alt="Multi-threshold rules"
        width={1200}
        height={675}
      />
    ),
  },
]
