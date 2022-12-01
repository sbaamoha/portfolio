import Link from 'next/link'
import { useState } from 'react'

import {BsGithub,BsLinkedin} from 'react-icons/bs'
import {BiMenu,BiMenuAltRight} from 'react-icons/bi'
import {SiTransportforlondon} from 'react-icons/si'
const Navbar = () => {
    const [navIsOpen, setnavIsOpen] = useState(true)
  return (
    <nav className="flex px-6 lg:px-12 nav items-center justify-between py-6 capitalize">
        <Link href='/' className='flex hover:text-secondary-color transition-all gap-2 items-center text-2xl'>
            <SiTransportforlondon />
            <h3 className='font-bold text-2xl'>mohamed</h3>
        </Link>
        <div 
            className='humberger lg:hidden cursor-pointer '
            onClick={() => setnavIsOpen(prev => !prev )}
            >
            {navIsOpen ? <BiMenu /> : <BiMenuAltRight/> }

        </div>
        <ul className='ul'>
            {["projects","technologies","about"].map(item =>
                <li className='btn' key={item}>
                    <div className=' w-2 h-2 rounded-full bg-secondary-color' />                    
                    <Link href={`#${item}`}>{item}</Link>
                </li>
            )}
        </ul>
        
        <ul className={`ulCol lg:hidden flex-col gap-10 bg-primary-color absolute top-[60px] border-l shadow-lg w-[60vw] h-[90vh] p-6 ${!navIsOpen ? `right-0 ` : `right-[100%]`} `}>
            {["projects","technologies","about"].map(item =>
                <li 
                    onClick={() => setnavIsOpen(true)}
                    className='btnCol' key={item}>
                    <Link href={`#${item}`}>{item}</Link>
                </li>
            )}
            <li className='flex text-2xl gap-3 absolute bottom-16 right-5'>
                <Link href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}>
                    <BsGithub/>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}>
                    <BsLinkedin/>
                </Link>
            </li>
        </ul>

        
    </nav>
  )
}

export default Navbar