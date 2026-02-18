'use client'

import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Authors } from 'contentlayer/generated'
import type { Guide } from '../types/transformedContent'
import ArticleLayout, { TocItemProps } from './ArticleLayout'
import { RegionProvider } from '@/components/Region/RegionContext'

// Extend the Guide type to include CTA fields
interface GuideContent extends Guide {
  cta_title?: string
  cta_text?: string
}

interface LayoutProps {
  content: CoreContent<GuideContent>
  authorDetails: CoreContent<Authors>[]
  authors: string[]
  children: ReactNode
  toc: TocItemProps[]
}

export default function GuidesLayout({
  content,
  authorDetails,
  authors,
  children,
  toc,
}: LayoutProps) {
  return (
    <RegionProvider>
      <ArticleLayout
        content={content}
        authorDetails={authorDetails}
        authors={authors}
        toc={toc}
        contentType="guide"
        showNewsletter={true}
        showRelatedArticles={true}
      >
        {children}
      </ArticleLayout>
    </RegionProvider>
  )
}
