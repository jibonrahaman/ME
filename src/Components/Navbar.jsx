import React from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {BiSolidMessageSquareDetail} from 'react-icons/bi'

function Navbar() {
  return (
   <nav className='flex  bg-nav p-5 fixed my-0 mx-[25%] md:mx-[44%] duration-300 text-btn hover:text-blue-500 z-10 bottom-[2rem] left-0 rounded-3xl w-52 justify-around m-96'>
    <a href="#About"><AiOutlineHome/></a>
    <a href="#Experience"><AiOutlineUser/></a>
    <a href="#Services"><FiBook/></a>
    <a href="#Contact"><RiServiceLine/></a>
    <a href="#About"><BiSolidMessageSquareDetail/></a>
    
   </nav>
  )
}

export default Navbar