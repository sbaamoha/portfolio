import { useEffect } from "react"
import Image from "next/image"

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import {images} from '../public/constants'
// items
const skills = [
    {title: 'web development', desc: 'i can build a web app for you', imgUrl: images.about01},
    {title: 'landing page', desc: 'i can build a landing page for you', imgUrl: images.about02},
    {title: 'web animation', desc: 'i can provide cool animation', imgUrl: images.about04},
]

const About: React.FC = () => {

  useEffect(() => {
    AOS.init()
  },[])

  return (
    <div id="about" className="flex flex-col px-6 py-6 lg:py-12 lg:px-12 justify-center items-center capitalize">
        <h3 className="uppercase text-center text-4xl my-3">what i can <span className="text-secondary-color">provide</span> ?</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-6 gap-6">
          {skills.map((skill, i) =>
              ( 
              <div 
                  data-aos="zoom-in-down"
                  data-aos-duration="500"
                  key={i} 
                  className='rounded-lg shadow-lg skill'>
                  <Image className="rounded-lg" src={skill.imgUrl} alt={skill.title} width={400} />
                  <div className="p-5">
                    <h2 className="text-3xl">{skill.title} </h2>
                    <p className="text-gray-color">{skill.desc} </p>
                  </div>
              </div>
              )
          )}
        </div>
    </div>
  )
}

export default About