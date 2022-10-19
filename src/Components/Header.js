import  React, { useState } from 'react'
import pokeBall from '../assets/images/pokeball.png'
import Dropdown from './Dropdown'
import Timer from './Timer'

const Header = ({navRef, timeOn, setTimeOn, time, setTime}) => {

  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleDropdown = ()=>{
   setShowDropdown(!showDropdown);
  }


  return (
    <div ref={navRef} className='navBar bg-white sticky z-20 top-0'>
      <nav className='relative'>
        <ul className='items-center flex justify-between' >
            <li className='flex items-center p-4'><img src={pokeBall} className='w-16 pr-4'/>
            <span>Pokemon</span>
            </li>
            <li className='p-4'><Timer timeOn={timeOn} setTimeOn={setTimeOn} time={time} setTime={setTime}/></li>
            <li className='p-4'><button onClick={toggleDropdown} className= 'bg-white text-black rounded  pl-5 pr-5 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg></button></li>
        </ul>
       
        {
          showDropdown && <Dropdown />
        }
      </nav>
    </div>
  )
}

export default Header