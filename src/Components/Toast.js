import React, { useEffect } from 'react'

const Toast = ({pokemon, showToast, setShowToast, correct}) => {
    useEffect(()=>{
        if(showToast){
            setTimeout(()=>{
                setShowToast(false);
            },3000)
        }
    },[showToast])
  return (
    <div className= {`${correct ? "bg-green-800" : "bg-red-600"} text-white fixed top-28 left-1/2 -translate-x-1/2 p-1.5 rounded-md px-8 text-xl`}> You found {pokemon}! </div>
  )
}

export default Toast;