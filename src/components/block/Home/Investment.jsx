import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import Investmented from "../../../assets/invest.avif"

const Investment = () => {
  return (
    <div className='px-25 max-tablet:px-15'>
      <section className='text-center'>
      <h1 className='text-[50px] font-bold text-[#122231 mb-3'>Diverse Ways to Invest</h1>
        <p className='mb-14 text-[25px] text-[#122231]'>Grow your money and invest for your future Confidently</p>
     </section>
       
        
        <section className='flex bg-[#7913e5] pt-15 px-10 rounded-4xl  justify-between max-tablet:flex-col max-tablet:items-center'>
            <main>
                <h1 className='text-[40px] text-white font-bold mb-6 max-tablet:text-center'>Earn Up to 35% returns</h1>
                <p className='w-[300px] text-white text-[20px] max-tablet:w-[480px] max-tablet:text-center'>Invest securely and confidently on the go. Grow your money confidently by investing in prevetted investment oppourtunities.</p>
                <div className='flex items-center gap-4 pt-30 text-white font-bold max-tablet:p-5 max-tablet:justify-center'>
            <BsArrowReturnRight size={25}/>
            <p>Learn about Investments</p>
                </div>
            </main>
            <main>
<img className='w-[400px]' src={Investmented} alt="" />
            </main>
            </section> 
    </div>
  )
}

export default Investment
