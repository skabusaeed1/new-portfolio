import Navbar from './components/navbar/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/about/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/cards/Cards'
import Footer from './components/footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      {/* <Cards/> */}
      <Footer/>
    </div>
    </>
  )
}

export default App
