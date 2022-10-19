import React,{useEffect, useState} from 'react'

const Timer = ({timeOn, setTimeOn, time, setTime}) => {
  

  useEffect(()=>{
    let interval;
    if (timeOn) {
      interval = setInterval(()=>{
      setTime((time) => time + 1);
      }, 1000);
    } else {

      clearInterval(interval);
    }
    return () => clearInterval(interval);
    
  }, [time, timeOn]);

  return (
    <div>
        <span>{Math.floor(time / 3600 % 60).toString().padStart(2, '0')} : </span>
        <span>{Math.floor(time / 60 % 60).toString().padStart(2, '0')} : </span>
        <span>{Math.floor(time % 60).toString().padStart(2, '0')}</span>
    </div>
  )
}

export default Timer