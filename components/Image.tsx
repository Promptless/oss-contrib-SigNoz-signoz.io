'use client'

import NextImage, { ImageProps } from 'next/image'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { DEFAULT_IMAGE_HEIGHT, DEFAULT_IMAGE_WIDTH, shouldUseNextImage } from './imageDefaults'

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
    return (
      <Zoom zoomImg={zoomImgSrc ? { src: zoomImgSrc } : undefined}>
        <img
          src={src}
          alt={alt}
          width={width ?? DEFAULT_IMAGE_WIDTH}
          height={height ?? DEFAULT_IMAGE_HEIGHT}
          className={className}
          loading={priority ? undefined : 'lazy'}
          {...rest}
        />
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
          {...rest}
        />
      ) : (
        <NextImage
          src={src}
          alt={alt}
          width={width ?? DEFAULT_IMAGE_WIDTH}
          height={height ?? DEFAULT_IMAGE_HEIGHT}
          sizes={sizes ?? '(max-width: 768px) 100vw, 780px'}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          {...rest}
        />
      )}
    </Zoom>
  )
}

export default Image
