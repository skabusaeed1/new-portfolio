import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {

  const connectUs = [
    {
      item : 'Portfolio',
      link : '/',
      id : 1,
    },
    {
      item : 'Github',
      link : 'https://github.com/skabusaeed1',
      id : 1,
    },
    {
      item : 'Linkedin',
      link : 'https://www.linkedin.com/in/abusaeed-ahmed-shaikh-440b04233/?originalSubdomain=in',
      id : 1,
    },
  ];

  const alsoCheckout = [
    {
      item : 'Home',
      link : '/',
      id : 1,
    },
    {
      item : 'Services',
      link : '/contact',
      id : 1,
    },
    {
      item : 'Our Work',
      link : '/projects',
      id : 1,
    },
    {
      item : 'Contact Us',
      link : '/contact',
      id : 1,
    },
  ];


  return (
    <div id="footer" className='bg-zinc-900 text-white'>
    <div className='w-full h-[max-content] pt-20 pb-12 flex gap-5 px-5 f_logo presents'>
      
      <div className="w-1/2 flex flex-col justify-between h-full">
        <div className="heading">

        <h1 className='text-[6vw] leading-none uppercase font-black'>My</h1>
        <h1 className='text-[6vw] leading-none uppercase font-black tracking-tight'>Portfolio</h1>
        </div>
      </div>


      <div className="w-1/2 h-[max-content] f_details">

      <h1 className='text-[6vw] leading-none uppercase font-black mb-4'>Presents</h1>
      <div className="contact-container flex justify-between items-center gap-5 mt-15">

      <div className="social-block">
        <p className='mb-5'>Connect with us :</p>
        {
          connectUs.map((item, i) => (
                <Link className='block' to={item.link} target='_blank' key={item.id}><span>{item.item}</span></Link>
            ))
        }
      </div>

      <div className="links flex flex-col">
      <p className='mb-5'>Also check out :</p>
        {
            alsoCheckout.map((item, i) => (
                <Link className='block' to={ item.link } key={item.id}><span>{item.item}</span></Link>
            ))
        }
      </div>
        </div>
      </div>
    </div>
      <div className="address mt-20 mb-5 flex flex-col justify-start items-start text-start w-1/2 mx-auto">
            <Link className='inline-block my-2' href="#"><span>Address : Patel Nagar, Aurangabad, Maharashtra, INDIA.</span></Link>
            <Link className='inline-block my-2' href="#"><span>Mail : shaikhabusaeed1@gmail.com</span></Link>
            <Link className='inline-block my-2' href="#"><span>Phone : +91 9823931152</span></Link>
        </div>
    <div className="f_bot flex justify-between items-center bg-zinc-800 w-full text-zinc-400 px-auto">
        <Link href="#" className='block'>&copy; Shaikh Abusaeed 2024 Legal Terms</Link>
        <p className='text-nowrap'>Website by Abusaeed</p>
    </div>
    </div>
  )
}
