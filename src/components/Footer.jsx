import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl py-10 mx-auto flex gap-32 '>
        <div className='basis-1/2 '>
        <h1 className='text-[11.5rem] font-semibold tracking-tight  leading-none'>Refokus.</h1>
         </div>
        <div className='basis-1/2 flex gap-4'>
         <div className='basis-1/3 '>
            <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
           { ["instgram","twitter (x?)", "LinkedIn"].map ((item , index )=><a key={index} className='block mt-2 text-zinc-600 capitalize'>{item}</a>)}
         </div>
         <div className='basis-1/3 '>
            <h4 className='mb-10 text-zinc-500 capitalize'>Sitemap</h4>
           { ["Home","Work (x?)", "Careers" ,"Contact"].map ((item , index )=><a key={index} className='block mt-2 text-zinc-300 capitalize'>{item}</a>)}
         </div>
         <div className='basis-1/2 flex flex-col items-end'>
            <p className='text-right'>Refokus is a pionerring digital agency by design and empowered by technology</p>
            <img className='w-42 mt-14' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
         </div>
        </div>
        </div>      
    </div>
  )
}

export default Footer
