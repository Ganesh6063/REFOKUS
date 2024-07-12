import React from 'react'

function Stripe({Val}) {
  return (
    <div className= ' flex items-center justify-between w-[16.66%] px-5  py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600'>
      <img src={Val.url} alt="" />
       <span className='semibold'>{Val.Number}</span>
    </div>
  )
}

export default Stripe
