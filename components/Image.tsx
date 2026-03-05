'use client'

import NextImage, { ImageProps } from 'next/image'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 600

const Image = ({ width, height, fill, sizes, priority, ...rest }: ImageProps) => {
  const useFill = Boolean(fill)
  return (
    <Zoom>
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
          width={width ?? DEFAULT_WIDTH}
          height={height ?? DEFAULT_HEIGHT}
          sizes={sizes ?? '(max-width: 768px) 100vw, 780px'}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
      )}
    </Zoom>
  )
}

export default Image
