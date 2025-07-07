import React from 'react'
import Button from "../components/reusable/Button"
import {Link} from "react-router-dom"

const Sidebar = ({handleToggle}) => {
  return ( 
    <div className='bg-[#f2f7f8]    min-h-[120vh] fixed w-full flex items-center justify-center'>
      <div className='flex flex-col items-center gap-7 font-medium '>
       <Link onClick={handleToggle} to="/Save">{""} <nav>Save</nav> </Link>
        <Link onClick={handleToggle} to="/Invest"> {""}
        <nav>Invest</nav>
         </Link>
       <Link onClick ={handleToggle} to="/Stories"> {""}<nav>Stories</nav></Link>
       <Link onClick={handleToggle} to="/FAQs"> {""}
       <nav>FAQs</nav> </Link>
       <Link onClick={handleToggle} to="/Resources"> {""}<nav>Resources</nav></Link>
         <Link onClick={handleToggle} to="/Shop"> {""}<nav>Shop</nav></Link>
        <Button name="Sign In" border="1px solid #122231" pad="15px 290px"/>
        <Button name="Create free Account" bgColor= "#122231" textColor ="white" pad="17px 240px"/>
      </div>
    </div>
  )
}

export default Sidebar
