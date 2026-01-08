
import React from 'react'
import Image from 'next/image'
import logo from "assets/logo.png"
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/" className="max-h-10 w-full">
            <Image src={logo} alt='Health U logo' className='h-10 w-auto'  />
        </Link>
        <nav>
          <ul className="">
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
          </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header