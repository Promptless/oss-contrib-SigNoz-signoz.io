import React from 'react'
import Comparisons from './Comparisons'
import { fetchAllComparisonsForPage } from '@/utils/cachedData'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export const revalidate = 86400 // 1 day
export const dynamic = 'force-static'

export default async function ComparisonsHome() {
  const comparisons = await fetchAllComparisonsForPage()
  const posts = allCoreContent(sortPosts(comparisons))

  return (
    <div className="container mx-auto !mt-[48px] py-16 sm:py-8">
      <div className="tab-content pt-6">
        <Comparisons posts={posts} />
      </div>
    </div>
  )
}
