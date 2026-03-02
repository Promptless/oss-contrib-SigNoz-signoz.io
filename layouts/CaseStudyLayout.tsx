import '../css/post.css'

import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import { MDXContent } from '@/utils/strapi'
import { RegionProvider } from '@/components/Region/RegionContext'

export interface tocItemProps {
  url: string
  depth: number
  value: string
}

interface CaseStudyLayoutProps {
  content: CoreContent<MDXContent>
  children: ReactNode
  toc: tocItemProps[]
}

export default function CaseStudyLayout({ content, children, toc }: CaseStudyLayoutProps) {
  const { title } = content

  return (
    <RegionProvider>
      <div className="mx-auto w-full max-w-[1140px] px-4">
        <div className="post overflow-clip">
          <div className="post-content mt-8">
            <PageTitle>{title}</PageTitle>
            <article className="prose prose-slate max-w-none py-6 dark:prose-invert">
              {children}
            </article>
          </div>

          <div className="post-toc">
            {toc.map((tocItem: tocItemProps) => {
              return (
                <div
                  className="min-h-6 w-full text-[13px] font-medium leading-normal"
                  key={tocItem.url}
                >
                  <a
                    data-level={tocItem.depth}
                    href={tocItem.url}
                    className={`line-clamp-2 inline-block w-full ${tocItem.depth === 3 ? 'pl-4' : tocItem.depth === 4 ? 'pl-8' : ''}`}
                  >
                    {tocItem.value}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </RegionProvider>
  )
}
