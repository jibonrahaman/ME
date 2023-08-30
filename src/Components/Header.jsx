import React, { useState } from 'react'
import Container from '../Container'
import Section from '../Section'
import Button from '../Button'
import Cta from '../Cta'
import Jibon from '../assets/Jibon2.png'
import Header_Social from '../Header_Social'
import {MdBroadcastOnPersonal} from 'react-icons/md'
import {AiFillCloseCircle}  from 'react-icons/ai'
function Header() {
  const [show,setshow]=useState(false)
  const handleClick=()=>{
    setshow(!show)
  }
  return (
<Section className="pt-12  overflow-hidden">
<Container className="mx-auto  text-center relative h-full ">
  <div onClick={handleClick} className='md:hidden  ml-4  block' >
    {
      show ?<AiFillCloseCircle size={30}/>:<MdBroadcastOnPersonal size={30}/> 
    }
  </div>

<div className={`md:static absolute  duration-500 md:ml-0 ${show ? 'left-0' : '-left-96'}`}>
       <h1>Hello,I'm</h1>
     <h2 className='py-2 font-pop md:text-3xl font-extrabold'>MD Shahriar Ferdous</h2>
     <h5 className='text-light'>Fulstack Developer</h5>
   <Cta className="item-center text-center"/>
</div>



   <div className=' md:flex  md:justify-between px-3 md:px-0 '> 
<Header_Social className="flex flex-col w-6 md:w-0 gap-6 text-xl mt-[28%] after:content-[''] after:w-px after:h-[2rem] after:bg-btn after:ml-2"/>

   <div className="w-56 ml-[82px] md:w-[352px] bg-gradient-to-t from-bg md:mt-16 to-btn text-center items-center md:mx-auto rounded-t-[12rem] mt-[-300px]  "  >
    <img src={Jibon} alt={Jibon} />
   </div>

   <a href="#Contact" className='absolute  rotate-90 right-[70%]  md:right-14 bottom-20 text-btn   '> Scroll Down</a>
   </div>
    </Container>
</Section>
 
  )
}

export default Header