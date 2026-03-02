import Link from 'next/link'

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
          className="text-signoz_robin-500 hover:text-signoz_robin-400"
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
          className="text-signoz_robin-500 hover:text-signoz_robin-400"
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
    <div className="mx-auto w-full bg-signoz_ink-500 px-4 py-8">
      <h2 className="font-heading text-gradient mt-8 p-0 px-8 text-center text-4xl font-bold tracking-normal">
        Product Comparisons
      </h2>

      <div className="mx-auto my-8 flex max-w-[1140px] flex-wrap">
        {comparisons.map((comparison) => {
          return (
            <div className="w-full px-4 lg:w-1/2" key={comparison.id}>
              <div className="m-4">
                <Link href={comparison.url} className="block no-underline">
                  <div className="flex min-h-[240px] flex-col gap-4 rounded-sm border p-8 text-white transition-opacity hover:opacity-95">
                    <div className="flex items-center gap-4">
                      <div>
                        <h2 className="mb-0 text-2xl font-bold">{comparison.title}</h2>
                      </div>
                    </div>

                    <div className="pt-0">{comparison?.desc}</div>
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
