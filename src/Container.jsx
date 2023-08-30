import React, { children } from 'react'

function Container({children,className}) {
  return (
    <div className={`w-[1320px] mx-auto ${className} `}> {children}</div>
  )
}

export default Container