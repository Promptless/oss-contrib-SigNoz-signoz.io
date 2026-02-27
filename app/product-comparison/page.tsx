import Hero from '@/components/ui/Hero'
import Link from 'next/link'
import { Children } from 'react'

const comparisons = [
  {
    id: 1,
    title: 'SigNoz vs Datadog',
    url: '/product-comparison/signoz-vs-datadog',
    desc: (
      <>
        For 20 APM and 50 infra hosts, SigNoz can save up to 90% of your Datadog bill - check{' '}
        <Link
          href="/blog/pricing-comparison-signoz-vs-datadog-vs-newrelic-vs-grafana/"
          className="text-signoz_robin-500"
        >
          comparison with detailed spreadsheet
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    title: 'SigNoz vs Dynatrace',
    url: '/product-comparison/signoz-vs-dynatrace',
    desc: (
      <>
        Dynatrace is complex to set up and use. Its host-based billing is outdated for applications
        that need on-demand scaling. SigNoz provides predictable usage-based billing that you can
        rely on.
      </>
    ),
  },
  {
    id: 3,
    title: 'SigNoz vs Grafana',
    url: '/product-comparison/signoz-vs-grafana',
    desc: (
      <>
        Under the hood, Grafana is powered by multiple tools like Loki, Tempo, Mimir & Prometheus.
        SigNoz is built as a single tool to serve logs, metrics, and traces in a single pane of
        glass from Day 1.
      </>
    ),
  },
  {
    id: 4,
    title: 'SigNoz vs NewRelic',
    url: '/product-comparison/signoz-vs-newrelic',
    desc: (
      <>
        Tired of New Relic’s user-based pricing? Even for teams of 10-15 devs, New Relic’s pricing
        for user seats can be a significant portion of your monthly bill - check{' '}
        <Link
          href="/blog/pricing-comparison-signoz-vs-datadog-vs-newrelic-vs-grafana/"
          className="text-signoz_robin-500"
        >
          comparison with detailed spreadsheet
        </Link>
        .
      </>
    ),
  },
]

export default function ProductComparisons() {
  return (
    <div className="mx-auto w-full max-w-[1140px] px-4">
      <h2 className="font-heading text-gradient mt-8 p-0 px-8 text-center text-4xl font-bold tracking-normal">
        Product Comparisons
      </h2>

      <div className="my-8 flex flex-wrap">
        {comparisons.map((comparison) => {
          return (
            <div className="w-1/2 px-4" key={comparison.id}>
              <div className="m-4">
                <Link href={comparison.url}>
                  <div className="min-h-[240px] rounded-sm border border-signoz_slate-400 bg-signoz_slate-500 p-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <h2 className="mb-0 text-2xl font-bold">{comparison.title}</h2>
                        {/* <small className="avatar__subtitle">{comparison.designation}</small> */}
                      </div>
                    </div>

                    <div className="p-4 pt-0">{comparison?.desc}</div>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
