import React from 'react'
import Section from '../Section'
import Container from '../Container'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import Flex from './Flex'

function Experience() {
  return (
<Section className="py-7 px-3 md:px-0 overflow-hidden">
  <Container > 
   <div className='text-center'>
   <h4 className='font-pop font-medium text-base capitalize'>What Skils I  Have</h4>
    <h3 className='font-pop text-3xl text-btn font-bold capitalize mt-4'> My Experience</h3>
   </div>
    <div className='flex flex-col md:flex-row md:justify-center  gap-x-0 gap-y-5 md:gap-x-20  mt-10'>

   
     <div className='w-[350px]  py-10 px-9 bg-card rounded-2xl'>
     <h2 className=' font-bold text-xl text-btn'>Fronted Devlopment</h2>
     
       
  <Flex className="justify-between mt-8">
    
              <div>
          <div className='items-center gap-x-2'>
          <BsFillPatchCheckFill/>
          <h6>HTML</h6>
          </div>
          <p  className='text-center'>Experienced</p>
              </div>

              <div>
         <div className='flex items-center gap-x-2'>
          <BsFillPatchCheckFill/>
          <h6>CSS</h6>
          </div>
          <p  className='text-center'>Intermediete</p>
              </div>
  </Flex>

  <Flex className="justify-between mt-8">
    
    <div>
    <div className='flex items-center gap-x-2'>
          <BsFillPatchCheckFill/>
          <h6>JavaScript</h6>
          </div>
<p  className='text-center'>Experienced</p>
    </div>

    <div>
    <div className='flex items-center gap-x-2 ml-4'>
          <BsFillPatchCheckFill/>
          <h6>BootStrap</h6>
          </div>
<p  className='text-center'>Experienced</p>
    </div>
</Flex> 

<Flex className="justify-between mt-8">
    
    <div>
    <div className='flex items-center gap-x-2'>
          <BsFillPatchCheckFill/>
          <h6>Tailwind</h6>
          </div>
<p   className='text-center'>Experienced</p>
    </div>

    <div>
    <div className='flex items-center gap-x-2 '>
          <BsFillPatchCheckFill/>
          <h6>React</h6>
          </div>
<p className='text-center'> Experienced</p>
    </div>
</Flex>
     </div>
 
 
  

          {/* ======================== */}
          <div className='w-[350px]  py-10 px-9 bg-card rounded-2xl'>
     <h2 className=' font-bold text-xl text-btn'>Backend Devlopment</h2>
     
       
  <Flex className="justify-between mt-8">
    
              <div>
          <div className='items-center gap-x-2'>
          <BsFillPatchCheckFill/>
          <h6>NodeJs</h6>
          </div>
          <p  className='text-center'>Experienced</p>
              </div>

              <div>
         <div className='flex items-center gap-x-2'>
          <BsFillPatchCheckFill/>
          <h6>MongoDb</h6>
          </div>
          <p  className='text-center'>Intermediete</p>
              </div>
  </Flex>

  <Flex className="justify-between mt-8">
    
    <div>
    <div className='flex items-center gap-x-2'>
          <BsFillPatchCheckFill/>
          <h6>Php</h6>
          </div>
<p  className='text-center'>Experienced</p>
    </div>

    <div>
    <div className='flex items-center gap-x-2 ml-4'>
          <BsFillPatchCheckFill/>
          <h6>My SQL</h6>
          </div>
<p  className='text-center'>Experienced</p>
    </div>
</Flex> 

<Flex className="justify-between mt-8">
    
    <div>
    <div className='flex items-center gap-x-2'>
          <BsFillPatchCheckFill/>
          <h6>Pyhon </h6>
          </div>
<p   className='text-center'>Experienced</p>
    </div>

    
</Flex>
     </div>
    </div>
  </Container>
</Section>
  )
}

export default Experience