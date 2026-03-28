'use client'

import React from 'react'
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Gauge,
  LockOpen,
  Network,
  ShieldCheck,
  Waypoints,
  Workflow,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import TrackingLink from '@/components/TrackingLink'
import CustomerStoriesSection from '@/shared/components/molecules/FeaturePages/CustomerStoriesSection'
import FeaturePageHeader from '@/shared/components/molecules/FeaturePages/FeaturePageHeader'
import FeaturePageLayout from '@/shared/components/molecules/FeaturePages/FeaturePageLayout'
import HeroCards from '@/shared/components/molecules/FeaturePages/HeroCards'
import IconTitleDescriptionCardGrid, {
  type IconTitleDescriptionCardData,
} from '@/shared/components/molecules/FeaturePages/IconTitleDescriptionCard'
import SectionLayout from '@/shared/components/molecules/FeaturePages/SectionLayout'
import SigNozStats from '@/shared/components/molecules/FeaturePages/SignozStats'
import UsageBasedPricing from '@/shared/components/molecules/FeaturePages/UsageBasedPricing'

const heroButtons = [
  {
    text: 'Start free with SigNoz',
    href: '/teams/',
    variant: 'default' as const,
    className: 'flex-center',
    tracking: {
      clickType: 'Primary CTA',
      clickName: 'Why OpenTelemetry Hero Start Trial',
      clickLocation: 'Why OpenTelemetry Hero',
      clickText: 'Start free with SigNoz',
    },
  },
  {
    text: 'Read OTel docs',
    href: '/docs/instrumentation/overview/',
    variant: 'secondary' as const,
    className: 'flex-center',
    tracking: {
      clickType: 'Secondary CTA',
      clickName: 'Why OpenTelemetry Hero Docs',
      clickLocation: 'Why OpenTelemetry Hero',
      clickText: 'Read OTel docs',
    },
  },
]

const benefitCards = [
  {
    icon: <Workflow className="h-5 w-5" />,
    title: 'One instrumentation approach',
    description:
      'Use one open standard for traces, metrics, and logs instead of stitching together different agents and data models.',
  },
  {
    icon: <LockOpen className="h-5 w-5" />,
    title: 'Portable telemetry',
    description:
      'Instrument once and keep the freedom to change vendors, storage backends, or deployment models without rewriting code.',
  },
  {
    icon: <Waypoints className="h-5 w-5" />,
    title: 'Shared context across signals',
    description:
      'Correlate requests, spans, logs, and service metadata using the same conventions so incidents are easier to debug.',
  },
]

const painCards: IconTitleDescriptionCardData[] = [
  {
    icon: <Boxes className="h-5 w-5" />,
    iconText: 'Fragmented stack',
    title: 'Different tools collect different parts of the story',
    description:
      'Teams often end up with one agent for APM, another for logs, and a separate pipeline for metrics. That creates duplicated effort and inconsistent telemetry.',
  },
  {
    icon: <LockOpen className="h-5 w-5" />,
    iconText: 'Vendor lock-in',
    title: 'Proprietary agents tie instrumentation to a single backend',
    description:
      'If the pricing, roadmap, or deployment model stops fitting, migration becomes a code project instead of a configuration change.',
  },
  {
    icon: <Network className="h-5 w-5" />,
    iconText: 'Distributed systems',
    title: 'Modern architectures need context propagation by default',
    description:
      'Microservices, queues, serverless functions, and external APIs all add hops. Without a shared standard, tracing those hops is brittle and incomplete.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    iconText: 'Platform governance',
    title: 'Teams need guardrails without blocking developer velocity',
    description:
      'OpenTelemetry lets platform teams standardize resource attributes, semantic conventions, and collection paths while letting app teams move quickly.',
  },
]

const outcomeCards: IconTitleDescriptionCardData[] = [
  {
    icon: <Gauge className="h-5 w-5" />,
    iconText: 'Faster response',
    title: 'Lower MTTR during incidents',
    description:
      'Consistent spans, service names, and attributes make it easier to move from a latency spike to the exact request path and related logs.',
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    iconText: 'Cleaner operations',
    title: 'A dedicated collection layer',
    description:
      'The OpenTelemetry Collector gives you a central place to batch, enrich, filter, and route telemetry without touching application code.',
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    iconText: 'Future-proofing',
    title: 'A better long-term observability foundation',
    description:
      'When your stack changes, the telemetry model does not have to. That makes experimentation, cost control, and backend changes much less disruptive.',
  },
  {
    icon: <Waypoints className="h-5 w-5" />,
    iconText: 'Team alignment',
    title: 'A common language for developers and platform teams',
    description:
      'Standard resource attributes and semantic conventions reduce ambiguity, speed up onboarding, and improve cross-team debugging.',
  },
]

const workflowSteps = [
  'Developers instrument services once with OpenTelemetry SDKs or auto-instrumentation.',
  'Telemetry flows into the OpenTelemetry Collector, where routing and processing are controlled centrally.',
  'Traces, metrics, and logs stay correlated because they share the same context and conventions.',
  'You can send that telemetry to SigNoz now and still keep the option to evolve your backend strategy later.',
]

export default function WhyOpenTelemetryNeededPage() {
  return (
    <FeaturePageLayout>
      <FeaturePageHeader
        title={
          <>
            Why OpenTelemetry Is Needed <br /> For Modern Observability
          </>
        }
        description={
          <>
            OpenTelemetry gives teams a single, open way to generate, collect, and route telemetry.
            <br />
            It reduces vendor lock-in, standardizes instrumentation, and keeps traces, metrics, and
            logs connected as systems grow.
          </>
        }
        buttons={heroButtons}
        heroImage="/img/graphics/homepage/feature-graphic-otel.webp"
        heroImageAlt="OpenTelemetry overview graphic"
      />

      <HeroCards cards={benefitCards} cols={3} className="!border-b-0" />

      <SectionLayout variant="bordered" className="!border-b-0">
        <div className="px-4 py-12 md:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.08em] text-signoz_sakura-400">
              Why teams adopt OTel
            </p>
            <h2 className="mb-4 text-signoz_vanilla-100">
              Proprietary observability breaks down as systems and teams scale
            </h2>
            <p className="mb-0 leading-8 text-signoz_vanilla-400">
              The need for OpenTelemetry usually shows up when teams realize their telemetry is
              expensive to maintain, hard to correlate, and tightly coupled to one vendor&apos;s
              agent model. OTel solves that by separating instrumentation from backend choice.
            </p>
          </div>

          <IconTitleDescriptionCardGrid cards={painCards} variant="xl" />
        </div>
      </SectionLayout>

      <SectionLayout variant="bordered" className="!border-b-0 !px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b border-dashed border-signoz_slate-400 p-8 lg:border-b-0 lg:border-r">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.08em] text-signoz_sakura-400">
              What changes with OTel
            </p>
            <h2 className="mb-4 text-signoz_vanilla-100">
              OpenTelemetry turns observability into an open pipeline
            </h2>
            <p className="mb-0 leading-8 text-signoz_vanilla-400">
              Instead of baking one vendor&apos;s collection model into every service, OTel gives
              you open SDKs, standard context propagation, semantic conventions, and a flexible
              collector layer.
            </p>
          </div>

          <div className="space-y-4 p-8">
            {workflowSteps.map((step) => (
              <div
                key={step}
                className="rounded-lg border border-dashed border-signoz_slate-400 bg-signoz_ink-400 p-4"
              >
                <p className="mb-0 text-sm leading-7 text-signoz_vanilla-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>

      <SectionLayout variant="bordered" className="!border-b-0">
        <div className="px-4 py-12 md:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.08em] text-signoz_sakura-400">
              Why it matters
            </p>
            <h2 className="mb-4 text-signoz_vanilla-100">
              The payoff is better debugging, cleaner architecture, and less migration risk
            </h2>
            <p className="mb-0 leading-8 text-signoz_vanilla-400">
              OpenTelemetry is not just an instrumentation library. It becomes the control plane for
              how telemetry is produced and moved through your stack, which is why it keeps gaining
              traction across platform teams.
            </p>
          </div>

          <IconTitleDescriptionCardGrid cards={outcomeCards} variant="xl" />
        </div>
      </SectionLayout>

      <SectionLayout variant="bordered" className="!border-b-0 !px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="border-b border-dashed border-signoz_slate-400 p-8 lg:border-b-0 lg:border-r">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.08em] text-signoz_sakura-400">
              Why SigNoz fits
            </p>
            <h2 className="mb-4 text-signoz_vanilla-100">
              Use an OpenTelemetry-native backend instead of translating your data back into a
              proprietary model
            </h2>
            <p className="mb-6 leading-8 text-signoz_vanilla-400">
              SigNoz is built around OpenTelemetry from ingestion through visualization, so teams
              can keep OTel as the source of truth while getting correlation across traces, metrics,
              logs, and exceptions in one place.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="default"
                rounded="full"
                className="flex w-fit items-center gap-2"
                asChild
              >
                <TrackingLink
                  href="/teams/"
                  clickType="Primary CTA"
                  clickName="Why OpenTelemetry Bottom Start Trial"
                  clickLocation="Why OpenTelemetry Bottom CTA"
                  clickText="Start free with SigNoz"
                >
                  Start free with SigNoz
                  <ArrowRight size={14} />
                </TrackingLink>
              </Button>

              <Button
                variant="secondary"
                rounded="full"
                className="flex w-fit items-center gap-2"
                asChild
              >
                <TrackingLink
                  href="/docs/instrumentation/overview/"
                  clickType="Secondary CTA"
                  clickName="Why OpenTelemetry Bottom Docs"
                  clickLocation="Why OpenTelemetry Bottom CTA"
                  clickText="Read instrumentation docs"
                >
                  <BookOpen size={14} />
                  Read instrumentation docs
                </TrackingLink>
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 p-8">
            <div className="rounded-lg border border-dashed border-signoz_slate-400 bg-signoz_ink-400 p-5">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.08em] text-signoz_vanilla-400">
                Recommended path
              </p>
              <p className="mb-0 text-sm leading-7 text-signoz_vanilla-200">
                Adopt OpenTelemetry as the standard inside your applications, then choose a backend
                that natively understands it.
              </p>
            </div>

            <div className="rounded-lg border border-dashed border-signoz_slate-400 bg-signoz_ink-400 p-5">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.08em] text-signoz_vanilla-400">
                Best fit
              </p>
              <p className="mb-0 text-sm leading-7 text-signoz_vanilla-200">
                Teams that want lower migration risk, consistent instrumentation, and full
                correlation across telemetry signals.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>

      <CustomerStoriesSection
        tracking={{
          clickName: 'Why OpenTelemetry Customer Stories',
          clickLocation: 'Why OpenTelemetry Customer Stories',
        }}
      />

      <UsageBasedPricing
        show={['traces', 'metrics', 'logs']}
        sectionTitle="Keep your OpenTelemetry setup flexible"
        sectionDescription="Adopt OTel once, then control cost and deployment choice without rewriting your instrumentation."
      />

      <SigNozStats />
    </FeaturePageLayout>
  )
}
