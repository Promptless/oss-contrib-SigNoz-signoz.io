'use client'

import React from 'react'
import styles from './styles.module.css'
import { FormBlockedFallback, useHubspotFormFallback } from '@/components/HubspotFormFallback'

const MigrateSaving = (props) => {
  const {
    data: { TITLE, DESC, PORTAL_ID, FORM_ID },
  } = props

  const { formCreated, error, showFallback, formRef } = useHubspotFormFallback({
    portalId: PORTAL_ID,
    formId: FORM_ID,
    target: '#my-hubspot-form',
  })

  return (
    <>
      <div className={styles.svsdHeaderContainer}>
        <h2 className={styles.headerTitle}>{TITLE}</h2>
        <p className={styles.headerDesc}>{DESC}</p>
        <div className="mx-auto w-full max-w-[1140px] px-4">
          <div className="flex flex-wrap">
            <div className="my-4 max-w-[25%] flex-[0_0_25%] px-4" />
            <div className="my-4 max-w-[50%] flex-[0_0_50%] px-4">
              <div
                className={`flex flex-col overflow-hidden rounded-md bg-signoz_ink-400 shadow-sm ${styles.hubForm}`}
              >
                <div className="p-4">
                  <div id="my-hubspot-form" ref={formRef} className={showFallback ? 'hidden' : ''}>
                    {!formCreated && !error && <p className="text-center">Loading...</p>}
                    {error && <p className="text-center">Some error occurred.</p>}
                  </div>
                  {showFallback && <FormBlockedFallback />}
                </div>
              </div>
            </div>
            <div className="my-4 max-w-[25%] flex-[0_0_25%] px-4" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MigrateSaving
