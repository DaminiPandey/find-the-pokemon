import React from 'react'
import pikachu from '../assets/images/pikachu.png'
import meowth from '../assets/images/meowth.png'
import jigglypuff from '../assets/images/jigglypuff.png'

const Dropdown = () => {
  return (
    <div className='absolute bg-black right-3 z-10'>
      <ul className='flex flex-col p-0'>
        <li className='cursor-pointer hover:bg-cyan-900 border-b-2 border-transparent hover:border-cyan-400 p-2 px-4'>
          <img src= {pikachu} className= 'w-16 inline pr-3'/> <span className= 'text-white pr-3'>Pikachu</span>
        </li>
        <li className='cursor-pointer hover:bg-cyan-900 border-b-2 border-transparent hover:border-cyan-400 p-2 px-4'>
          <img src= {meowth} className= 'w-16 inline pr-3'/> <span className= 'text-white pr-3'>Meowth</span>
        </li>
        <li className='cursor-pointer hover:bg-cyan-900 border-b-2 border-transparent hover:border-cyan-400 p-2 px-4'>
          <img src= {jigglypuff} className= 'w-16 inline pr-3'/> <span className= 'text-white pr-3'>Jigglypuff</span>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown