'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from 'app/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden cursor-default',
  {
    variants: {
      variant: {
        default: 'border-transparent',
        outline: '',
      },
      color: {
        vanilla:
          'bg-signoz_vanilla-300 text-signoz_slate-500 hover:bg-signoz_vanilla-400 dark:bg-signoz_slate-400 dark:text-signoz_vanilla-400 dark:hover:bg-signoz_slate-300',
        robin:
          'bg-signoz_robin-500 text-signoz_vanilla-100 hover:bg-signoz_robin-400 border-transparent',
        forest:
          'bg-signoz_forest-600 text-signoz_vanilla-100 hover:bg-signoz_forest-500 dark:bg-signoz_forest-500 dark:text-signoz_slate-500 dark:hover:bg-signoz_forest-400 border-transparent',
        amber:
          'bg-signoz_amber-500 text-signoz_slate-500 hover:bg-signoz_amber-400 border-transparent',
        sienna:
          'bg-signoz_sienna-500 text-signoz_vanilla-100 hover:bg-signoz_sienna-400 border-transparent',
        cherry:
          'bg-signoz_cherry-500 text-signoz_vanilla-100 hover:bg-signoz_cherry-400 border-transparent',
        sakura:
          'bg-signoz_sakura-500 text-signoz_vanilla-100 hover:bg-signoz_sakura-400 border-transparent',
        aqua: 'bg-signoz_aqua-600 text-signoz_vanilla-100 hover:bg-signoz_aqua-500 dark:bg-signoz_aqua-500 dark:text-signoz_slate-500 dark:hover:bg-signoz_aqua-400 border-transparent',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        color: 'vanilla',
        class:
          'border-signoz_vanilla-300/20 bg-signoz_vanilla-300/10 text-signoz_slate-500 hover:bg-signoz_vanilla-300/20 dark:border-signoz_slate-400/20 dark:bg-signoz_slate-400/10 dark:text-signoz_vanilla-400 dark:hover:bg-signoz_slate-400/20',
      },
      {
        variant: 'outline',
        color: 'robin',
        class:
          'border-signoz_robin-500/20 bg-signoz_robin-500/10 text-signoz_robin-500 hover:bg-signoz_robin-500/20',
      },
      {
        variant: 'outline',
        color: 'forest',
        class:
          'border-signoz_forest-600/20 bg-signoz_forest-600/10 text-signoz_forest-600 hover:bg-signoz_forest-600/20 dark:border-signoz_forest-500/20 dark:bg-signoz_forest-500/10 dark:text-signoz_forest-500 dark:hover:bg-signoz_forest-500/20',
      },
      {
        variant: 'outline',
        color: 'amber',
        class:
          'border-signoz_amber-500/20 bg-signoz_amber-500/10 text-signoz_slate-500 hover:bg-signoz_amber-500/20',
      },
      {
        variant: 'outline',
        color: 'sienna',
        class:
          'border-signoz_sienna-500/20 bg-signoz_sienna-500/10 text-signoz_sienna-500 hover:bg-signoz_sienna-500/20',
      },
      {
        variant: 'outline',
        color: 'cherry',
        class:
          'border-signoz_cherry-500/20 bg-signoz_cherry-500/10 text-signoz_cherry-500 hover:bg-signoz_cherry-500/20',
      },
      {
        variant: 'outline',
        color: 'sakura',
        class:
          'border-signoz_sakura-500/20 bg-signoz_sakura-500/10 text-signoz_sakura-500 hover:bg-signoz_sakura-500/20',
      },
      {
        variant: 'outline',
        color: 'aqua',
        class:
          'border-signoz_aqua-600/20 bg-signoz_aqua-600/10 text-signoz_aqua-600 hover:bg-signoz_aqua-600/20 dark:border-signoz_aqua-500/20 dark:bg-signoz_aqua-500/10 dark:text-signoz_aqua-500 dark:hover:bg-signoz_aqua-500/20',
      },
    ],
    defaultVariants: {
      variant: 'default',
      color: 'robin',
    },
  }
)

type BadgeColor = 'vanilla' | 'robin' | 'forest' | 'amber' | 'sienna' | 'cherry' | 'sakura' | 'aqua'

interface BadgeProps
  extends React.ComponentProps<'span'>,
    Omit<VariantProps<typeof badgeVariants>, 'color'> {
  asChild?: boolean
  color?: BadgeColor
  capitalize?: boolean
}

function Badge({
  className,
  variant = 'default',
  color = 'robin',
  asChild = false,
  capitalize = false,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={cn(badgeVariants({ variant, color }), capitalize && 'capitalize', className)}
      data-color={color}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Badge, badgeVariants }
export type { BadgeProps, BadgeColor }
