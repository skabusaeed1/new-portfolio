import React from 'react';
import { Link } from "react-router-dom";
import './about.css';

const About = () => {


  return (
    <div className='w-full py-10 px-5 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black about'>
        <div className="aboutMe">
     <div className="py-20 heading border-b-[1px] border-[#a2b853]">

      <h1 className='text-[4vw] leading-none tracking-tight'>
      I am software engineer specializing in front-end technologies, dedicated to creating top-tier software solutions and exceptional UI development. With a focus on delivering seamless user experiences.</h1>
    </div>


    <div className="about-bottom flex justify-between items-start p-5 pb-20">
        <div className="left p-2 w-[20vw]">
            <p className='text-nowrap'>What you can expect:</p>
        </div>
        <div className="middle p-2 w-[50vw]">
            <p>
            I specialize in front-end technologies such as React, Redux, JavaScript, HTML, CSS, and SCSS, crafting visually stunning and highly functional user interfaces. My expertise extends to backend and database technologies like Node.js, Express.js, and MongoDB, enabling me to develop comprehensive, full-stack solutions.
<br/> <br/>
With a strong foundation in both client-side and server-side development, I can seamlessly integrate various technologies to create cohesive and efficient applications.</p>
        </div>
        <div className="right p-2 w-[20vw] flex">
    {/* <div className="social flex flex-col w-full justify-end">
<p className='flex items-end'>Social : </p>
<Link to="#" target='_blank' className="ig flex ml-10 my-1 items-end w-full">
Instagram
</Link>
<Link to="#" target='_blank' className="fb flex ml-10 my-1">
Facebook
</Link>
<Link to="#" target='_blank' className="wa flex ml-10 my-1">
Whatsapp
</Link>
    </div> */}
        </div>
    </div>
    </div>

<div className="w-full border-t-[1px] border-[#637032] pt-10 mt-20 flex gap-5 skills">
    <div className="w-1/2  h-[max-content] experience">
        <h1 className='md:text-4xl sm:text-3xl mb-6'>Experience :</h1>
        <li className="mb-2">
        A detail-oriented professional with experience in front-end Software 
        Development in the Software-as- a-Service (SaaS) company.</li>
        <li className="mb-2">Experienced as a <b>Software Engineer</b> at Simplotel showcasing 
        proficiency in Front End Development, leading to successful project 
        outcomes.</li>
        <li className="mb-2"> Played a role in designing and deploying scalable application via React, Redux, JavaScript, sass, CSS, and HTML in a multi-tiered environment.</li>
        <li className="mb-2"> Gained an understanding of building web applications and intuitive user 
        interfaces.</li>

        <Link to='/about'>
        <button className='px-5 py-4 mt-10 bg-zinc-900 rounded-full text-white flex gap-10 items-center hover:bg-white hover:text-black transition duration-500'>READ MORE
        <div className="w-2 h-2 bg-zinc-400 rounded-full hover:bg-black"></div></button></Link>
    </div>

    <div className="w-1/2 h-[70vh] bg-[#637032] rounded-3xl h-[max-content]">
    <h1 className='md:text-3xl sm:text-2xl text-white p-4'>Skills :</h1>
    <div className="skills p-4 text-white">
        <ul>
            <li className="skillHeader mb-4"><p className='mb-1'>Front-End Technologies:</p> React, Redux, JavaScript, HTML, CSS, SCSS</li>
            <li className="skillHeader mb-4"><p className='mb-1'>Back-End Technologies:</p> Node.js, Express.js</li>
            <li className="skillHeader mb-4"><p className='mb-1'>Database Technologies:</p> MongoDB</li>
            <li className="skillHeader mb-4"><p className='mb-1'>Tools and Platforms:</p>  Git, Firebase</li>
            <li className="skillHeader mb-4"><p className='mb-1'>Additional Skills:</p>  Responsive Design, RESTful APIs, Agile Methodologies, Version Control with Git</li>
        </ul>
    </div>
    </div>
</div>

     </div>
  )
}

export default About
