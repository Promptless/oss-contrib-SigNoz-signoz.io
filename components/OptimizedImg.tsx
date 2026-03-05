'use client'

import NextImage from 'next/image'

const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 600

type OptimizedImgProps = React.ComponentProps<'img'> & {
  priority?: boolean
  'data-priority'?: string | boolean
}

export default function OptimizedImg({
  src,
  alt = '',
  className,
  width,
  height,
  priority,
  'data-priority': dataPriority,
}: OptimizedImgProps) {
  const w =
    typeof width === 'string'
      ? parseInt(width, 10) || DEFAULT_WIDTH
      : ((width as number) ?? DEFAULT_WIDTH)
  const h =
    typeof height === 'string'
      ? parseInt(height, 10) || DEFAULT_HEIGHT
      : ((height as number) ?? DEFAULT_HEIGHT)
  const isPriority = priority || dataPriority === 'true' || dataPriority === true

  if (!src || typeof src !== 'string') {
    return null
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={className ?? undefined}
      priority={isPriority}
      loading={isPriority ? undefined : 'lazy'}
      sizes="(max-width: 768px) 100vw, 800px"
    />
  )
}
