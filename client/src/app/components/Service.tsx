import { service_items } from 'config/page'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

const Service = () => {

  const containerRef = useRef<any>();
    const handleNextBtn = ()=>{
        containerRef.current.scrollLeft += 285;
    }
    const handlePrevBtn = ()=>{
        containerRef.current.scrollLeft -= 285;
    }

  return (
    <section className='w-full h-full min-h-screen bg-yellow-light flex  '>
      <div className="container mx-auto w-full items-center justify-center py-12 flex flex-col  ">
        <h1 className=" text-3xl w-full text-center p-5 text-primary font-bold ">Our Services</h1>
        <h1 className="text-4xl w-full p-5 text-center text-black font-bold uppercase ">Comprehensive Disability Care Services</h1>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          className='flex w-full h-full overflow-hidden relative justify-center flex-1/2  items-center mySwiper'
          spaceBetween={10}
          style={{
          '--swiper-navigation-color': '#f59e0b',
          '--swiper-pagination-color': '#f59e0b',
        }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}>
          {service_items.map((item, index) => (
            <SwiperSlide className="flex flex-col  h-98 w-full max-w-70  items-center justify-center  rounded-2xl relative bg-white ">
              <Image src={item.image} alt={item.title}
                className=' flex w-full h-full max-h-64 object-scale-cover absolute top-0 rounded-t-3xl rounded-b-full ' />
              <h1 className="absolute top-70 p-3 w-full flex text-center justify-center text-xl font-bold items-center">{item.title}</h1>
              <Link
              className='bg-primary text-white font-bold uppercase hover:bg-secondary flex w-full  absolute -bottom-5 '
              href={item.path}>
                <button> view details</button>
              </Link>
            </SwiperSlide>
          ))}
          <div className="flex justify-between items-center absolute gap-3 w-full">
                    <button  onClick={handlePrevBtn} className=" text-amber-500 text-2xl px-1.5 py-1 rounded cursor-pointer hover:bg-amber-200 bg-amber-100 "><FaAngleLeft /> </button>
                    <button  onClick={handleNextBtn} className=" text-amber-500 text-2xl px-1.5 py-1 rounded cursor-pointer hover:bg-amber-200 bg-amber-100 "><FaAngleRight /> </button>
                </div>
        </Swiper>

      </div>
    </section>
  )
}

export default Service