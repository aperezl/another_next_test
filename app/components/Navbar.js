import { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>{"{ antonio: 'perez' }"}</div>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='navbar-item'>Home</li>
        <li className='navbar-item'>About</li>
        <li className='navbar-item'>Skills</li>
        <li className='navbar-item'>Work</li>
        <li className='navbar-item'>Contact</li>
      </ul>

      {/*  HamburgerMenu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[120px] h-[40px] flex justify-between items-center'>
            <Link href='/'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-80px] hover:ml-[0px] duration-300'>
                <span className='pl-4'>Linkedin</span>
                <FaLinkedin size={32} />
              </a>
            </Link>
          </li>

          <li className='w-[120px] h-[40px] flex justify-between items-center'>
            <Link href='/'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-80px] hover:ml-[0px] duration-300'>
                <span className='pl-4'>Github</span>
                <FaGithub size={32} />
              </a>
            </Link>
          </li>

          <li className='w-[120px] h-[40px] flex justify-between items-center'>
            <Link href='/'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-80px] hover:ml-[0px] duration-300'>
                <span className='pl-4'>Twitter</span>
                <FaTwitter size={32} />
              </a>
            </Link>
          </li>

          <li className='w-[120px] h-[40px] flex justify-between items-center'>
            <Link href='/'>
              <a className='flex justify-between items-center w-full text-gray-300 ml-[-80px] hover:ml-[0px] duration-300'>
                <span className='pl-4'>Mail</span>
                <HiOutlineMail size={32} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
