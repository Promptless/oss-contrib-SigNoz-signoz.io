import { NextRequest, NextResponse } from 'next/server'

const DEMO_WEBHOOK_URL = 'https://webhook.site/cbf3fc15-03b3-451a-af0a-4cfb80380afd'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = typeof body?.email === 'string' ? body.email.trim() : ''
    const source = typeof body?.source === 'string' ? body.source : 'hubspot-webhook-demo'

    if (!email) {
      return NextResponse.json({ ok: false, error: 'Email is required.' }, { status: 400 })
    }

    const payload = {
      email,
      source,
      submittedAt: new Date().toISOString(),
    }

    const response = await fetch(DEMO_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: `Webhook forwarding failed with status ${response.status}.`,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true, payload })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
