import React from 'react'

const Hero = ({ children }) => {
  return (
    <h1 className="my-4 bg-[linear-gradient(99deg,#ead8fd_22.85%,#7a97fa_64.34%,#fd5ab2_96.6%)] bg-clip-text !p-3 p-0 text-3xl font-semibold tracking-tight text-transparent sm:my-2 sm:my-5 sm:text-3xl md:leading-[3.5rem] lg:text-[44px]">
      {children}
    </h1>
  )
}

export default Hero
