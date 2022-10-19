import React, {useState} from 'react'

const Menu = ({xPos, yPos, coords, showMenu ,handleMenu, found}) => {


  return (
    <div style={{position:"absolute", top:`${yPos}px`, left:`${xPos}px`, zIndex:10 }} className= {`${showMenu ? 'flex' : 'hidden'}  bg-black text-white flex-col rounded-lg`}>
      <button onClick={()=>handleMenu(coords[0],coords[1], 'Pikachu')} className={`hover:bg-cyan-900 border-b border-gray-400 hover:border-cyan-400 p-2 px-4 ${found['Pikachu'] ? 'line-through' : ''}`} disabled= {found['Pikachu']}>Pikachu</button>
      <button onClick={()=>handleMenu(coords[0],coords[1], 'Meowth')} className={`hover:bg-cyan-900 border-b border-gray-400 hover:border-cyan-400 p-2 px-4 ${found['Meowth'] ? 'line-through' : ''}`} disabled= {found['Meowth']}>Meowth</button>
      <button onClick={()=>handleMenu(coords[0],coords[1], 'Jigglypuff')} className={`hover:bg-cyan-900 border-b  border-gray-400 hover:border-cyan-400 p-2 px-4 ${found['Jigglypuff'] ? 'line-through' : ''}`} disabled= {found['Jigglypuff']}>Jigglypuff</button>
    </div>
  )
}

export default Menu