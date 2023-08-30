import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Jibon2 from '../assets/Jibon2.png'
import Nur from '../assets/Nur.png'
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


function Testimonials() {
  const Data=[
    {
      id:"1",
      name:"Nur Vando",
      review:"a formal assessment of something with the intention of instituting change if necessary.comprehensive review of UK defence policy"
    },    {
      id:"2",
      name:"Nur Vando",
      review:"a formal assessment of something with the intention of instituting change if necessary.comprehensive review of UK defence policy"
    },    {
      id:"3",
      name:"Nur Vandon",
      review:"a formal assessment of something with the intention of instituting change if necessary.comprehensive review of UK defence policy"
    },    {
      id:"4",
      name:"Nur Vando",
      review:"a formal assessment of something with the intention of instituting change if necessary.comprehensive review of UK defence policy"
    },
  ]
  return (
<Section className="pb-32 px-2 overflow-hidden">
<Container>
        <div className='text-center ml-[-68%] md:ml-0 '>
          <h5 className='font-pop font-medium text-base capitalize'>Review from Clients</h5>
          <h3 className='font-pop text-3xl text-btn font-bold capitalize mt-4'>Testimonials</h3>
        </div>
        <div className=' md:ml-0 ml-[-70%]'>
        <Swiper className='w-[370px] md:w-[500px] py-14'
          // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{ clickable: true }}
      
        >
          {
            Data.map(({id,name,review},index)=>{
              return(
                <SwiperSlide className='py-4 px-3 md:px-7 bg-card rounded-3xl w-[450px] items-center mx-auto text-center'>
              <div>
              <img src={Nur} alt={Nur} className='w-[60px] h-[60px] border-4 border-card rounded-full text-center mx-auto' />
              
              </div>
              <h5 className='my-3 font-pop text-2xl font-bold  text-btn'>{name}</h5>
              <p>{review}</p>
                </SwiperSlide>
             
              )
            })
          }
        </Swiper>
        </div>
</Container>
</Section> 
 )
}

export default Testimonials