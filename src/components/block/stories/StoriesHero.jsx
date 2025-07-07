import React from 'react'
import Button from '../../reusable/Button'
const StoriesHero = () => {
  return (
    <div className='pt-[150px] flex px-23 items-center gap-6 max-tablet:flex-col  max-tablet:px-13'>
      <section>
        <div className=' flex items-center max-tablet:flex-col'>
        <h1 className='text-5xl w-[310px] font-bold mb-7 text-[#122231] max-tablet:text-center '>Loved by our Customers</h1>
        <img className='w-[50px] ' src="./heart.png" alt="" />
        </div>
        <p className='mb-5 w-[420px] text-[18px] text-[#122231] max-tablet:text-center'>Stories of happy savers who Piggyvest has helped or is helping save for what truly matters to them.</p>
        <div className='max-tablet:flex max-tablet:justify-center'> 
        <Button  name="Add your story"
              bgColor="#122231"
              textColor="white" /></div>
      </section>
      <section>
        <img className="w-[900px]" src="./stories.png" alt="" />
      </section>
    </div>
  )
}

export default StoriesHero
