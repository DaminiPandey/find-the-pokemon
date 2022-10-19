import React, { useEffect } from 'react'

const Modal = ({showModal, setShowModal, time, setTime}) => {
    const handleModal=()=>{
        setShowModal(false);
    }
  return (
    <div className= {`${showModal  ? 'fixed' : 'hidden'} bg-stone-100 text-black top-1/2 left-1/2 -translate-x-1/2 top-2 left-1/2 -translate-x-1/2 p-1.5 rounded-md px-8 text-xl rounded-md px-8 text-xl z-20`}>
        <h2 className='p-1.5'>Congratulations! You won.</h2>
        <hr className='border-3 w-full'/>
        <p className='p-1.5'>Time Taken : <span className='text-red-600'>{Math.floor(time / 3600 % 60).toString().padStart(2, '0')} : {Math.floor(time / 60 % 60).toString().padStart(2, '0')} : {Math.floor(time % 60).toString().padStart(2, '0')}</span></p>
        <hr />
        <div className='text-center'><button onClick={handleModal} className='bg-lime-600 text-white p-1 rounded my-2 '>OK</button>

</div>
    </div>
  )
}

export default Modal