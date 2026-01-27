import Image from 'next/image'
import React from 'react'
import icon1 from "assets/images/choose-icon-img01.png"
import icon2 from "assets/images/choose-icon-img02.png"
import icon3 from "assets/images/choose-icon-img03.png"
import icon4 from "assets/images/choose-icon-img04.png"
import logo1 from "assets/images/choose-logo-img.png"
import logo2 from "assets/images/choose-logo-img02.png"
import bg_pattern from "assets/images/choose-pattan-img.png"

const Choose = () => {
  return (
    <section className='w-full h-full bg-white  flex justify-center items-center '
    style={{ backgroundImage:`url(${bg_pattern.src})`, backgroundSize:"95%", backgroundRepeat:"no-repeat" , backgroundPosition:"center" }}
    >
      <div className="container mx-auto w-full h-full  items-center justify-center py-12 flex flex-col  ">
        <h1 className=" text-3xl w-full text-center p-5 text-primary font-bold ">Health U Australia</h1>
        <h1 className="text-4xl w-full p-5 text-center text-black font-bold uppercase ">Why Choose Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">

          <div className="w-full h-full min-h-80 relative flex">
            <div className="bg-secondary absolute min-h-80 w-full p-3 py-10 h-full rounded-tr-[4rem] grid gap-5">
              <Image src={logo1} alt='' className='absolute top-0 left-0 ' />
              <Image src={icon1} alt='' className='  absolute top-3 right-3  object-scale-down ' />
              <div className="absolute lg:top-1/2 md:top-1/3 sm:top-1/2 md:py-5 lg:py-0 px-5   mb-10 grid gap-4">
                <h1 className="lg:text-[1.3rem] md:text-[1.3rem] sm:text-2xl font-bold   ">Trust and Reliability</h1>
                <p className="text-lg font-medium   ">Our service quality makes us one of the most reliable NDIS providers around</p>
              </div>
            </div>
          </div>

          <div className="w-full h-full min-h-80 flex relative">
            <div className="bg-secondary absolute min-h-80 w-full p-3 py-10 rounded-tl-[4rem] grid gap-5">
              <Image src={logo2} alt='' className='absolute top-0 right-0 ' />
              <Image src={icon2} alt='' className='  absolute top-3 left-3  object-scale-down ' />
              <div className="absolute lg:top-1/2 md:top-1/3 sm:top-1/2 md:py-5 lg:py-0 px-5   mb-10 grid gap-4">
                <h1 className="lg:text-[1.3rem] md:text-[1.3rem] sm:text-2xl font-bold   ">Tailored Support</h1>
                <p className="text-lg font-medium   ">We provide care according to participant’s requirements and enrich their lives</p>
              </div>
            </div>
          </div>

          <div className="w-full h-full min-h-80 flex relative">
            <div className="bg-secondary absolute min-h-80 w-full p-3 py-10 rounded-tr-[4rem] grid gap-5">
              <Image src={logo1} alt='' className='absolute top-0 left-0 ' />
              <Image src={icon3} alt='' className='  absolute top-3 right-3  object-scale-down ' />
              <div className="absolute lg:top-1/2 md:top-1/3 sm:top-1/2 md:py-5 lg:py-0 px-5   mb-10 grid gap-4">
                <h1 className="lg:text-[1.3rem] md:text-[1.3rem] sm:text-2xl font-bold   ">Experienced Team</h1>
                <p className="text-lg font-medium   ">Our experienced team of support workers will help you reach your goals</p>
              </div>
            </div>
          </div>

          <div className="w-full h-full min-h-80 flex relative">
            <div className="bg-secondary absolute min-h-80 w-full p-3 py-10 rounded-tl-[4rem] grid gap-5">
              <Image src={logo1} alt='' className='absolute top-0 right-0 ' />
              <Image src={icon1} alt='' className='  absolute top-3 left-3  object-scale-down ' />
              <div className="absolute lg:top-1/2 md:top-1/3 sm:top-1/2 md:py-5 lg:py-0 px-5   mb-10 grid gap-4">
                <h1 className="lg:text-[1.3rem] md:text-[1.3rem] sm:text-2xl font-bold   ">Empowering Participants</h1>
                <p className="text-lg font-medium   ">We empower participants to develop essential life skills and live an independent life</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Choose