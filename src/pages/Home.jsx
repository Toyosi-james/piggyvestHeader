import React from 'react'
import Hero from "../components/block/Home/Hero"
import Security from "../components/block/Home/Security"
import Savings from "../components/block/Home/Savings"
import Investment from '../components/block/Home/Investment'
import Saver from '../components/block/Home/Saver'
import Rev from '../components/block/Home/Rev'
import Logo from "../static/Logo"
import Footer from "../static/Footer"
const Home = () => {
  return (
    <div>
      <Hero/>
      <Security/>
      <Savings/>
      <Investment/>
      <Saver/>
      <Rev/>
      <Logo/>
      <Footer/>
      
      

 
    </div>
  )
}

export default Home
