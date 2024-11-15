import React from 'react';
import './aboutPage.css';
import Navbar from '../../components/navbar/Navbar';
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import Intro from '../../components/Intro';
import { Button } from '@nextui-org/button';



export default function AboutPage() {

    const introContent = {
        'heading' : "About Me",
        'content' : "I am a dedicated software engineer with a strong focus on front-end technologies, including React, Redux, JavaScript, HTML, CSS, and SCSS. My proficiency extends to backend and database technologies such as Node.js, Express.js, and MongoDB, enabling me to develop comprehensive full-stack solutions. Currently, I am working at Simplotel. I am passionate about creating visually stunning and highly functional user interfaces, and I am ready to take on new challenges in job opportunities.",
      };


  return (
    <div>
        <Navbar/>
        <Intro introData={ introContent }/>
      <div className="aboutPage-section mb-12 p-8">
      <div className="w-full border-t-[1px] border-[#637032] pt-10 mt-20 flex gap-5">
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

        <Link to='/projects'>
        <Button className='bg-zinc-700 text-white my-4'>READ MORE
        <div className="w-2 h-2 bg-zinc-400 rounded-full hover:bg-black"></div></Button></Link>
    </div>

    <div className="w-1/2 h-[70vh] bg-zinc-700 rounded-3xl h-[max-content] skills">
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
      <Footer/>
    </div>
  )
}
