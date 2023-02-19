import React from 'react'
import { loader } from '../assets'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex justify-center items-center flex-col'>
        <img src={loader} alt='loader' className='w-[100px] h-[100px] object-contain'/>
        <p className='mt-[20px] font-epilogue font-bold text-[20px] text-center text-white'>
            Loading... Please wait...
        </p>
    </div>
  )
}

export default Loader