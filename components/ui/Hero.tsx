import React from 'react'

const Hero = ({ children }) => {
  return (
    <h1 className="text-gradient my-4 !p-3 p-0 text-3xl font-semibold tracking-tight sm:my-2 sm:my-5 sm:text-3xl md:leading-[3.5rem] lg:text-[44px]">
      {children}
    </h1>
  )
}

export default Hero
