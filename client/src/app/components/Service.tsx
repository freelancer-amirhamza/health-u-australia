'use client'

import { service_items } from 'config/page'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import service_bg from "assets/images/services-pattan-img01.png"

const Service = () => {

  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className='w-full h-full relative' style={{ backgroundImage: `url(${service_bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center',  }}>
      <div className="absolute inset-0 bg-yellow-500/30"></div>
      <div className="container mx-auto w-full h-full items-center justify-center py-12 flex flex-col relative z-10">
        <h1 className=" text-3xl w-full text-center p-5 text-primary font-bold ">Our Services</h1>
        <h1 className="text-4xl w-full p-5 text-center text-black font-bold uppercase ">Comprehensive Disability Care Services</h1>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          navigation={mounted ? {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          } : false}
          className='flex w-full h-full min-h-110 relative justify-center mx-auto  items-center '

          style={{
            '--swiper-navigation-color': '#f59e0b',
            '--swiper-pagination-color': '#f59e0b',
          } as React.CSSProperties}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}>
          {service_items.map((item, index) => (
            <SwiperSlide>
              <div className="flex flex-col  min-h-98 w-full max-w-70  items-center justify-self-center  rounded-2xl relative
             bg-white ">
                <Image src={item.image} alt={item.title}
                  className=' flex w-full h-full max-h-64 object-scale-cover absolute top-0 rounded-t-3xl rounded-b-full ' />
                <h1 className="absolute top-70 p-3 w-full flex text-center justify-center text-xl font-bold items-center">{item.title}</h1>
                <button className=" py-3 px-5 hover:bg-secondary z-50 cursor-pointer transition-colors duration-300 rounded-full
              absolute -bottom-6 font-bold text-base uppercase bg-primary text-white  items-center justify-self-center  flex ">
                  View Details
                </button>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-between items-center absolute top-2/5 z-100   w-full">
            <button ref={prevRef} className=" text-amber-500 text-4xl px-1.5 py-1 mr-5 rounded cursor-pointer hover:bg-amber-200 bg-amber-100 "><FaAngleLeft /> </button>
            <button ref={nextRef} className=" text-amber-500 text-4xl px-1.5 py-1 rounded cursor-pointer hover:bg-amber-200 bg-amber-100 "><FaAngleRight /> </button>
          </div>
        </Swiper>

      </div>
    </section>
  )
}

export default Service