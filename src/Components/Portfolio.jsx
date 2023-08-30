import React from 'react'
import Section from '../Section'
import Container from '../Container'
import demo1 from '../assets/demo1.png'
import demo2 from '../assets/demo2.png'
import demo3 from '../assets/demo3.png'
import Cta from '../Cta'
function Portfolio() {
  return (
   <Section className="py-16 overflow-hidden">
    <Container>
           <div className='text-center '>
          <h5 className='font-pop font-medium text-base capitalize'>MY Recent Work</h5>
          <h3 className='font-pop text-3xl text-btn font-bold capitalize mt-4'>Portfolio</h3>
        </div>

     <div className='flex  flex-col md:flex-row  justify-between  '>
     <div className=' py-7 px-5 w-80 ml-10  bg-card rounded-3xl'>
         <div className='h-[170px] w-[250px]' >
           <img src={demo1} alt={demo1} className='h-full w-full rounded-2xl' />
         </div>
         <h3 className='font-pop font-medium text-lg w-[280px] mt-4'>Best Crypto Telegram Groups Reviewed</h3>
         <button className="gap-x-2 flex mt-4">
        <a href="https://github.com/" download className={`bg-transparent text-white p-3 rounded-xl  duration-500 hover:bg-btn hover:text-white border-2 border-btn cursor-pointer `} >Github</a>
        <a href="https://dribbble.com/tags/website" className={`bg-btn text-white p-3 rounded-xl  duration-500 hover:bg-transparent hover:text-btn border-2 border-btn cursor-pointer`} >Live Demo</a>
    </button>
        </div>
      
        <div className=' py-7 px-5  w-80 ml-10 my-7 bg-card rounded-3xl'>
         <div className='h-[170px] w-[250px]' >
           <img src={demo2} alt={demo2} className='h-full w-full rounded-2xl' />
         </div>
         <h3 className='font-pop font-medium text-lg w-[280px] mt-4'>Best Crypto Telegram Groups Reviewed</h3>
         <button className="gap-x-2 flex mt-4">
        <a href="https://github.com/" download className={`bg-transparent text-white p-3 rounded-xl  duration-500 hover:bg-btn hover:text-white border-2 border-btn cursor-pointer `} >Github</a>
        <a href="https://dribbble.com/tags/website" className={`bg-btn text-white p-3 rounded-xl  duration-500 hover:bg-transparent hover:text-btn border-2 border-btn cursor-pointer`} >Live Demo</a>
    </button>
        </div>
        <div className=' py-7 px-5  w-80 ml-10 bg-card rounded-3xl'>
         <div className='h-[170px] w-[250px]' >
           <img src={demo3} alt={demo3} className='h-full w-full rounded-2xl' />
         </div>
         <h3 className='font-pop font-medium text-lg w-[280px] mt-4'>Best Crypto Telegram Groups Reviewed</h3>
         <button className="gap-x-2 flex mt-4">
        <a href="https://github.com/" download className={`bg-transparent text-white p-3 rounded-xl  duration-500 hover:bg-btn hover:text-white border-2 border-btn cursor-pointer `} >Github</a>
        <a href="https://dribbble.com/tags/website" className={`bg-btn text-white p-3 rounded-xl  duration-500 hover:bg-transparent hover:text-btn border-2 border-btn cursor-pointer`} >Live Demo</a>
    </button>
        </div>
     </div> 
       <div className='flex mt-9   flex-col md:flex-row  justify-between  '>
     <div className=' py-7 px-5 w-80 ml-10  bg-card rounded-3xl'>
         <div className='h-[170px] w-[250px]' >
           <img src={demo1} alt={demo1} className='h-full w-full rounded-2xl' />
         </div>
         <h3 className='font-pop font-medium text-lg w-[280px] mt-4'>Best Crypto Telegram Groups Reviewed</h3>
         <button className="gap-x-2 flex mt-4">
        <a href="https://github.com/" download className={`bg-transparent text-white p-3 rounded-xl  duration-500 hover:bg-btn hover:text-white border-2 border-btn cursor-pointer `} >Github</a>
        <a href="https://dribbble.com/tags/website" className={`bg-btn text-white p-3 rounded-xl  duration-500 hover:bg-transparent hover:text-btn border-2 border-btn cursor-pointer`} >Live Demo</a>
    </button>
        </div>
      
        <div className=' py-7 px-5  w-80 ml-10 my-7 bg-card rounded-3xl'>
         <div className='h-[170px] w-[250px]' >
           <img src={demo2} alt={demo2} className='h-full w-full rounded-2xl' />
         </div>
         <h3 className='font-pop font-medium text-lg w-[280px] mt-4'>Best Crypto Telegram Groups Reviewed</h3>
         <button className="gap-x-2 flex mt-4">
        <a href="https://github.com/" download className={`bg-transparent text-white p-3 rounded-xl  duration-500 hover:bg-btn hover:text-white border-2 border-btn cursor-pointer `} >Github</a>
        <a href="https://dribbble.com/tags/website" className={`bg-btn text-white p-3 rounded-xl  duration-500 hover:bg-transparent hover:text-btn border-2 border-btn cursor-pointer`} >Live Demo</a>
    </button>
        </div>
        <div className=' py-7 px-5  w-80 ml-10 bg-card rounded-3xl'>
         <div className='h-[170px] w-[250px]' >
           <img src={demo3} alt={demo3} className='h-full w-full rounded-2xl' />
         </div>
         <h3 className='font-pop font-medium text-lg w-[280px] mt-4'>Best Crypto Telegram Groups Reviewed</h3>
         <button className="gap-x-2 flex mt-4">
        <a href="https://github.com/" download className={`bg-transparent text-white p-3 rounded-xl  duration-500 hover:bg-btn hover:text-white border-2 border-btn cursor-pointer `} >Github</a>
        <a href="https://dribbble.com/tags/website" className={`bg-btn text-white p-3 rounded-xl  duration-500 hover:bg-transparent hover:text-btn border-2 border-btn cursor-pointer`} >Live Demo</a>
    </button>
        </div>
     </div>
        
    
    </Container>
   </Section>
  )
}

export default Portfolio