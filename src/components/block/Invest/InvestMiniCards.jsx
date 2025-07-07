import React from 'react'


const InvestMiniCards = () => {
    const investCards = [
        {
            title:"CORPORATE DEBT NOTES SERIES XLVII",
            info:"#5000 per unit",
            desc:"578 investors",
            image:"./img1.jpg",
            btn:"Sold Out",
        },
        
         {
            title:"CORPORATE DEBT NOTES SERIES XLVI",
            info:"#5000 per unit",
            desc:"745 investors",
             image:"./img2.jpg",
             btn:"Sold Out",
        },

         {
            title:"CORPORATE DEBT NOTES SERIES XLV",
            info:"#5000 per unit",
            desc:"470 investors",
             image:"./img3.jpg",
             btn:"Sold Out",
        },
        
         {
            title:"CORPORATE DEBT NOTES SERIES XLIV",
            info:"#5000 per unit",
            desc:"860 investors",
             image:"./img4.jpg",
             btn:"Sold Out",
        },
        
         {
            title:"CORPORATE DEBT NOTES SERIES XLIII",
            info:"#5000 per unit",
            desc:"373 investors",
             image:"./img5.jpg",
             btn:"Sold Out",
        },

         {
            title:"CORPORATE DEBT NOTES SERIES XLIII",
            info:"#5000 per unit",
            desc:"1271 investors",
             image:"./img6.jpg",
             btn:"Sold Out",
        },
        
        
    ]



  return (
    <div className='pt-20 ' >
      <h1 className='text-center mb-10 text-6xl font-bold text-[#122231] max-tablet:text-5xl'> Recent Opportunities on investify</h1>
    <section className='flex flex-wrap justify-center gap-0 m-0  items-center '>
        {investCards?.map((data,i)=>(
            <main className='bg-white h-[]400px] w-[370px] m-9 rounded-3xl pb-10' key={i}>
                <img className="pt-0 rounded-t-3xl" src={data.image} alt="" />
                <h1 className='p-7 text-2xl font-bold'>{""}{data.title}{""}</h1>
                <div className='pb-5 flex justify-between px-7 '>
                    <p className='w-[50px] font-medium'> {data.desc}</p>
                    <p className='w-[60px] font-medium'>{data.info}</p>
                </div>
                <button className='ml-7 bg-[#faf1f4] px-6 py-2 rounded-4xl text-[#b32e58] font-bold'>{data.btn}</button>
            </main>
        ))}
    </section>
    </div>
  )
}

export default InvestMiniCards
