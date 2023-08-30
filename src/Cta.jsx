import React from 'react'
import Button from './Button'
import CV from './assets/Monir.pdf'

function Cta({className}) {
  return (
    <div className='mt-9' >
    <button className='flex gap-x-5 ml-6 md:mx-auto'>
        <a href={CV} download className={`bg-transparent text-white py-4 px-6 rounded-xl  text-base  md:text-2xl font-medium font-pop duration-500 hover:bg-btn hover:text-white border-2 border-btn cursor-pointer  ${className}`} >Download CV</a>
        <a href="#Contact" className={`bg-btn text-white py-4 px-8 rounded-xl   text-base md:text-2xl font-medium font-pop duration-500 hover:bg-transparent hover:text-btn border-2 border-btn cursor-pointer ${className}`} >Let's Talk</a>
    </button>
    </div>
  )
}

export default Cta