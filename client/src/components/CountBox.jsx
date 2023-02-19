import React from 'react'

const CountBox = ({value, title}) => {
  return (
    <div className='flex flex-col items-center w-[150px]'>
        <h4 className='font-epilogue font-bold text-white text-[30px] p-3 bg-[#0F3460] rounded-t-[10px] w-full text-center truncate'>
            {value}
        </h4>
        <p className='font-epilogue font-normal text-[16px] text-[#808191] bg-[#0A2647] px-3 py-2 w-full rounded-b-[10px] text-center'>
            {title}
        </p>
    </div>
  )
}

export default CountBox