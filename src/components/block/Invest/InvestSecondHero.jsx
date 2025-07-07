import React from 'react'

const InvestSecondHero = () => {
  return (
    <div className='flex pt-23 justify-between max-tablet:flex-col '>
      <section className='w-[1300px] bg-[#7913e7] pl-23 pt-23 max-tablet:w-[685px] max-tablet:h-[70vh] max-tablet:text-center max-tablet:px-23 '> 
      <h1 className='text-[50px] mb-6 leading-15 text-white font-bold'>We've made it easier for anyone to get started.</h1>
      <p className='w-[500px] text-white text-[18px]'>Finally, you can access pre-vetted low-medium risk primary and secondary investment opportunities easily with any amount you have. No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety. </p>
      </section>
      <section>
      <img src="./secondHero.png" alt="" />
      </section>
    </div>
  )
}

export default InvestSecondHero
