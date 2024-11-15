import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './projects.css';
import HorizontalCard from '../../components/horizontalCards/HorizontalCards';
import Intro from '../../components/Intro';
import Dropdown from '../../components/Dropdown';
import Footer from '../../components/footer/Footer';



export default function Projects() {

  const dropdownContent = [
    { 
      title : 'Ramoji Film City Hotels',
      content : 'Creating a seamless and immersive experience that reflects the grandeur of Ramoji Film City, with intuitive navigation and engaging visuals for effortless bookings.',
      link : `https://www.hotels.ramojifilmcity.com/`,
      id: 1,
    },
    { 
      title : 'Evolve Back',
      content : 'Creating a seamless and immersive experience that reflects the grandeur of Ramoji Film City, with intuitive navigation and engaging visuals for effortless bookings.',
      link : 'https://www.evolveback.com/',
      id : 2,
    },
    { 
      title : 'Devshree Deogarh',
      content : 'Blended traditional aesthetics with modern functionality to highlight the rich history and cultural heritage of Devshree Deogarh, providing a smooth and responsive user experience.',
      link : 'https://www.devshreedeogarh.com/',
      id : 3,
    },
    { 
      title : 'Saraca Hotels',
      content : 'Focused on a clean, modern design emphasizing ease of use and accessibility, with a streamlined booking process and comprehensive property information.',
      link : 'https://www.saracahotels.com/',
      id : 4,
    },
    { 
      title : 'Ravishing Retreat',
      content : 'Developed a visually soothing interface with intuitive navigation, capturing the essence of relaxation and rejuvenation offered by Ravishing Retreat.',
      link : 'https://www.ravishingretreat.com/',
      id : 5,
    },
    { 
      title : 'The Nanee Nepal',
      content : 'Showcased the natural beauty and adventure of the Nanne Nepal with vibrant visuals and interactive elements, ensuring a seamless experience across all devices.',
      link : 'https://www.thenanee.com/',
      id : 6,
    },
    { 
      title : 'Trees N Tigers',
      content : 'Created an immersive experience highlighting wildlife and nature, with dynamic content and user-friendly booking options for nature enthusiasts.',
      link : 'https://www.treesntigers.com/',
      id : 7,
    },
    { 
      title : 'Alibu Resort',
      content : 'Developed a sleek, sophisticated interface reflecting the modern amenities and luxurious ambiance of Alibu Resort, enhancing user experience with easy navigation and responsive design.',
      link : 'https://www.aliburesort.com/',
      id : 8,
    }
  ];

  const introContent = {
    'heading' : "Crafting Digital Experiences: My Journey at Simplotel",
    'content' : "As a software engineer at Simplotel, I've developed and enhanced numerous websites for prestigious hotels and resorts. Here are some highlights of my journey",
  };


  return (
    <div>
      <Navbar/>
      <Intro introData={ introContent }/>
      <Dropdown data={ dropdownContent } />
      <HorizontalCard/>
      <Footer/>
    </div>
  )
}
