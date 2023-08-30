import React from 'react'

function Button({text,className}) {
  return (
<button className={`bg-btn text-white py-4 px-6 rounded-xl text-2xl font-medium font-pop duration-500 hover:bg-transparent hover:text-btn border-2 border-btn cursor-pointer  ${className}`}>{text}</button>
  )
} 

export default Button