'use client'

import React, { useRef, useState } from 'react'
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form'
import { FormBlockedFallback, useHubspotFormFallback } from '@/components/HubspotFormFallback'
import { contactUsData } from '../contact-us/data'

type ForwardState =
  | { status: 'idle' }
  | { status: 'sending'; email: string }
  | { status: 'success'; email: string }
  | { status: 'error'; email: string; message: string }

function getEmailFromHubspotForm($form?: any) {
  const formEl = $form?.get?.(0) ?? $form?.[0]
  if (!(formEl instanceof HTMLFormElement)) return ''

  const formData = new FormData(formEl)

  for (const [key, value] of formData.entries()) {
    if (typeof value !== 'string') continue
    const normalizedKey = key.toLowerCase()
    if (normalizedKey.includes('email') && value.trim()) {
      return value.trim()
    }
  }

  return ''
}

function HubspotWebhookDemoForm() {
  const isForwardingRef = useRef(false)
  const [forwardState, setForwardState] = useState<ForwardState>({ status: 'idle' })

  const { formCreated, error, showFallback, formRef } = useHubspotFormFallback({
    portalId: contactUsData.PORTAL_ID,
    formId: contactUsData.FORM_ID,
    target: '#hubspot-webhook-demo-form',
    onFormSubmit: ($form) => {
      const email = getEmailFromHubspotForm($form)
      if (!email || isForwardingRef.current) return

      isForwardingRef.current = true
      setForwardState({ status: 'sending', email })

      void fetch('/api/hubspot-webhook-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'hubspot-webhook-demo-page',
        }),
      })
        .then(async (response) => {
          if (!response.ok) {
            const body = await response.json().catch(() => null)
            throw new Error(body?.error ?? 'Forwarding failed.')
          }

          setForwardState({ status: 'success', email })
        })
        .catch((submitError) => {
          setForwardState({
            status: 'error',
            email,
            message: submitError instanceof Error ? submitError.message : 'Forwarding failed.',
          })
        })
        .finally(() => {
          isForwardingRef.current = false
        })
    },
  })

  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border border-signoz_slate-300 bg-signoz_ink-400 p-6">
        <h1 className="text-3xl font-semibold text-signoz_vanilla-100">HubSpot Webhook Demo</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-signoz_vanilla-400">
          This page embeds the existing HubSpot contact form and, on submit, forwards the entered
          email to a local Next.js route. That route then sends a JSON payload to the demo webhook.
        </p>
        <div className="mt-4 rounded-xl border border-signoz_slate-300 bg-signoz_ink-500 p-4 text-sm text-signoz_vanilla-300">
          <p>
            <strong>Webhook:</strong>{' '}
            <span className="break-all">
              https://webhook.site/cbf3fc15-03b3-451a-af0a-4cfb80380afd
            </span>
          </p>
          <p className="mt-2">
            <strong>Local forwarder:</strong> <code>/api/hubspot-webhook-demo</code>
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-signoz_slate-300 bg-white p-6 shadow-xl">
        <div id="hubspot-webhook-demo-form" ref={formRef}>
          {!formCreated && !error && !showFallback && <p className="text-center">Loading...</p>}
        </div>
        {showFallback && <FormBlockedFallback />}
      </div>

      <div className="rounded-2xl border border-signoz_slate-300 bg-signoz_ink-400 p-6 text-sm text-signoz_vanilla-300">
        {forwardState.status === 'idle' && (
          <p>
            Submit the form with a test email, then check webhook.site for the forwarded payload.
          </p>
        )}
        {forwardState.status === 'sending' && (
          <p>
            Forwarding <strong>{forwardState.email}</strong> to the demo webhook...
          </p>
        )}
        {forwardState.status === 'success' && (
          <p>
            Forwarded <strong>{forwardState.email}</strong> to the demo webhook. You can verify it
            in webhook.site now.
          </p>
        )}
        {forwardState.status === 'error' && (
          <p>
            Forwarding failed for <strong>{forwardState.email}</strong>: {forwardState.message}
          </p>
        )}
      </div>
    </div>
  )
}

export default function HubspotWebhookDemo() {
  return (
    <HubspotProvider>
      <HubspotWebhookDemoForm />
    </HubspotProvider>
  )
}
