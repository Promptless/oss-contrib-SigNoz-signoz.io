import { Metadata } from 'next'
import HomePageClient from './HomePageClient'
import Chatbase from '@/components/Chatbase'

export const metadata: Metadata = {
  title: 'SigNoz | The Open Source Datadog Alternative',
  openGraph: {
    title: 'SigNoz | The Open Source Datadog Alternative',
    description:
      'SigNoz is an open-source observability tool powered by OpenTelemetry. Get APM, logs, traces, metrics, exceptions, & alerts in a single tool.',
  },
  description:
    'SigNoz is an open-source observability tool powered by OpenTelemetry. Get APM, logs, traces, metrics, exceptions, & alerts in a single tool.',
}

export default function Page() {
  return (
    <>
      <HomePageClient />
      <Chatbase />
    </>
  )
}
