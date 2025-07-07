import React from 'react'

const Saver = () => {
  return (
    <div className='text-center mt-[250px] px-25 max-tablet:p-13'>
      <section>
        <h1 className='text-[50px] mb-3 text-[#122231] font-bold '>Meet Our Saver of the Month </h1>
        <p className='text-[27px] mb-8 text-[#122231]'>Every month, we shine a spotlight,on one saver, asking them about their savings culture and how Piggyvest has helped them.</p>
      </section>
      <section className='flex items-center justify-center'>
                <iframe className='w-[800px] h-[400px] rounded-3xl' width="560" height="315" src="https://www.youtube.com/embed/2EnGMGxKuII?si=Gc_6Dar3Dcmi32m9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </section>
    </div>
  )
}

export default Saver
