import React from 'react'
import Button from './Button'

function Product({val, move, count}) {
  return (
    <div className='w-full py-20 h-[23rem] text-white '>
       <div onMouseEnter={()=>{move(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
         <h1 className='text-5xl  capitalize font-medium'>{val.title}</h1>
          <div className='dets w-1/3'>
            <p className='mb-10 text-2xl w-[85%]'>{val.description}</p>
          <div className='flex items-center gap-5'>
          {val.live && <Button />}
          {val.case && <Button title = "Case Study" />}
          </div>
            </div>
          
       </div>
    </div>
  )
}

export default Product
