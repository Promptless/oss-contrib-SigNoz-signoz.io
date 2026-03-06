export const DEFAULT_IMAGE_WIDTH = 1200
export const DEFAULT_IMAGE_HEIGHT = 800

const DEFAULT_ALLOWED_DOMAINS =
  'picsum.photos,signoz.io,avatars.githubusercontent.com,storage.googleapis.com'

export function getAllowedExternalImageDomains(): string[] {
  const raw = process.env.NEXT_PUBLIC_ALLOWED_EXTERNAL_IMAGE_DOMAINS ?? DEFAULT_ALLOWED_DOMAINS
  return raw
    .split(',')
    .map((d) => d.trim())
    .filter(Boolean)
}

export function shouldUseNextImage(src: string): boolean {
  if (!/^https?:\/\//i.test(src) && !src.startsWith('//')) return true
  try {
    const hostname = new URL(src).hostname
    const allowed = getAllowedExternalImageDomains()
    return allowed.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`))
  } catch {
    return false
  }
}
