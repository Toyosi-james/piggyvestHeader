import React from 'react'

const Logo = () => {
  return (
    <div className='p-25 max-tablet:p-13'>
        <h1 className='text-center mb-8 text-[30px] text-[#122231] font-bold'>As featured in</h1>
        <section className='flex gap-10 flex-wrap max-tablet:justify-center  '>
      <img className='h-[50px]' src="./tclogo.png" alt="" />
      <img className='h-[50px]' src="./output.png" alt="" />
      <img className='h-[50px]' src="./techcrunch.png" alt="" />
      <img  src="./pymnts.svg" alt="" />
      <img src="./fast.png" alt="" />
      <img   src="./cio.png" alt="" />
      </section>
    </div>
  )
}

export default Logo
