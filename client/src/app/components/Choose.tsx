import Image from 'next/image'
import React from 'react'
import icon1 from "assets/images/choose-icon-img01.png"
import icon2 from "assets/images/choose-icon-img02.png"
import icon3 from "assets/images/choose-icon-img03.png"
import icon4 from "assets/images/choose-icon-img04.png"
import logo1 from "assets/images/choose-logo-img.png"
import logo2 from "assets/images/choose-logo-img02.png"

const Choose = () => {
  return (
    <section className='w-full h-full    bg-white min-h-screen flex  '>
      <div className="container mx-auto w-full h-full  items-center justify-center py-12 flex flex-col  ">
        <h1 className=" text-3xl w-full text-center p-5 text-primary font-bold ">Health U Australia</h1>
        <h1 className="text-4xl w-full p-5 text-center text-black font-bold uppercase ">Why Choose Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4 w-full h-full">



          <div className="w-full h-full  relative ">
            <div className="bg-secondary absolute min-h-80 w-full p-3 py-10 rounded-tr-[4rem] grid gap-5 ">
            <Image src={logo1} alt='' className='absolute top-0 left-0 '/>
              <Image src={icon1} alt='' className='  absolute top-3 right-3  object-scale-down '/>
              <div className="absolute top-1/2 px-5 mb-10 grid gap-4">
                <h1 className="text-[1.5rem] font-bold   ">Trust and Reliability</h1>
              <p className="text-lg font-medium   ">Our service quality makes us one of the most reliable NDIS providers around</p>
            </div>
              </div>
          </div>

          <div className="w-full h-full  relative ">
            <div className="bg-secondary absolute min-h-80 w-full p-3 py-10 rounded-tl-[4rem] grid gap-5 ">
            <Image src={logo2} alt='' className='absolute top-0 right-0 '/>
              <Image src={icon2} alt='' className='  absolute top-3 left-3  object-scale-down '/>
              <div className="absolute top-1/2 px-5 mb-10 grid gap-4">
                <h1 className="text-[1.5rem] font-bold   ">Trust and Reliability</h1>
              <p className="text-lg font-medium   ">Our service quality makes us one of the most reliable NDIS providers around</p>
            </div>
              </div>
          </div>

          <div className="w-full h-full  relative ">
            <div className="bg-secondary absolute min-h-80 w-full p-3 py-10 rounded-tr-[4rem] grid gap-5 ">
            <Image src={logo1} alt='' className='absolute top-0 left-0 '/>
              <Image src={icon1} alt='' className='  absolute top-3 right-3  object-scale-down '/>
              <div className="absolute top-1/2 px-5 mb-10 grid gap-4">
                <h1 className="text-[1.5rem] font-bold   ">Trust and Reliability</h1>
              <p className="text-lg font-medium   ">Our service quality makes us one of the most reliable NDIS providers around</p>
            </div>
              </div>
          </div>

          <div className="w-full h-full  relative ">
            <div className="bg-secondary absolute min-h-80 w-full p-3 py-10 rounded-tl-[4rem] grid gap-5 ">
            <Image src={logo1} alt='' className='absolute top-0 right-0 '/>
              <Image src={icon1} alt='' className='  absolute top-3 left-3  object-scale-down '/>
              <div className="absolute top-1/2 px-5 mb-10 grid gap-4">
                <h1 className="text-[1.5rem] font-bold   ">Trust and Reliability</h1>
              <p className="text-lg font-medium   ">Our service quality makes us one of the most reliable NDIS providers around</p>
            </div>
              </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Choose