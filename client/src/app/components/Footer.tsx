"use client"
import React from 'react';
import logo from "assets/footer-logo-img.png";
import ndis_logo from "assets/ndis-logo-img.png"
import google_review from "assets/google-reviews-img.png"
import Image from 'next/image';
import { nav_items } from 'config/page';
import Link from 'next/link';
import { PiMapPinAreaFill } from 'react-icons/pi';
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full h-max flex items-center justify-center bg-black fixed bottom-0 '>
      <div className="container w-full flex flex-col items-center justify-center my-10 py-20 gap-y-10  ">
        <div className=" flex w-full items-center justify-center gap-10 flex-wrap  h-full">
          <Image src={logo} alt='Health U Australia' className='  max-w-52 max-h-40 h-full p-0 m-0 w-full  flex  '/>
          <Image src={ndis_logo} alt='Health U Australia ' className='  max-w-52 max-h-40 h-full p-0 m-0 w-full  flex  '/>
          <Image src={google_review} alt='Health U Australia' className='  max-w-52 max-h-40 h-full p-0 m-0 w-full  flex  '/>
        </div>
        <ul className="flex flex-wrap w-full items-center justify-center gap-5 text-white">
          {nav_items.map((item, index)=>(
            <li key={index} className='hover:text-primary font-medium transition-colors duration-300 text-lg '>
              <Link href={item.path} > {item.label} </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap w-full items-center font-medium text-lg gap-4 justify-center">
          <li className="flex items-center text-center gap-2 text-white ">
            <PiMapPinAreaFill size={30} />
            <address> 109-129 Blaxland Road, Ryde NSW 2112</address>
          </li>
          <li className="flex items-center text-center gap-2 text-white ">
            <PiMapPinAreaFill size={30} />
            <address> 92 Bowden street ryde NSW 2112</address>
          </li>
          <li className="flex items-center text-center gap-2 text-white ">
            <PiMapPinAreaFill size={30} />
            <address>102 Denman Parade, Normanhurst NSW 2076</address>
          </li>
        </ul>
        <ul className='flex flex-wrap gap-10 items-center justify-center  ' >
          <li className=" border-2 p-1.5 rounded-full hover:bg-foreground hover:text-white transition-colors duration-300">
            <Link href={"https://www.instagram.com/healthu_au/"}><FaInstagramSquare size={30} /> </Link>
          </li>
          <li className=" border-2 p-1.5 rounded-full hover:bg-foreground hover:text-white transition-colors duration-300">
            <Link href={"https://www.facebook.com/healthuau/"}><FaFacebookF  size={30} /> </Link>
          </li>
          <li className=" border-2 p-1.5 rounded-full hover:bg-foreground hover:text-white transition-colors duration-300">
            <Link href={"https://www.linkedin.com/company/health-u-australia/"}><FaLinkedinIn size={30} /> </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer