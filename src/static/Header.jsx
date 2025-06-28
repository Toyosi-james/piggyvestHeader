import React from 'react'
import Button from '../components/reusable/Button'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { LuChevronDown } from "react-icons/lu";


const Header = () => {
  return (
    <div className='flex justify-between px-10 py-7 items-center mx-12 max-tablet:px-3 '>
       <section className='flex items-center gap-10 font-medium '>
       <Link to="/"> <img src='./piggyvest logo.svg' alt='' className='w-45'/></Link>
        <div className='flex items-center gap-1'>
      <Link to="/Save"> <nav className='max-tablet:hidden'>Save</nav></Link> <LuChevronDown size={20} className='text-neutral-800'/></div>
       <Link to="/Invest"> <nav className='max-tablet:hidden'>Invest</nav></Link>
      <Link to="/Stories"> <nav className='max-tablet:hidden'>Stories</nav></Link>
       <Link to="/Faq"> <nav className='max-tablet:hidden'>FAQs</nav></Link>
       <div className='flex items-center gap-1'>
        <Link to="/Resources"><nav className='max-tablet:hidden'>Resources</nav></Link><LuChevronDown size={20} className='text-neutral-800'/></div>
        
        </section>
        <section className='flex gap-4 max-tablet:hidden'>
     <Button name ="Sign in" border="1px  solid #122231" />
     <Button name = "Create free account" bgColor= "#122231" textColor ="white"/>
        </section>
        <section className='hidden max-tablet:block'>
        <RxHamburgerMenu size={35}/>
        </section>
    </div>
  )
}

export default Header
