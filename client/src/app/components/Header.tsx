
import React from 'react'
import Image from 'next/image'
import logo from "assets/logo.png"
import Link from 'next/link';
import { nav_items } from 'config/page';
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className='w-full flex items-center justify-center sticky bg-white top-0 z-50 '>
      <div className="container flex w-full items-center  justify-between px-3 sm:px-0  ">
        <Link href="/" className="max-h-full ">
            <Image src={logo} alt='Health U logo' className='h-24 w-44'  />
        </Link>
        <nav className='w-full flex justify-end'>
          <ul className=" w-full items-center justify-end hidden  lg:flex ">
            {nav_items.map((item, index)=>(
                <li key={index} className=' py-3 px-4 cursor-pointer last:hidden  hover:text-primary text-base  '>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
          </ul>
          <Link className='bg-primary text-lg uppercase text-white font-semibold
                rounded-full px-7 py-4 hover:bg-secondary transition-colors duration-300' href={"/referral"}>Referral</Link>
          <button className='text-secondary text-4xl px-4 cursor-pointer lg:hidden '>
            <AiOutlineMenu />
          </button>
        </nav>
        </div>
    </header>
  )
}

export default Header