import React from 'react';
import { Link } from "react-router-dom";
import './cards.css'

export default function Cards() {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-.05" className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-5 lg:flex-row flex-col'>
        <div className="cardcontainer lg:w-1/2 h-[50vh] w-full hover:scale-95 ease-in duration-500">
            <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative" style={{background: "url('https://my-portfolio-beta-one-45.vercel.app/static/media/techBlog_cover.ba34f8870f74bef78cda.webp') no-repeat center/cover", }}>
                {/* <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" /> */}
                <Link to='https://mern-blog-33ns.onrender.com/' target="_blank">
                <p className='text-4xl font-bold ' >Tech Blogs</p></Link>
                <Link to='https://github.com/abhishekSonawane97/mern-blog' target="_blank">
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10  whitespace-nowrap hover:bg-white hover:text-black transition-all duration-500'>@Source Code</button>
                </Link>
            </div>
        </div>

        <div className="cardcontainer lg:w-1/2 flex gap-5  h-[50vh] w-full">
            <div className="card w-1/2 h-full bg-[#213229] rounded-xl flex items-center justify-center relative hover:scale-95 ease-in duration-500">
                <img src="https://my-portfolio-beta-one-45.vercel.app/static/media/pro2.536f4a52e4e956221c03.jpg" className='h-full w-full rounded-xl' alt="" />
                <Link to='https://github.com/abhishekSonawane97/News-Now' target="_blank">
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10  whitespace-nowrap  hover:bg-white hover:text-black transition-all duration-500 sourceLink'>@News Now</button></Link>
            </div>
            <div className="card w-1/2 h-full bg-[#213229] rounded-xl  flex items-center justify-center relative hover:scale-95 ease-in duration-500">
            <Link to='https://post-master-api-test-mc6uk3p8g-abhisheksonawane97.vercel.app/' className='h-full w-full rounded-xl' target="_blank">
                <img src="https://my-portfolio-beta-one-45.vercel.app/static/media/pro3.210ca3a94323ac6e30a8.jpg" className='h-full w-full rounded-xl ' alt="" /></Link>
                <Link to='https://github.com/abhishekSonawane97/postMaster_API_Test' target="_blank">
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 whitespace-nowrap  hover:bg-white hover:text-black transition-all duration-500 sourceLink'>@PostMaster</button></Link>
            </div>
        </div>
    </div>
  )
}
