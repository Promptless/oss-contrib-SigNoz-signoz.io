'use client'

import NextImage, { ImageProps } from 'next/image'

import { cn } from 'app/lib/utils'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import {
  CONTENT_IMAGE_SIZES,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_WIDTH,
  shouldUseNextImage,
} from './imageDefaults'

type ImagePropsWithZoom = ImageProps & {
  zoomImgSrc?: string
}

const Image = ({
  width,
  height,
  fill,
  sizes,
  priority,
  zoomImgSrc,
  src,
  alt = '',
  className,
  ...rest
}: ImagePropsWithZoom) => {
  const useFill = Boolean(fill)
  const useNextImage = typeof src === 'string' ? shouldUseNextImage(src) : true

  if (!useNextImage) {
    const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
      src: src as string,
      alt,
      loading: priority ? undefined : 'lazy',
      ...rest,
    }
    return (
      <Zoom zoomImg={zoomImgSrc ? { src: zoomImgSrc } : undefined}>
        {useFill ? (
          <img {...imgProps} className={cn('absolute inset-0 size-full object-cover', className)} />
        ) : (
          <img
            {...imgProps}
            width={width ?? DEFAULT_IMAGE_WIDTH}
            height={height ?? DEFAULT_IMAGE_HEIGHT}
            className={className}
          />
        )}
      </Zoom>
    )
  }

  return (
    <Zoom zoomImg={zoomImgSrc ? { src: zoomImgSrc } : undefined}>
      {useFill ? (
        <NextImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className={className}
          {...rest}
        />
      ) : (
        <NextImage
          src={src}
          alt={alt}
          width={width ?? DEFAULT_IMAGE_WIDTH}
          height={height ?? DEFAULT_IMAGE_HEIGHT}
          sizes={sizes ?? CONTENT_IMAGE_SIZES}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className={className}
          {...rest}
        />
      )}
    </Zoom>
  )
}

export default Image
