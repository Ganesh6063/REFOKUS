import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='max-w-full max-h-screen-xl mx-auto text-white bg-zinc-900 font-["satoshi"]'>
      <Navbar />
      <Work />
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards />
      <Footer/>
    </div>
  )
}

export default App
