import About from "app/components/About"
import Choose from "app/components/Choose"
import Hero from "app/components/Hero"
import NewsLetter from "app/components/NewsLetter"
import Service from "app/components/Service"
import Testimonials from "app/components/Testimonials"
import banner1 from "assets/images/banner-img.jpg"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import React from 'react';

export const metadata: Metadata = {
  title:"Health U Australia - Best NDIS Service & Support Provider in Ryde",
  description:" Find the best NDIS provider to meet your needs and support your journey to independent living and personal growth.",
}

const Home = () => {
  return (
    <main className=" w-full  h-full ">
    {/* banner  */}
      <Hero/>
      <About/>
      <Service/>
      <Choose/>
      <Testimonials/>
      <NewsLetter/>
  </main>
  )
}

export default Home