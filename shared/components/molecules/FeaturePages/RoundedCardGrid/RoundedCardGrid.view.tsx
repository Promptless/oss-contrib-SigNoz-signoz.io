import { Card, cardVariants } from '@/components/ui/Card'
import { RoundedCardGridProps } from './RoundedCardGrid.types'

const GRID_COLS = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
} as const

const RoundedCardGrid: React.FC<RoundedCardGridProps> = ({
  cards,
  cols = 2,
  className = '',
  variant = cardVariants['default'],
}) => {
  return (
    <div className={`grid gap-6 ${GRID_COLS[cols]} ${className}`}>
      {cards.map((card, index) => (
        <Card
          key={index}
          variant={variant}
          className="overflow-hidden rounded-lg bg-none [&>*]:rounded-lg [&>*]:border-1"
        >
          <div
            className={`flex flex-col justify-center gap-4 p-6 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-lg ${card.className ?? ''}`}
          >
            {card.title && (
              <h4 className="m-0 text-left text-lg font-semibold text-signoz_vanilla-100">
                {card.title}
              </h4>
            )}
            {card.description && (
              <div className="m-0 text-left text-sm leading-relaxed text-signoz_vanilla-400">
                {card.description}
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}

export default RoundedCardGrid
