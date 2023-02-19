import React from 'react'
import { tagType, thirdweb } from '../assets'
import { daysLeft } from '../utils'

const FundCard = ({ owner, title, description, category, target, deadline, amountCollected, image, handleClick }) => {
  const remainingDays = daysLeft(deadline);
  
    return (
    // A Card for displaying campaign contents 
    <div className='sm:w-[288px] w-full rounded-[15px] bg-[#0F3460] cursor-pointer ' onClick={handleClick}>
        {/* Image from createCampaign */}
        <img src={image} alt='fund' className='w-full h-[158px] object-cover rounded-t-[15px]'/>
        
        
        <div className='flex flex-col p-4'>

            {/* Category */}
            <div className='flex flex-row items-center mb-[18px]'>
                <img src={tagType} alt="tag" className='w-[17px] h-[17px] object-contain'/>
                <p className='ml-[12px] mt-[2px] font-epilogue font-medium text-[15px] text-[#79797e]'>
                    {category}
                </p>
            </div>

            {/* Title and Description */}
            <div className='block'>
                <h3 className='font-epilogue font-semibold text-white text-[16px] text-left leading-[26px] truncate'>
                    {title}
                </h3>
                <p className='mt-[5px] font-epilogue text-[#79797e] font-[12px] text-left leading-[18px] truncate'>
                    {description}
                </p>
            </div>

            {/* Amount Collected and Days Left */}
            <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
                <div className='flex flex-col'>
                    <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>{amountCollected}</h4>
                    <p className='mt-[3px] font-epilogue font-normal text-[14px] text-[#79797e] leading-[18px] sm:max-w-[120px] truncate'>Raised of {target}</p>
                </div>

                <div className='flex flex-col'>
                    <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>{remainingDays}</h4>
                    <p className='mt-[3px] font-epilogue font-normal text-[14px] text-[#79797e] leading-[18px] sm:max-w-[120px] truncate'>Days Left</p>
                </div>
            </div>

            {/* Owner of the campaign */}
            <div className='flex items-center mt-[20px] gap-[12px]'>
                <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#0A2647]'>
                    <img src={thirdweb} alt='user' className='w-1/2 h-1/2 object-contain'/>
                </div>
                <p className='flex-1 font-epilogue font-normal text-[14px] text-[#808191] truncate'>
                    by <span className='text-[#b2b3bd]'>
                        {owner}
                    </span>
                </p>
            </div>

        </div>
    </div>
  )
}

export default FundCard