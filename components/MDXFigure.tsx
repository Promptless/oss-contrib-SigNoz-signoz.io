'use client'

import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import OptimizedImg from './OptimizedImg'

interface MDXFigureProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export default function MDXFigure({ children, ...props }: MDXFigureProps) {
  const processedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && (child.type === 'img' || child.type === OptimizedImg)) {
      if (child.type === 'img') {
        return <OptimizedImg {...(child.props as React.ComponentProps<typeof OptimizedImg>)} />
      }
      return child
    }
    return child
  })

  const figure = <figure {...props}>{processedChildren}</figure>

  if (props['data-zoomable'] && props['data-zoomable'] !== 'false') {
    const imageChild = React.Children.toArray(children).find(
      (child) =>
        React.isValidElement(child) && (child.type === 'img' || child.type === OptimizedImg)
    )
    const imgSrc = React.isValidElement(imageChild)
      ? (imageChild.props as { src?: string }).src
      : undefined

    return <Zoom zoomImg={typeof imgSrc === 'string' ? { src: imgSrc } : undefined}>{figure}</Zoom>
  }

  return figure
}
