/**
 * Maps Next.js CMS page URLs to Strapi `fetchMDXContentByPath` path keys and Data Cache tags.
 * Tags must stay in sync with `utils/strapi.ts` (single-document fetch) and `utils/cachedData.ts`.
 */

const URL_PREFIX_TO_COLLECTION: { prefix: string; collectionName: string }[] = [
  { prefix: '/opentelemetry/', collectionName: 'opentelemetries' },
  { prefix: '/faqs/', collectionName: 'faqs' },
  { prefix: '/case-study/', collectionName: 'case-studies' },
  { prefix: '/comparisons/', collectionName: 'comparisons' },
]

export type CmsPathInfo = {
  urlPath: string
  /** Strapi path / slug segment passed to `fetchMDXContentByPath` (no leading slash). */
  contentKey: string
  collectionName: string
}

/**
 * Returns Strapi content key + collection for a CMS-backed URL, or null if the path is not recognized.
 */
export function parseCmsUrlPath(urlPath: string): CmsPathInfo | null {
  const normalized = urlPath.startsWith('/') ? urlPath : `/${urlPath}`

  for (const { prefix, collectionName } of URL_PREFIX_TO_COLLECTION) {
    if (normalized.startsWith(prefix)) {
      let contentKey = normalized.slice(prefix.length).replace(/\/$/, '')
      if (!contentKey) {
        return null
      }
      return {
        urlPath: normalized,
        contentKey,
        collectionName,
      }
    }
  }

  return null
}

/**
 * Data Cache tags used when fetching a single document from Strapi (`utils/strapi.ts`).
 */
export function getStrapiDocumentCacheTags(info: CmsPathInfo): string[] {
  const { collectionName, contentKey } = info
  return [`${collectionName}-${contentKey}`, `mdx-content-${contentKey}`]
}
