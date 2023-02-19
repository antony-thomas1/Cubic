import React from 'react'
import cube  from '../assets/cube.png'
import welcome from '../assets/welcome.jpg'
import sign from '../assets/sign.png'
import {Route} from 'react-router-dom';
import App from '../App'
import { Home } from '.';
import { Link, useNavigate, BrowserRouter } from 'react-router-dom';
import { navlinks } from '../constants';



const Welcome = () => {

  // const { connect, address } = useStateContext()
  const navigate = useNavigate();
  

  return (
    <div className='bg-[#0A2647] flex justify-between items-center flex-col rounded-[10px] p-10 '>
      {/* Navbar */}
      <div className='w-full bg-transparents text-center justify-center items-center flex'>
      
        <div className='w-[52px] h-[52px] flex justify-center items-center bg-transparent cursor-pointer hover:animate-bounce '>
          <img src={cube} alt='logo' className=' object-contain'/>
        </div>

        <div className='pl-2 cursor-pointer'>
          <h4 className='font-epilogue font-extrabold text-[35px] text-[#00c570] break-all'>
            cubic
          </h4>
                  
          <p className='leading-[2px] uppercase font-epilogue font-semibold text-[12px] text-white'>
            crowdfunding
          </p>
        </div>

      </div>

      <div className=' outline-none  bg-[#00337C]  rounded-[20px] flex sm:flex-row flex-col m-[40px]  w-full sm:h-[430px] h-[600px]  overflow-hidden '>
          

            {/* Text and Button */}
            <div className='justify-center items-center text-start sm:p-10 p-6'>
              <div className='font-epilogue font-bold text-white sm:text-[34px] text-[24px] py-[40px] pl-[30px] '>
                <h4>Crowdfund projects with Web3. </h4>
                <h4 className='mt-2'>Let the world know your campaign.</h4>
                <h4 className='mt-2'>Get your funds in crypto.</h4>
              </div>

              
                <div className='justify-center items-center text-center'>
                  <Link to='/home'>
                    <button type='button'
                      className='font-epilogue font-semibold text-[18px] leading-[26px] text-white w-2/4 lg:h-[52px] p-3 rounded-[10px] bg-[#6942eb] hover:bg-[#150c55]'
                      onClick={() => navigate('')}
                      >
                      Get Started 
                    </button>
                  </Link>
                </div>
            
            </div>
            
            {/* Welcome Image */}
            <div className=' text-center flex sm:w-2/5 w-full justify-center items-center bg-white sm:h-full overflow-hidden object-contain'>
                <img src={welcome} alt='Welcome' />
            </div>
    
      </div>

      {/* Footer */}
      <div className='w-full h-[200px] bg-transparent flex sm:flex-row flex-col justify-between  items-center px-10 mt-[10px] '>
        <div className='flex justify-center items-center bg-transparent'>
          <img src={sign} alt='sign' className=' object-contain' width={200} height={190} />
        </div>

        <div className='flex flex-col justify-center items-center text-center'>
          <h4 className='font-epilogue font-normal text-white text-[20px]'>Contact:</h4>
          <h4 className='font-epilogue font-normal text-white text-[20px] '>antonythomas@tutanota.com</h4>
        </div>

        <div className='flex justify-center items-center text-center'>
          <h4 className='font-epilogue font-normal text-white text-[20px]'>All Rights Reserved</h4>
        </div>
      </div>
      
    </div>
  
  )
}

export default Welcome