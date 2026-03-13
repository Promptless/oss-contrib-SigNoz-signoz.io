import { Metadata } from 'next'
import HubspotWebhookDemo from './HubspotWebhookDemo'

export const metadata: Metadata = {
  title: 'HubSpot Webhook Demo | SigNoz',
  description: 'Local demo showing HubSpot form submission forwarding through a Next.js route.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function HubspotWebhookDemoPage() {
  return (
    <main className="min-h-screen bg-signoz_ink-500 px-4 py-12 md:px-6">
      <div className="mx-auto max-w-4xl">
        <HubspotWebhookDemo />
      </div>
    </main>
  )
}
