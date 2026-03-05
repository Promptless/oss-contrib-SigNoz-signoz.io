'use client'

import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { cn } from 'app/lib/utils'

const DEFAULT_WIDTH = 1200
const DEFAULT_HEIGHT = 800

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
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  priority = false,
}: FigureProps) {
  return (
    <Zoom>
      <figure className={figureClassName}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn('rounded-md', className)}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          sizes="(max-width: 768px) 100vw, 780px"
        />
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
