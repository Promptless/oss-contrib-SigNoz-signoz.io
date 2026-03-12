// Helper function to generate a range of numbers
const range = (start: number, end: number): number[] => {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

/**
 * Calculates the sequence of page numbers and ellipses to display.
 * @param totalPages - The total number of pages.
 * @param current - The currently active page number.
 * @param siblingCount - The number of page links to show on each side of the current page (default: 1).
 * @returns An array containing page numbers and 'ellipsis' strings.
 */
export const renderPageNumbers = (
  totalPages: number,
  current: number,
  siblingCount = 1
): (number | 'ellipsis')[] => {
  // Total visible page numbers/ellipses between prev/next arrows
  const totalPageNumbers = 2 * siblingCount + 5

  if (totalPages <= totalPageNumbers) {
    return range(1, totalPages)
  }

  const leftSiblingIndex = Math.max(current - siblingCount, 1)
  const rightSiblingIndex = Math.min(current + siblingCount, totalPages)
  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1
  const firstPageIndex = 1
  const lastPageIndex = totalPages

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftRange = range(1, 3)
    return [...leftRange, 'ellipsis', lastPageIndex]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightRange = range(totalPages - 2, totalPages)
    return [firstPageIndex, 'ellipsis', ...rightRange]
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [firstPageIndex, 'ellipsis', ...middleRange, 'ellipsis', lastPageIndex]
  }

  return range(1, totalPages)
}
