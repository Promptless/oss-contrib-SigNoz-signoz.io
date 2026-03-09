import { getAllowedImageDomains } from '../constants/allowedImageDomains'

export const DEFAULT_IMAGE_WIDTH = 1200
export const DEFAULT_IMAGE_HEIGHT = 800

export const CONTENT_IMAGE_SIZES =
  '(max-width: 768px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 960px, (max-width: 1536px) 1100px, 1200px'

const ALLOWED_EXTERNAL_IMAGE_DOMAINS = getAllowedImageDomains()

export function getAllowedExternalImageDomains(): string[] {
  return ALLOWED_EXTERNAL_IMAGE_DOMAINS
}

export function shouldUseNextImage(src: string): boolean {
  if (!/^https?:\/\//i.test(src) && !src.startsWith('//')) return true
  try {
    const hostname = new URL(src).hostname
    return ALLOWED_EXTERNAL_IMAGE_DOMAINS.some((domain) => hostname === domain)
  } catch {
    return false
  }
}
