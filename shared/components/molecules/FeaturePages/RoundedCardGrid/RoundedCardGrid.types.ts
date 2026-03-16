import { cardVariants } from '@/components/ui/Card'
import { VariantProps } from 'class-variance-authority'

export type RoundedCardData = {
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
}

export type RoundedCardGridProps = {
  cards: RoundedCardData[]
  cols?: 1 | 2 | 3 | 4
  className?: string
  variant?: VariantProps<typeof cardVariants>['variant']
}
