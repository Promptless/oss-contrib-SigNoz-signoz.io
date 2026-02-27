'use client'

import React from 'react'
import styles from './styles.module.css'
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form'

const MigrateSaving = (props) => {
  const {
    data: { TITLE, DESC, PORTAL_ID, FORM_ID },
  } = props

  const { loaded, error, formCreated } = useHubspotForm({
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
                  <div id="my-hubspot-form">
                    {!formCreated && !error && <p className="text-center">Loading...</p>}
                    {error && <p className="text-center">Some error occurred.</p>}
                  </div>
                  {loaded && error && <p>Some error occurred.</p>}
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
