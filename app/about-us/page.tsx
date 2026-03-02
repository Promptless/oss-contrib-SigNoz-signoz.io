import Link from 'next/link'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About us - SigNoz',
  description: 'About us - SigNoz',
}

function aboutus() {
  return (
    <div title="About Us">
      <section>
        <div className="mx-auto mb-16 mt-16 max-w-7xl px-4">
          <p className="my-8 text-center">
            {' '}
            Some of you may wonder, what does SigNoz mean? As engineers we are obsessed with the
            idea of signal vs noise. How do devops engineers find signals which they can act on from
            the various sources of noise they encounter from their observability systems? This is
            one idea we obsess over and seems important enough to continually strive towards.
            <br></br>
            <br></br>
            And, hence the name Sig.Noz ( Signal vs Noise) 🤓
          </p>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="m-4 flex flex-col overflow-hidden rounded-lg border border-signoz_slate-400 bg-signoz_slate-500 shadow-sm">
                <div className="text-white shadow-sm">
                  <div className="m-4 flex items-center gap-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/img/504541.webp"
                      alt="Profile pic of Pranay Prateek"
                    />
                    <div>
                      <h4 className="font-bold">Pranay Prateek</h4>
                      <small className="block py-1">Co-founder & CEO </small>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <p>
                      After spending a lot of time in college reading philosophy, I got interested
                      in technology. Biometric & image recognition was especially interesting to me.
                      Led product teams in startups & MNCs like Microsoft, before stumbling into the
                      domain of observability.
                      <br></br>
                      <br></br>
                      Reducing noise in developers' and devops engineers' life is my current passion
                      :)
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-8 p-4 pt-0">
                    <Link
                      className="inline-flex shrink-0 items-center justify-center rounded bg-white px-6 py-1.5 font-bold text-black no-underline transition-colors hover:bg-white/90"
                      href={'https://twitter.com/pranay01'}
                    >
                      Twitter
                    </Link>
                    <a
                      className="border-none bg-transparent font-bold"
                      style={{ color: 'white' }}
                      href="mailto:pranay@signoz.io"
                    >
                      pranay at signoz dot io
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="m-4 flex flex-col overflow-hidden rounded-lg border border-signoz_slate-400 bg-signoz_slate-500 shadow-sm">
                <div className="text-white shadow-sm">
                  <div className="m-4 flex items-center gap-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/img/12460410.webp"
                      alt="Profile pic of Ankit Nayan"
                    />
                    <div>
                      <h4 className="font-bold">Ankit Nayan</h4>
                      <small className="block py-1"> Co-Founder & CTO </small>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <p>
                      Playing Badminton professionally was my dream at one time. But that seemed too
                      tough, so I started coding. I have delved in all sorts of technologies
                      including crypto when it was exciting.
                      <br></br> <br></br>
                      Always interested in solving interesting problems with technology.
                      Microservices & Distributed systems is what I am most interested in these
                      days.{' '}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-8 p-4 pt-0">
                    <Link
                      className="inline-flex shrink-0 items-center justify-center rounded bg-white px-6 py-1.5 font-bold text-black no-underline transition-colors hover:bg-white/90"
                      href={'https://twitter.com/ankitnayan'}
                    >
                      Twitter
                    </Link>
                    <a
                      className="border-none bg-transparent font-bold"
                      style={{ color: 'white' }}
                      href="mailto:ankit@signoz.io"
                    >
                      ankit at signoz dot io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default aboutus
