import React from 'react'
import Button from '../components/reusable/Button'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1} from "react-icons/rx";
import { LuChevronDown } from "react-icons/lu";
import Sidebar from './Sidebar';
import { useState } from 'react'
import {Menu} from '@headlessui/react'
const Header = () => {

  const [toggle, setToggle]= useState(false)
  const handleToggle = () =>{
    setToggle(!toggle)
  }
  return (
    <div className='z-[10000]'>
    <header className='h-24 fixed top-0 left-0 w-full z-50 bg-[#f2f7f8] ' >

    <div className='flex justify-between px-8 mx-auto items-center h-full max-w-[1280px]'>
       <section className='flex items-center gap-10 font-medium '>
       <Link to="/"> <img src='./piggyvest logo.svg' alt='' className='w-45'/></Link>


        <div className='flex items-center gap-1 max-tablet:hidden'>
      <Link to="/Save"> <nav>Save</nav></Link> <LuChevronDown size={20} className='text-neutral-800'/></div>
      
 
      
       <Link to="/Invest"> <nav className='max-tablet:hidden'>Invest</nav></Link>
      <Link to="/Stories"> <nav className='max-tablet:hidden'> Stories</nav></Link>
       <Link to="/Faq"> <nav className='max-tablet:hidden'>FAQs</nav></Link>
       <div className='flex items-center gap-1 max-tablet:hidden'>
        <Link to="/Resources"><nav className='max-tablet:hidden'>Resources</nav></Link><LuChevronDown size={20} className='text-neutral-800'/></div>
        <Link to="/Shop"> <nav className='max-tablet:hidden'>Shop</nav></Link>
        </section>
        <section className='flex gap-4 max-tablet:hidden'>
     <Button name ="Sign in" border="1px  solid #122231" />
     <Button name = "Create free account" bgColor= "#122231" textColor ="white"/>
        </section>
        <section className='hidden max-tablet:block'>
          {toggle ? (<RxCross1 size={35} cursor="pointer" onClick={handleToggle}/>):(
        <RxHamburgerMenu size={35} cursor="pointer" onClick={handleToggle}/>)}
        </section>
    </div>
    </header>
    <div>
     {toggle && <Sidebar handleToggle={handleToggle}/>}
    </div>
    </div>
  )
}

export default Header
