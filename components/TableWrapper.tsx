import React, { ReactElement, JSX } from 'react'

type HTMLElementProps = JSX.IntrinsicElements[keyof JSX.IntrinsicElements]

const styleRow = (row: ReactElement<HTMLElementProps>) => {
  if (row.type === 'tr') {
    return React.cloneElement(
      row,
      {
        className: 'border-b border-gray-200 border-1',
      } as HTMLElementProps,
      React.Children.map(row.props.children, (cell: ReactElement<HTMLElementProps>) => {
        if (cell.type === 'td' || cell.type === 'th') {
          return React.cloneElement(cell, {
            className: 'px-6 py-4 border-r border-white-200',
          } as HTMLElementProps)
        }
        return cell
      })
    )
  }
  return row
}

const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child

          const element = child as ReactElement<HTMLElementProps>

          // Preserve thead/tbody/tfoot structure
          if (element.type === 'thead' || element.type === 'tbody' || element.type === 'tfoot') {
            return React.cloneElement(
              element,
              element.props,
              React.Children.map(element.props.children, (row) => {
                if (!React.isValidElement(row)) return row
                return styleRow(row as ReactElement<HTMLElementProps>)
              })
            )
          }

          // Handle direct tr children by wrapping in tbody
          if (element.type === 'tr') {
            return <tbody>{styleRow(element)}</tbody>
          }

          return child
        })}
      </table>
    </div>
  )
}

export default TableWrapper
