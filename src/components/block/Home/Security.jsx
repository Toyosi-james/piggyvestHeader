import React from 'react'
import { MdLock } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";

const Security = () => {
  return (
    <div className='min-h-[70vh] max-w-[1280vh] px-20  flex items-center gap-11 max-tablet:flex-col '>
      <section className='bg-white  px-8 py-7 rounded-4xl  '>
        <MdLock size={45} color='#122231'  />
      </section>
      <section className='max-w-[700px] max-tablet:text-center'>
        <h1 className='font-bold text-[25px] text-[#122231] mb-5 '>Your security is our priority</h1>
        <p className='text-[#485260] text-[18px] mb-5'>piggyVest uses the highest level of internet Security  and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud</p>
        <main className='flex items-center gap-3 max-tablet:justify-center font-bold'> 
       <BsArrowReturnRight size={25} color='#122231' />
       <p className='text-[#122231]'>  More on our security measures</p>
        </main>
      </section>
    </div>
  )
}

export default Security
