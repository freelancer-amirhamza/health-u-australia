import React from 'react'
import PageBanner from 'app/UI/PageBanner'
import Image from 'next/image'
import { TiTick } from 'react-icons/ti';
import Link from 'next/link';
import {  assist_in_self_care, support_coordination,  } from 'config/page'
import Title from 'app/UI/Title';

const AssistInSelf = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full ">
            <PageBanner title='Assist In Self Care' path='/assist-in-self-care' />
            <div className="container px-5 flex flex-col items-center mx-auto justify-center w-full h-full ">
                {assist_in_self_care.map((item, index) => (
                    <div key={index} className={`flex flex-col gap-x-0 ${[0, 2, 4].includes(index) ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-start w-full`}>
                        <Image src={item.image} alt='about heath u australia' className='hover:scale-102 ease-in-out transition-all duration-500  w-full h-full md:object-scale-down inset-0 items-start justify-start p-0 m-0 ' />
                        <div className="flex flex-col w-full justify-center gap-2 mt-8   ">
                            <Title title1={item.title1} title2={item.title2} />
                            <p className=" flex w-full text-lg text-secondary-text font-medium  ">{item?.paragraph1}</p>
                            <ul className="grid gap-2">
                                {item?.bullet_title && <h4 className="text-xl my-3 text-secondary-text font-semibold">{item?.bullet_title} </h4>}
                                {item?.bullet_points && item?.bullet_points.map((itm, idx) => (
                                    <li key={idx} className=" flex items-start w-full gap-2 ">
                                        <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                                        <p className="text-lg font-medium text-secondary-text "><strong>{itm?.keyword} </strong>{itm?.text}</p>
                                    </li>
                                ))}
                                <p className="text-lg text-secondary-text font-medium my-2">{item?.paragraph2} </p>
                            </ul>
                        </div>
                    </div>
                ))}

                <div className="flex flex-col w-full justify-center gap-4 h-full items-center bg-gray-100 p-10    ">
                    <h1 className="text-3xl font-bold  ">We’re Simply Here To Help You – Enquire NOW</h1>
                    <div className='w-14 h-0.75 bg-primary items-center  ' />
                    <p className=" text-lg text-secondary-text font-medium text-center ">
                        Contact us today to discuss your personal care needs and find out how we can help you live more comfortably.
                        <a className='text-blue-600' href="tel:0481 707 758">Call us</a> directly or email us with your requirements.
                    </p>
                    <div className="flex items-center justify-center gap-10">
                        <Link href={"/contact-us"} className='text-white text-lg font-semibold px-9 py-3.5 rounded-full bg-primary hover:bg-secondary transition-colors duration-300 ' >Enquire Now</Link>
                        <Link href={"/referral"} className='text-white text-lg font-semibold px-9 py-3.5 rounded-full bg-primary hover:bg-secondary transition-colors duration-300 ' >Referral</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssistInSelf