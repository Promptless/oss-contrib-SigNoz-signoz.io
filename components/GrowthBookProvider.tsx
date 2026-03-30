import React from 'react'
import GrowthBookClientProvider from '@/components/GrowthBookClientProvider'

// Synchronous server component — no cookies() call, so every page remains
// statically cacheable at the CDN. The anonymous ID is read client-side from
// the cookie that AnonymousIdSetter writes after mount.
export function GrowthBookProvider({ children }: { children: React.ReactNode }) {
  return (
    <GrowthBookClientProvider
      data={{
        apiHost: process.env.GROWTHBOOK_API_HOST || process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
        clientKey:
          process.env.GROWTHBOOK_CLIENT_KEY || process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
        anonymousId: '',
      }}
    >
      {children}
    </GrowthBookClientProvider>
  )
}
