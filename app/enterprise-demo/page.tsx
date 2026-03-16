import ClickStackAlternativePage from './EnterprisePage'
import { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 60 * 60 * 24 * 365

export const metadata: Metadata = {
  title: {
    absolute: 'Enterprise Demo | SigNoz',
  },
  openGraph: {
    title: 'Enterprise Demo | SigNoz',
    description:
      'Logs, metrics, traces, and LLM observability unified in a single OpenTelemetry-native platform. Built for engineering teams, from start up to scale. 100% Predictable & Transparent Pricing.',
    images: '/img/platform/ClickStackAlternativeMeta.webp',
  },
  description:
    'Logs, metrics, traces, and LLM observability unified in a single OpenTelemetry-native platform. Built for engineering teams, from start up to scale. 100% Predictable & Transparent Pricing.',
  twitter: {
    title: 'Enterprise Demo | SigNoz',
    description:
      'Logs, metrics, traces, and LLM observability unified in a single OpenTelemetry-native platform. Built for engineering teams, from start up to scale. 100% Predictable & Transparent Pricing.',
    images: '/img/platform/ClickStackAlternativeMeta.webp',
  },
}

export default function ClickStackAlternative() {
  return <ClickStackAlternativePage />
}
