'use client'

import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

type CustomLinkProps = Omit<LinkProps, 'href'> &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }

function CustomLinkInner({ href, ...rest }: CustomLinkProps) {
  const searchParams = useSearchParams()
  const [regionParam, setRegionParam] = useState<string | null>(null)
  const [cloudRegionParam, setCloudRegionParam] = useState<string | null>(null)

  useEffect(() => {
    if (searchParams) {
      setRegionParam(searchParams.get('region'))
      setCloudRegionParam(searchParams.get('cloud_region'))
    }
  }, [searchParams])

  // Return anchor without href if not provided
  if (!href) {
    return <a {...rest} />
  }

  const isInternalLink =
    href.startsWith('/') || href.startsWith('.') || href.startsWith('https://signoz.io')
  const isAnchorLink = href.startsWith('#')

  if (isInternalLink) {
    const isDocsUrl = typeof href === 'string' && href.includes('/docs/')

    if (isDocsUrl && regionParam) {
      const separator = href.includes('?') ? '&' : '?'
      let newHref = `${href}${separator}region=${regionParam}`

      if (cloudRegionParam) {
        newHref = `${newHref}&cloud_region=${cloudRegionParam}`
      }

      return <Link href={newHref} {...rest} target="_blank" prefetch={false} />
    }

    if (href.startsWith('https://signoz.io/')) {
      return <Link href={href} {...rest} target="_blank" prefetch={false} />
    }

    return <Link href={href} {...rest} prefetch={false} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

function CustomLinkFallback({ href, ...rest }: CustomLinkProps) {
  // Fallback renders without region params - they'll be added on hydration
  if (!href) {
    return <a {...rest} />
  }

  const isInternalLink =
    href.startsWith('/') || href.startsWith('.') || href.startsWith('https://signoz.io')
  const isAnchorLink = href.startsWith('#')

  if (isInternalLink) {
    if (href.startsWith('https://signoz.io/')) {
      return <Link href={href} {...rest} target="_blank" prefetch={false} />
    }
    return <Link href={href} {...rest} prefetch={false} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

const CustomLink = (props: CustomLinkProps) => {
  return (
    <Suspense fallback={<CustomLinkFallback {...props} />}>
      <CustomLinkInner {...props} />
    </Suspense>
  )
}

export default CustomLink
