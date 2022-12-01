import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    AOS.init()
  
  },[])
  

  return (
    <div className="text-center py-5 flex justify-center items-center">
        <div 
          data-aos="fade-right"
          data-aos-delay="100" 
          data-aos-duration="1000"
          className='capitalize p-4 border shadow-lg rounded-2xl'>
            
            <h2 className=" cursor-pointer text-2xl">
              <p 
              data-aos="slide-down"
              data-aos-delay="400"
              data-aos-duration="1000"
              className='text-4xl cursor-pointer'
            >👋</p>hi, i'm<br/><span className='uppercase text-3xl font-extralight text-secondary-color'>mohamed</span></h2>
        </div>
        
    </div>
  )
}

export default Header