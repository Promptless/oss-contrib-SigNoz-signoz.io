'use client'

import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { cn } from 'app/lib/utils'

import {
  CONTENT_IMAGE_SIZES,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_WIDTH,
  DEFAULT_IMAGE_QUALITY,
  shouldUseNextImage,
} from '../imageDefaults'

interface FigureProps {
  src: string
  alt: string
  caption: string
  link?: string
  sourceText?: string
  className?: string
  figureClassName?: string
  captionClassName?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}

export default function Figure({
  src,
  alt,
  caption,
  link,
  sourceText,
  className,
  figureClassName,
  captionClassName,
  width = DEFAULT_IMAGE_WIDTH,
  height = DEFAULT_IMAGE_HEIGHT,
  priority = false,
  sizes: sizesProp,
}: FigureProps) {
  const useNextImage = shouldUseNextImage(src)
  const sizes =
    sizesProp ??
    (width !== DEFAULT_IMAGE_WIDTH ? `(max-width: 768px) 100vw, ${width}px` : CONTENT_IMAGE_SIZES)

  return (
    <Zoom zoomImg={{ src }}>
      <figure className={figureClassName}>
        {useNextImage ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn('rounded-md', className)}
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            sizes={sizes}
            quality={DEFAULT_IMAGE_QUALITY}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn('rounded-md', className)}
            loading={priority ? undefined : 'lazy'}
          />
        )}
        <figcaption className={captionClassName}>
          <i>
            {link && !sourceText ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {caption}
              </a>
            ) : (
              <>
                {caption}{' '}
                {link && sourceText && (
                  <>
                    Source:{' '}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {sourceText}
                    </a>
                  </>
                )}
              </>
            )}
          </i>
        </figcaption>
      </figure>
    </Zoom>
  )
}
