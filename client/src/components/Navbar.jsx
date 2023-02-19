import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';
import { useStateContext } from '../context';

const Navbar = () => {

  const { connect, address } = useStateContext()
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#0F3460] rounded-[100px]'>
        {/* Input field */}
        <input type="text" placeholder='Search for Campaigns' className=' flex w-full font-epilogue font-normal text-[16px] placeholder:text-[#79797e] text-white bg-transparent outline-none'/>

        {/* Search Icon */}
        <div className='w-[72px] h-full rounded-[20px] bg-[#00c570] flex justify-center items-center cursor-pointer'>
          <img src={search} alt="search" className='w-[15px] h-[15px] object-contain'/>
        </div>

      </div>

      {/* Connect Button */}
      <div className='sm:flex hidden flex-row justify-end gap-6'>
        <CustomButton
          btntype='button'
          title={address ? "Create a Campaign" : "Connect"}
          styles={address ? "bg-[#00c570]" : "bg-[#0F3460]"}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect();
          }}
        />
        {/* Profile Image */}
        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#0F3460] flex justify-center items-center cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>

      </div>

      {/* Small Screen Navigation */}
      <div className='sm:hidden flex justify-between items-center relative'>
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>

        {/* Hamburger Menu */}
        <img
          src={menu}
          alt='menu'
          className='w-[34px] h-[34px] object-contain cursor-pointer'
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
        {/* Floating Div on Menu Click */}
        <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
          <ul className='mb-4'>
            {navlinks.map((link) => (

              
              // Link Selection div
              <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                  onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                  }}
              >
                {/* Sidebar links for mobile devices */}
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                />

                {/* Description */}
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                  {link.name}
                </p>

              </li>
            ))}
          </ul>

          <div className='flex mx-4'>
            <CustomButton
              btntype='button'
              title={address ? "Create a Campaign" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }}
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar