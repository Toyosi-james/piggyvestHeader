import React from 'react'

const InvestCards = () => {
    const invest =[
        {
            title:"Investments simplified",
            desc:"With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.",
            color:"#7913e5",
            image:"./invest1.png",
        },
        {
            title:"Invest confidently",
            desc:"We Work with leading licensed investment houses such as ARM, AIICO, and Stanbic.",
            color:"#7913e5",
            image:"./invest2.png",
        },
        {
            title:"Diversify Your Portfolio",
            desc:"Invest in various industries such as fixed income instruments, agriculture, transportation, etc. ",
            color:"#7913e5",
            image:"./invest3.png"
        }

    ]
  return (
    
    <div className='pt-20'>
      <section className='text-center mb-8'>
     <h1 className='text-[60px] text[#122231] font-bold max-tablet:text-[40px]'>Simple investments with great returns</h1>
     <p className='text-[#122231]'>Investments are made readily accessible to everyone</p>
      </section>
      <section className='flex justify-center max-tablet:flex-col max-tablet:items-center'>
      {invest?.map((data,i)=>(<main className='bg-white m-5 p-5 h-[600px] w-[350px] flex flex-col justify-between pb-0 rounded-3xl pt-15 max-tablet:items-center' key={i}>
       <div> <h1 style={{color:`${data.color}`}} className='font-bold text-4xl w-[250px] mb-5 max-tablet:text-center'>{""}{data.title}{""}</h1>
        <p className='w-[280px] text-[#3d4f8e] text-[16px] max-tablet:text-center'>{data.desc}</p></div>
      <div>  <img className="w-[300px]" src={data.image} alt="" /></div>
      </main>))}
      </section>
    </div>
  )
}

export default InvestCards
