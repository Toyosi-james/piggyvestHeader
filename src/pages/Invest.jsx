import React from 'react'
import InvestHero from '../components/block/Invest/InvestHero'
import InvestCards from '../components/block/Invest/InvestCards'
import Logo from "../static/Logo"
import Footer from "../static/Footer"
import InvestSecondHero from '../components/block/Invest/InvestSecondHero'
import InvestMiniCards from '../components/block/Invest/InvestMiniCards'

const Invest = () => {
  return (
    <div>
      <InvestHero/>
      <InvestCards/>
      <InvestSecondHero/>
      <InvestMiniCards/>
      <Logo/>
      <Footer/>
    </div>
  )
}

export default Invest
