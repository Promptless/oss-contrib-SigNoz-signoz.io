import Link from 'next/link'
import React from 'react'

function Support() {
  return (
    <div title="Support">
      <section>
        <div className="mx-auto my-48 max-w-[1024px]">
          <h1 className="mb-8 text-center text-2xl">
            Reach out to us for any queries you may have{' '}
          </h1>

          <div className="flex flex-wrap items-stretch">
            <div className="w-1/3 px-4">
              <div className="bg-signoz_slate-900 m-4 flex flex-col overflow-hidden rounded-lg border shadow-sm">
                <div className="flex h-[180px] flex-col rounded-md bg-signoz_slate-500">
                  <div className="p-4">
                    <h3>Email</h3>
                  </div>
                  <div className="flex-1 p-4 pt-0">
                    <p className="text-sm">
                      Write to us at <a href="mailto:support@signoz.io">support@signoz.io</a> for
                      any queries
                    </p>
                  </div>
                  <div className="mt-auto p-4 pt-0">
                    <Link
                      className="inline-flex items-center justify-center rounded border border-current px-4 py-1 text-xs font-bold transition-colors hover:bg-white/10"
                      href={'mailto:support@signoz.io'}
                    >
                      Email Support
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/3 px-4">
              <div className="bg-signoz_slate-900 m-4 flex h-full flex-col overflow-hidden rounded-lg border shadow-sm">
                <div className="flex h-[180px] flex-col rounded-md bg-signoz_slate-500">
                  <div className="p-4">
                    <h3>Slack</h3>
                  </div>
                  <div className="flex-1 p-4 pt-0">
                    <p className="text-sm">
                      If you are facing any issues in getting up and running, or have a technical
                      query
                    </p>
                  </div>
                  <div className="mt-auto p-4 pt-0">
                    <Link
                      className="inline-flex items-center justify-center rounded border border-current px-4 py-1 text-xs font-bold transition-colors hover:bg-white/10"
                      target="_blank"
                      href={'https://signoz.io/slack'}
                    >
                      Slack Community
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/3 px-4">
              <div className="bg-signoz_slate-900 m-4 flex flex-col overflow-hidden rounded-lg border shadow-sm">
                <div className="flex h-[180px] flex-col rounded-md bg-signoz_slate-500">
                  <div className="p-4">
                    <h3>GitHub Discussions</h3>
                  </div>
                  <div className="flex-1 p-4 pt-0">
                    <p className="text-sm">
                      For ideas about the project or something which the community would find
                      helpful
                    </p>
                  </div>
                  <div className="mt-auto p-4 pt-0">
                    <Link
                      className="inline-flex items-center justify-center rounded border border-current px-4 py-1 text-xs font-bold transition-colors hover:bg-white/10"
                      target="_blank"
                      href={'https://github.com/SigNoz/signoz/discussions'}
                    >
                      GitHub Discussions
                    </Link>
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

export default Support
