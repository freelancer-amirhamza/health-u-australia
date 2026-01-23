import About from "app/components/About"
import Choose from "app/components/Choose"
import Hero from "app/components/Hero"
import Service from "app/components/Service"
import banner1 from "assets/images/banner-img.jpg"
import Image from "next/image"
import Link from "next/link"
import React from 'react'

const Home = () => {
  return (
    <main className=" w-full  h-full ">
    {/* banner  */}
      <Hero/>
      <About/>
      <Service/>
      <Choose/>
  </main>
  )
}

export default Home