'use client'

import NextImage from 'next/image'

import {
  CONTENT_IMAGE_SIZES,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_WIDTH,
  shouldUseNextImage,
  DEFAULT_IMAGE_QUALITY,
} from './imageDefaults'

type OptimizedImgProps = React.ComponentProps<'img'> & {
  priority?: boolean
  'data-priority'?: string | boolean
}

function parseDimension(value: string | number | undefined, fallback: number): number {
  const parsed = typeof value === 'string' ? parseInt(value, 10) : (value as number)
  return typeof parsed === 'number' && !Number.isNaN(parsed) && parsed > 0 ? parsed : fallback
}

export default function OptimizedImg({
  src,
  alt = '',
  className,
  width,
  height,
  priority,
  'data-priority': dataPriority,
  ...rest
}: OptimizedImgProps) {
  const w = parseDimension(width, DEFAULT_IMAGE_WIDTH)
  const h = parseDimension(height, DEFAULT_IMAGE_HEIGHT)
  const isPriority = priority || dataPriority === 'true' || dataPriority === true

  if (!src || typeof src !== 'string') {
    return null
  }

  if (!shouldUseNextImage(src)) {
    return (
      <img
        {...rest}
        src={src}
        alt={alt}
        width={w}
        height={h}
        className={className ?? undefined}
        loading={isPriority ? undefined : 'lazy'}
      />
    )
  }

  return (
    <NextImage
      {...rest}
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={className ?? undefined}
      priority={isPriority}
      loading={isPriority ? undefined : 'lazy'}
      sizes={CONTENT_IMAGE_SIZES}
      quality={DEFAULT_IMAGE_QUALITY}
    />
  )
}
