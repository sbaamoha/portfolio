import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {images} from '../public/constants'
import Image from 'next/image';

const Header: React.FC = () => {


  useEffect(() => {
    AOS.init()
  },[])
  

  return (
    <div className="text-center px-6 h-[70vh] my-16 flex flex-col justify-center items-center gap-5 lg:gap-10">
        <div 
          data-aos="fade-right"
          data-aos-delay="100" 
          data-aos-duration="1000"
          className='capitalize p-5 shadow-md rounded-2xl'>
            
            <h2 className="cursor-pointer text-4xl">
              <p 
              data-aos="slide-down"
              data-aos-delay="400"
              data-aos-duration="1000"
              className='text-4xl cursor-pointer'
            >👋🏼</p>hi, i&apos;m<br/><span className='uppercase text-3xl font-extralight text-secondary-color'>mohamed</span></h2>
        </div>
        <div 
          className='capitalize rounded-lg shadow-md p-10'
          data-aos="fade-left"
          data-aos-delay="100" 
          data-aos-duration="1000">
          <h2 className='text-xl lg:text-3xl'>i&apos;m front end developer <br/> <span className='text-xl'>using reactjs</span></h2>
        </div>
        <div className='uppercase text-3xl text-center border-b py-6 dark:border-gray-700'>
          <h3>i know that<span className='uppercase text-secondary-color'> good website</span> <br/>means<span className='uppercase text-secondary-color'> good buisness</span></h3>
        </div>
        
    </div>
  )
}

export default Header
