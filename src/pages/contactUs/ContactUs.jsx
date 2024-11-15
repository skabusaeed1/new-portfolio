import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/contactForm/ContactForm'

export default function ContactUs() {
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl font-bold text-center mt-8' >We’d Love to Hear From You.</h1>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
