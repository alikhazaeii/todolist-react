import React, { useEffect, useRef } from 'react'

export default function Cursor({hover}) {
  const size =hover?100 : 50;

  const circle = useRef();

  const mouse= useRef({
    x:0,
    y:0
  })
 
  const manageMouseMove = (e)=>{
    const { clientX , clientY } = e
    // console.log(clientX , clientY);
    mouse.current ={
      x:clientX,
      y:clientY,
    }
    
  }

  const moveCircle =(x,y)=>{
    circle.current.style.top=`${y}px`
    circle.current.style.left=`${x}px`
  }

  const animate = ()=>{
    window.requestAnimationFrame(animate);
    moveCircle(mouse.current.x , mouse.current.y)
  }
  useEffect(()=>{
    animate()
    window.addEventListener('mousemove',manageMouseMove)
    return ()=>window.removeEventListener('mousemove',manageMouseMove)
  },[])
  return (
    
    <div 
      ref={circle}
      className='fixed top-0 left-0 bg-white rounded-full translate-x-[-50%] translate-y-[-50%] mix-blend-difference pointer-events-none flex justify-center items-center '
      style={{
        width: size,
        height: size,
        filter:`blur(${hover?20 : 0}px)`,
        transition:'filter 0.2s ease-out , height 0.2s ease-out , width 0.2s ease-out'
      }} 
         
         />
         
      
  )
}
