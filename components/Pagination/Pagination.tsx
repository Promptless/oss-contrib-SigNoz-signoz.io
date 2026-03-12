'use client'

import { ChevronLeft, ChevronRight, Minus } from 'lucide-react'
import type * as React from 'react'
import { type MouseEvent, useEffect, useState } from 'react'

import { cn } from 'app/lib/utils'

import { renderPageNumbers } from './utils'

type PaginationAlign = 'start' | 'center' | 'end'

function PaginationContainer({
  className,
  align = 'start',
  ...props
}: React.ComponentProps<'nav'> & { align?: PaginationAlign }) {
  return (
    <nav
      className={cn(
        'flex items-center gap-1',
        align === 'center' && 'justify-center',
        align === 'end' && 'justify-end',
        className
      )}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul className={cn('m-0 flex list-none items-center gap-1 p-0', className)} {...props} />
}

function PaginationItem(props: React.ComponentProps<'li'>) {
  return <li className="list-none" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler
} & Omit<React.ComponentProps<'button'>, 'onClick'>

function PaginationLink({
  className,
  isActive,
  disabled,
  children,
  onClick,
  ...props
}: PaginationLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault()
    } else if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-10 w-10 min-w-10 items-center justify-center rounded-md text-sm font-medium transition-colors',
        'text-signoz_ink-400 hover:bg-signoz_slate-400/50 hover:text-signoz_ink-100',
        'dark:text-signoz_vanilla-400 dark:hover:text-signoz_vanilla-100',
        isActive && 'bg-signoz_robin-500 text-white hover:bg-signoz_robin-400 hover:text-white',
        disabled && 'pointer-events-none opacity-50',
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {children}
    </button>
  )
}

type PaginationNavProps = Omit<
  React.ComponentProps<typeof PaginationLink>,
  'children' | 'isActive'
> & {
  className?: string
}

function PaginationPrevious({ className, disabled, ...props }: PaginationNavProps) {
  return (
    <PaginationLink
      className={cn('h-10 w-10', className)}
      disabled={disabled}
      aria-label="Previous page"
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </PaginationLink>
  )
}

function PaginationNext({ className, disabled, ...props }: PaginationNavProps) {
  return (
    <PaginationLink
      className={cn('h-10 w-10', className)}
      disabled={disabled}
      aria-label="Next page"
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center text-signoz_vanilla-400',
        className
      )}
      aria-hidden
      {...props}
    >
      <Minus className="h-4 w-4" />
    </span>
  )
}

interface PaginationProps extends Omit<React.ComponentProps<'div'>, 'onChange'> {
  total: number
  pageSize?: number
  current?: number
  defaultCurrent?: number
  onPageChange?: (page: number) => void
  align?: PaginationAlign
}

function Pagination({
  total,
  pageSize = 10,
  current: controlledCurrent,
  defaultCurrent = 1,
  onPageChange,
  className,
  align = 'start',
  ...props
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize)

  const [internalCurrent, setInternalCurrent] = useState(controlledCurrent ?? defaultCurrent)

  useEffect(() => {
    if (controlledCurrent !== undefined) {
      setInternalCurrent(controlledCurrent)
    }
  }, [controlledCurrent])

  const current = controlledCurrent ?? internalCurrent

  const handlePageChange = (e: MouseEvent, page: number) => {
    e.preventDefault()
    if (page < 1 || page > totalPages || page === current) {
      return
    }

    if (onPageChange) {
      onPageChange(page)
    } else {
      setInternalCurrent(page)
    }
  }

  const pageNumbers = renderPageNumbers(totalPages, current)

  if (totalPages <= 1) {
    return null
  }

  return (
    <PaginationContainer align={align} className={className} {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => handlePageChange(e, current - 1)}
            disabled={current === 1}
          />
        </PaginationItem>
        {pageNumbers.map((page, idx) => (
          <PaginationItem key={page === 'ellipsis' ? `ellipsis-${idx}` : page}>
            {page === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={(e) => handlePageChange(e, page)}
                isActive={page === current}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={(e) => handlePageChange(e, current + 1)}
            disabled={current === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  )
}

export default Pagination
