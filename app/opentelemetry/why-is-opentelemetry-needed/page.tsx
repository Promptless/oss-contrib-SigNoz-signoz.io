import type { Metadata } from 'next'
import WhyOpenTelemetryNeededPage from './WhyOpenTelemetryNeededPage'

export const metadata: Metadata = {
  title: {
    absolute: 'Why OpenTelemetry Is Needed for Modern Observability | SigNoz',
  },
  description:
    'Learn why OpenTelemetry is needed: open instrumentation, vendor-neutral telemetry, consistent context across traces, metrics, and logs, and a cleaner observability architecture.',
  alternates: {
    canonical: 'https://signoz.io/opentelemetry/why-is-opentelemetry-needed/',
  },
  openGraph: {
    title: 'Why OpenTelemetry Is Needed for Modern Observability | SigNoz',
    description:
      'OpenTelemetry helps teams standardize instrumentation, avoid vendor lock-in, and keep telemetry portable as systems grow.',
    images: '/img/graphics/homepage/feature-graphic-otel.webp',
    url: 'https://signoz.io/opentelemetry/why-is-opentelemetry-needed/',
    siteName: 'SigNoz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why OpenTelemetry Is Needed for Modern Observability | SigNoz',
    description:
      'OpenTelemetry helps teams standardize instrumentation, avoid vendor lock-in, and keep telemetry portable as systems grow.',
    images: '/img/graphics/homepage/feature-graphic-otel.webp',
  },
}

export default function WhyOpenTelemetryNeeded() {
  return <WhyOpenTelemetryNeededPage />
}
