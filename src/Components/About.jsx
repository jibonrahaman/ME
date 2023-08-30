import React from 'react'
import Section from '../Section'
import Container from '../Container'
import J from '../assets/J.png'
import {FaAward}  from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {GiFilmProjector} from 'react-icons/gi'
function About() {
  return (
    <Section className="py-24  overflow-hidden">
           <Container>
          <div className='text-center'>
          <h5 className='font-pop font-medium text-base capitalize'>Get to know </h5>
           <h2 className='font-pop text-3xl text-btn font-bold capitalize mt-4'>About Nur</h2>
          </div>
 
      <div className='flex md:justify-between md:flex-row flex-col mt-20'>
               <div className='w-3/12 ml-[42px] md:ml-0'>
               <div className='bg bg-gradient-to-t from-btn to-btn w-[300px] md:w-[360px] h-[350px] rounded-3xl'>
                <div className='rotate-[8deg]  hover:rotate-[-8deg] duration-700'>
                  <img src={J} alt={J}  className='w-[300px] md:w-[360px] h-[350px] rounded-3xl  '/>
                </div>
                </div>
               </div>

                <div className='w-[300px] md:w-1/2 mt-24 md:mt-0'>
                      <div className='flex  md:flex-row  flex-wrap   md:justify-between ml-32 md:ml-0 '>
                      <div className='px-[2rem]  py-10 duration-500 h-36  text-center  bg-bg border hover:bg-card'>
                            <FaAward size={25} className='ml-[45px]'/>
                          <h3>Experience</h3>
                          <h5>3 Years Working</h5>
                          </div>
                          <div className='px-[2rem] my-5 md:my-0 duration-500 py-10 h-36  text-center  bg-bg border hover:bg-card'>
                            <AiOutlineUsergroupAdd size={25} className='ml-[45px]'/>
                          <h3>Clients</h3>
                          <h5>300+ Worldwide </h5>
                          </div>
                          <div className='px-[2rem] duration-500 py-10 h-36  text-center  bg-bg border hover:bg-card'>
                            <GiFilmProjector size={25} className='ml-[45px]'/>
                          <h3>Projects</h3>
                          <h5>80+ Completed</h5>
                          </div>
                      </div>
                      <p className='mt-6 w-[340px]  ml-[22px] md:ml-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi eum accusantium sit, aut dolores velit esse recusandae eligendi? Impedit, quis ea molestiae deleniti quibusdam atque quod maxime illo? Aliquam, quisquam.</p>
                      <button className='mt-10  ml-5 md:ml-0'>
                      <a href="#Contact" className={`bg-btn text-white py-3 px-5 rounded-xl   text-base md:text-2xl font-medium font-pop duration-500 hover:bg-transparent hover:text-btn border-2 border-btn cursor-pointer`} >Let's Talk</a>
                      </button>
                </div>
            </div>
           
           </Container>
    </Section>
  )
}

export default About