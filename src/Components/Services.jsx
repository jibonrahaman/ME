import React from 'react'
import Section from '../Section'
import Container from '../Container'
import {BiCheck}  from 'react-icons/bi'
function Services() {
  return (
    <Section className="py-20 overflow-hidden">
      <Container>
        <div className='text-center '>
          <h5 className='font-pop font-medium text-base capitalize'>What I offer</h5>
          <h3 className='font-pop text-3xl text-btn font-bold capitalize mt-4'>Secvices</h3>
        </div>
      <div className='flex md:flex-row flex-col w-[300px] md:w-full ml-16 md:ml-0 py-4  gap-y-6 md:gap-y-0 justify-between'>
      <div className='bg-[#2c2c6c] h-full  rounded-r-[2rem] rounded-b-[2rem]'>
        <div className='p-[2rem] bg-btn rounded-b-3xl '>
          <h3>UI/UX Design</h3>
        </div>
        <ul className='px-8 pb-7'>
          <li className='flex gap-3 pt-3'><BiCheck/>
          <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex  gap-3 pt-3'><BiCheck/>
          <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex  gap-3 pt-3'><BiCheck/>
          <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex gap-3 pt-3'><BiCheck/>
         <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex  gap-3 pt-3'><BiCheck/>
           <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
         
        </ul>
        </div>

      


        <div className='bg-[#2c2c6c]  rounded-r-[2rem] rounded-b-[2rem]'>
        <div className='p-[2rem] bg-btn rounded-b-3xl '>
          <h3>Web Devlopment</h3>
        </div>
        <ul className='px-8 pb-10'>
          <li className='flex gap-3 pt-3'><BiCheck/>
          <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex  gap-3 pt-3'><BiCheck/>
          <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex  gap-3 pt-3'><BiCheck/>
          <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex gap-3 pt-3'><BiCheck/>
         <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex  gap-3 pt-3'><BiCheck/>
           <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex gap-3 pt-3'><BiCheck/>
           <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
        </div>
        {/* ================== */}


        <div className='bg-[#2c2c6c] h-full  rounded-r-[2rem] rounded-b-[2rem]'>
        <div className='p-[2rem] bg-btn rounded-b-3xl '>
          <h3>Content Creation</h3>
        </div>
        <ul className='px-8 pb-10'>
          <li className='flex gap-3 pt-3'><BiCheck/>
          <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex  gap-3 pt-3'><BiCheck/>
          <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex  gap-3 pt-3'><BiCheck/>
          <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex gap-3 pt-3'><BiCheck/>
         <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className='flex  gap-3 pt-3'><BiCheck/>
           <p className='w-[215px]'>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        
        </ul>
        </div>
      </div>
      </Container>
    </Section>
  )
}

export default Services