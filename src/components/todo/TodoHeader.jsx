import React from 'react';
import { CheckSquare } from 'lucide-react';
import Cursor from './cursor';
import { useState } from 'react';
'use client'
export function TodoHeader() {
  const [hover, setHover] = useState(false)

  return (
    <>
      <div   className="text-center mb-8 ">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CheckSquare className="w-8 h-8 text-red-900" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}  />
          <h1 onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className="text-3xl font-bold text-gray-200">Todo List</h1>
        </div>
        <p onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}  className="text-gray-500">Stay organized and get things done</p>
      </div>
      
      <Cursor hover={hover}/>

    </>

  );
}
