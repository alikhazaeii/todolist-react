import React, { useState } from 'react'
import ProfileImg from './../img/profit.jpg'
export const Profile = () => {

  return (
    <figure   className='w-[150px] h-[150px] absolute rounded-full overflow-hidden bg-red-700 z-20 bottom-0 left-0'>
      <img className='w-full h-full object-cover'src={ProfileImg} alt="" />
    </figure>
    
  )
}

