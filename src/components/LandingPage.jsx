import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full h-[max-content] bg-zinc-900 pt-1'>
      <div className="texttructure mt-32 px-20">
        {
            [ "Hi, I'm Abusaeed,", 'crafting exceptional', 'user experiences' ].map((item, i) => (
                <div className="masker" key={i}>
                    <div className="w-fit flex items-end over">
                        {
                            i === 1 && (
                            <motion.div initial={{width:0}} animate={{width: '9vw'}} transition={{ ease: [0.65, 0, 0.45, 1], duration: 1 }} className=' mr-[1vw] w-[9vw] h-[5.8vw] relative -top-[0.2vw] bg-red-500  '>

                            </motion.div>
                        )
                        }
                    <h1 className=" mb-[0.5vw] font-['Founders_ Grotesk_X-Condensed'] text-[5vw] leading-none tracking-tighter font-extrabold flex items-center">{item}</h1>
                    </div>
                </div>
            ))
        }
      <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-end items-center py-5 px-22 ">
        <div className="start">
        <a href="mailto:shaikhabusaeed1@gmail.com" className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] rounded-full border-l-zinc-400 text-md  uppercase cursor-pointer hover:bg-white hover:text-black transition duration-500'>Write Me</div>
            <div className="w-10 h-10 border-[1px] rounded-full border-l-zinc-400 flex items-center justify-center cursor-pointer  hover:bg-white hover:text-black transition duration-500 ">
                <span className='rotate-[45deg] cursor-pointer  hover:bg-white hover:text-black transition duration-200'>
                <FaArrowUpLong />
                </span>
            </div>
            </a>
        </div>

      </div>
      </div>
    </div>
  )
}

export default LandingPage
