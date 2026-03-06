import { visit } from 'unist-util-visit'

const DEFAULT_WIDTH = 1200
const DEFAULT_HEIGHT = 800

export function remarkExternalImgToOptimizedImg() {
  return (tree: import('unist').Node) => {
    visit(
      tree,
      (node) =>
        node.type === 'paragraph' &&
        (node as { children?: import('unist').Node[] }).children?.some((n) => n.type === 'image'),
      (node) => {
        const paragraph = node as { children: import('unist').Node[] }
        const imageNodeIndex = paragraph.children.findIndex((n) => n.type === 'image')
        if (imageNodeIndex === -1) return

        const imageNode = paragraph.children[imageNodeIndex] as {
          type: string
          url: string
          alt?: string
        }
        const url = imageNode.url

        // Skip local images (handled by remarkImgToJsx)
        const isLocal = url.startsWith('/') && !url.startsWith('//')
        if (isLocal) return

        // Transform external images to OptimizedImg (which selects next/image per domain)
        imageNode.type = 'mdxJsxFlowElement'
        ;(imageNode as Record<string, unknown>).name = 'OptimizedImg'
        ;(imageNode as Record<string, unknown>).attributes = [
          { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt ?? '' },
          { type: 'mdxJsxAttribute', name: 'src', value: url },
          { type: 'mdxJsxAttribute', name: 'width', value: DEFAULT_WIDTH },
          { type: 'mdxJsxAttribute', name: 'height', value: DEFAULT_HEIGHT },
        ]

        paragraph.type = 'div'
        paragraph.children[imageNodeIndex] = imageNode
      }
    )
  }
}
