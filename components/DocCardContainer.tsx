import React from 'react'

interface CardContainerProps {
  children: React.ReactNode
}

const DocCardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 gap-6 p-4 md:grid-cols-2">
      {children}
    </div>
  )
}

export default DocCardContainer
