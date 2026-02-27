import React from 'react'
import Guides from './Guides'

export default function GuidesHome() {
  return (
    <div className="mx-auto !mt-[48px] w-full max-w-[1140px] px-4 py-16 sm:py-8">
      <div className="tab-content pt-6">
        <Guides />
      </div>
    </div>
  )
}
