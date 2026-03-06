'use client'

import NextImage, { ImageProps } from 'next/image'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { DEFAULT_IMAGE_HEIGHT, DEFAULT_IMAGE_WIDTH } from './imageDefaults'

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
  ...rest
}: ImagePropsWithZoom) => {
  const useFill = Boolean(fill)
  return (
    <Zoom zoomImg={zoomImgSrc ? { src: zoomImgSrc } : undefined}>
      {useFill ? (
        <NextImage
          {...rest}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
      ) : (
        <NextImage
          {...rest}
          width={width ?? DEFAULT_IMAGE_WIDTH}
          height={height ?? DEFAULT_IMAGE_HEIGHT}
          sizes={sizes ?? '(max-width: 768px) 100vw, 780px'}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
      )}
    </Zoom>
  )
}

export default Image
