import React from 'react'
import Section from '../Section'
import Container from '../Container'
import {FiMail} from 'react-icons/fi'
import {BsMessenger,BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
function Contacts() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oakl0cj', 'template_194aqhh', form.current, '1oZRASKWcHpOl7C7y')
   e.target.reset
  };
  return (
  <Section className="overflow-hidden pb-36">
    <Container>
        <div className='text-center ml-[-68%] md:ml-0 '>
          <h5 className='font-pop font-medium text-base capitalize'>Get in Touch</h5>
          <h3 className='font-pop text-3xl text-btn font-bold capitalize mt-4'>Contact Me</h3>
        </div>
      
      <div className='flex  flex-col md:flex-row   mt-16'>
      <div className='flex flex-col ml-28   gap-y-4 w-60'>
          <div className='py-8 px-6 text-center rounded-xl bg-card'>
              <FiMail className='mx-auto'/>
              <h4 className='mt-2 font-semibold' >Email</h4>
              <h5>manvirjibon@gmail.com</h5>
              <a className='text-btn' href="mailto:manvirjibon@gmail.com" target='_blank'>Send a message</a>
            </div>
            <div className='py-8 px-6 text-center rounded-xl bg-card'>
              <BsMessenger className='mx-auto'/>
              <h4 className='mt-2 font-semibold' >Messenger</h4>
              <h5>Contact Messenger</h5>
              <a className='text-btn' href="https://m.me/manvir.khanjibon" target='_blank'>Send a message</a>
              {/* https://m.facebook.com/messages/compose?ids=manvir.khanjibon */}
            </div>
            <div className='py-8 px-6 text-center rounded-xl bg-card'>
              <BsWhatsapp className='mx-auto'/>
              <h4 className='mt-2 font-semibold' >What's app</h4>
              <h5>Contact What's app</h5>
              <a className='text-btn' href="https://api.whatsapp.com/send?phone=01868273679" target='_blank'>Send a message</a>
            </div>
       </div>
      <div className='md:ml-32 ml-[60px] mt-8 md:mt-0'>
      <form  ref={form} onSubmit={sendEmail} className='flex w-[324px]  flex-col gap-y-7'>
        <input type="text" name='name' className='bg-transparent  border  px-20 py-4' placeholder='Your Full Name'  required />

        <input type="email" name='email' className='bg-transparent border px-14 py-4' placeholder='Enter Your Email' required />
        <textarea name="message" id="" rows="7"  className='bg-transparent border px-14 py-4' placeholder='Your Message' required></textarea>
        <button type='submit' onSubmit={sendEmail} className='py-3 px-5 bg-btn w-40 rounded-lg ml-12'>send message</button>
        
      </form>
      </div>
      </div>
    </Container>
  </Section>
  )
}

export default Contacts