"use client"
import React from 'react';
import logo from "assets/footer-logo-img.png";
import ndis_logo from "assets/ndis-logo-img.png"
import google_review from "assets/google-reviews-img.png"
import Image from 'next/image';
import { nav_items } from 'config/page';
import Link from 'next/link';

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
            <li key={index}>
              <Link href={item.path} > {item.label} </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer