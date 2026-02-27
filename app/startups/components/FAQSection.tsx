import React from 'react'
import FAQAccordion from './FAQAccordion'
import { faqItems } from '../data'

export default function FAQSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto w-full max-w-4xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Frequently Asked{' '}
            <span className="bg-[linear-gradient(99deg,#ead8fd_22.85%,#7a97fa_64.34%,#fd5ab2_96.6%)] bg-clip-text p-0 text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Everything you need to know about the startup program.
          </p>
        </div>
        <FAQAccordion faqItems={faqItems} />
      </div>
    </section>
  )
}
