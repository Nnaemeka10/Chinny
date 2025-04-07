"use client"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from '../constants'
import { useState } from 'react'


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    function handleClick() {
        setIsOpen(!isOpen);
    }
  return (
    <nav id="nav" className="flexBetween max-container padding-container sticky z-50 py-5 no-scrollbar hide-scrollbar">
        <Link href="/" >
            <Image src="/logo.png" alt="logo" width={79} height={29}/>
        </Link>

        <div className='h-full ml-auto'>
        <ul className='hidden gap-9 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-blue-20'>
              {link.label}
            </Link>
          ))}
        </ul>

        <button onClick={handleClick} id="menu-btn" className={`${isOpen ? "open" : "" } block hamburger lg:hidden focus:outline-none`}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>


      <div className="lg:hidden">
            <div id="menu" className={`absolute flex-col items-center ${isOpen ? "flex" : "hidden"} self-end py-8 mt-10 space-y-6  bg-white-10 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                {NAV_LINKS.map((link) => (
                  <Link className="hover:font-bold hover:text-blue-20 active:text-blue-10"
                  onClick={handleClick} 
                  href={link.href} 
                  key={link.key}>
                    {link.label}
                  </Link>
                ))}
            </div>
      </div>
    </nav>
  )
}
