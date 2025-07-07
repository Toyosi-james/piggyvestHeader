import React from 'react'

const StoriesReviews = () => {
     const storiesCards = [
        {
            title:"Ezinne B",
            info:"Hi lovelies, my name is Ezinne,i came know about piggyvest from a very close friend of mine,who i narrated how a...",
            desc:"Saturday 27th of january 2024 by 00:51AM",
            image:"./stories1.jpg",
            
        },
        
         {
            title:"Faousiyah A",
            info:"They help me to have extra savings apart from my bank account and it's easy and trusted",
            desc:"Tuesday, 23rd of January 2024 by 22:00PM",
             image:"./stories2.jpg",
             
        },

         {
            title:"Christianah I",
            info:"I saw the piggyvest advertisement on BBNaija show 2022 and checked the website. I was looking for someone to...",
            desc:"Tuesday, 2nd of January 2024 by 00:20 AM",
             image:"./stories3.jpg",
            
        },
        
         {
            title:"Ogbonna M",
            info:"piggyvest has helped me learn how to save money and they also give an interest per annum",
            desc:"Friday, 22nd of December 2023 by 03:23AM ",
             image:"./stories5.jpg",
             
        },
        
        
        
    ]
  return (
    <div className='pt-50 '>
      <section>
        <h1 className='text-center text-6xl text-[#122231] font-bold mb-15 max-tablet:text-5xl'>Recently Verified customer Stories</h1>
      </section>
      
          <section className='flex flex-wrap justify-center gap-0 m-0  items-center '>
        {storiesCards?.map((data,i)=>(
            <main className='bg-white h-[]400px] w-[370px] m-9 rounded-3xl p-10 flex  flex-col text-[#122231] max-tablet:items-center ' key={i}>
                <img className="w-[50px] rounded-4xl mb-5" src={data.image} alt="" />
                <h1 className=' text-2xl font-bold mb-5'>{""}{data.title}{""}</h1>
                
                    <p className=' font-medium mb-10 max-tablet:text-center'> {data.info}</p>
                    <p className=' font-medium text-[10px] max-tablet:text-center'>{data.desc}</p>
                

            </main>))}
      </section>
    </div>
  )
}

export default StoriesReviews
