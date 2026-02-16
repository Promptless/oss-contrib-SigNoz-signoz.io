import { unstable_cache } from 'next/cache'
import { fetchMDXContentByPath } from './strapi'
import { transformComparison, transformGuide } from './mdxUtils'

async function getCachedMDXContent<T>(
  cacheKey: string,
  deploymentStatus: string,
  tags: string[],
  fetchFn: () => Promise<T[]>
): Promise<T[]> {
  const cachedFn = unstable_cache(
    async () => {
      return fetchFn()
    },
    [cacheKey, deploymentStatus],
    {
      tags: ['mdx-content-list', ...tags],
      revalidate: 3600,
    }
  )

  return cachedFn()
}

async function fetchComparisons(deploymentStatus: string) {
  const comparisons = await fetchMDXContentByPath(
    'comparisons',
    undefined,
    deploymentStatus,
    true,
    ['title', 'path', 'date', 'description', 'updatedAt', 'publishedAt', 'content']
  )

  if ('data' in comparisons && Array.isArray(comparisons.data)) {
    return comparisons.data.map((comparison) => transformComparison(comparison))
  }

  throw new Error('Unexpected response structure from comparisons API')
}

export function getCachedComparisons(deploymentStatus: string) {
  return getCachedMDXContent(
    'cached-comparisons-list',
    deploymentStatus,
    ['comparisons-list'],
    () => fetchComparisons(deploymentStatus)
  )
}

export async function fetchAllComparisonsForPage() {
  const isProduction = process.env.VERCEL_ENV === 'production'
  const deploymentStatus = isProduction ? 'live' : 'staging'

  try {
    return await getCachedComparisons(deploymentStatus)
  } catch (cacheError) {
    console.warn('Cached comparisons fetch failed, retrying without cache:', cacheError)

    try {
      return await fetchComparisons(deploymentStatus)
    } catch (directError) {
      console.error('Direct comparisons fetch also failed:', directError)
      return []
    }
  }
}

async function fetchGuides(deploymentStatus: string) {
  const guides = await fetchMDXContentByPath('guides', undefined, deploymentStatus, true, [
    'title',
    'path',
    'date',
    'description',
    'updatedAt',
    'publishedAt',
    'content',
  ])

  if ('data' in guides && Array.isArray(guides.data)) {
    return guides.data.map((guide) => transformGuide(guide))
  }

  throw new Error('Unexpected response structure from guides API')
}

export function getCachedGuides(deploymentStatus: string) {
  return getCachedMDXContent('cached-guides-list', deploymentStatus, ['guides-list'], () =>
    fetchGuides(deploymentStatus)
  )
}

export async function fetchAllGuidesForPage() {
  const isProduction = process.env.VERCEL_ENV === 'production'
  const deploymentStatus = isProduction ? 'live' : 'staging'

  try {
    return await getCachedGuides(deploymentStatus)
  } catch (cacheError) {
    console.warn('Cached guides fetch failed, retrying without cache:', cacheError)

    try {
      return await fetchGuides(deploymentStatus)
    } catch (directError) {
      console.error('Direct guides fetch also failed:', directError)
      return []
    }
  }
}
