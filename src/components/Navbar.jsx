import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6"
import logo from "../assets/images/COLLINS HUB.png"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
          <div className='flex flex-shrink-0 items-center'>
              <a href='/' aria-label='Home'>
                <img src={logo} alt='logo' className='rounded-full w-24 border-bg-neutral-300'/>
              </a>
          </div>
          <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkdin.com/NwosuCollins'target='_blank' rel='noopener noreferrer'aria-label='LinkedIn' >
                <FaLinkedin />
            </a>
            <a href='https://www.facebook.com/collins.nwosu.31586' target='_blank' rel='noopener noreferrer'aria-label='Facebook'>
                  <FaFacebook />
            </a>
            <a href='https://www.twitter.com/legacyCollins5' target='_blank' rel='noopener noreferrer'aria-label='Twitter'>
                <FaSquareXTwitter />
            </a>
            <a href='https://www.instagram.com/legacycolins' target='_blank' rel='noopener noreferrer'aria-label='Instagram'>
                <FaSquareInstagram />
            </a>
          </div>  
    </nav>
  )
}

export default Navbar