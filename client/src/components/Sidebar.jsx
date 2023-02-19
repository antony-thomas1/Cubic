import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sun } from '../assets';
import cube from '../assets/cube.png'
import { navlinks } from '../constants';

// Icon Properties and Parameters accepted
const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick } ) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#0A2647]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div  className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/home">
          <img src={cube} className='w-[56px] h-[56px] bg-[#0F3460] rounded-[10px] p-[7px]'/>
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#0F3460] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {/* Navigate to pages from Icons          0A2647 */}
        {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link} // Get all the link properties
              isActive={isActive}
              handleClick={() => { // Callback function to check wheather Active or not
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles="bg-[#0A2647] shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  )
}

export default Sidebar
