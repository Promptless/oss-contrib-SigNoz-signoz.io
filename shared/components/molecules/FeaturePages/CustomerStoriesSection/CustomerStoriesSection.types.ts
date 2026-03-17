export interface CustomerStoriesSectionProps {
  tracking?: {
    clickName: string
    clickLocation: string
  }
  /** When false, hides overlay, removes last testimonial card, removes background, shows button without overlay. Defaults to true. */
  showOverlay?: boolean
}
