import PageBanner from 'app/utils/PageBanner'
import Image from 'next/image'
import React from 'react'
import { PiMapPinAreaFill } from 'react-icons/pi';
import event_image from "assets/images/2026/09/event-img01.jpg";
import { TiTick } from 'react-icons/ti';

const PastEvents = () => {
    return (
        <div className="grid w-full h-full gap-10 ">
            <PageBanner title='Current Events' path='/current-events' />
            <div className="container mx-auto items-start w-full justify-center my-10 rounded border-neutral-300  gap-12 border text-secondary-text p-10 flex flex-col md:flex-row ">
                <div className="flex flex-col items-start text-lg w-full ">
                    <div className="grid gap-3 py-5">
                        <h1 className="text-2xl font-semibold ">One-off :</h1>
                        <p className=" text-secondary-text font-semibold  ">27th September (Friday) 1pm – 3:30pm: 2-Hour Decluttering Workshop</p>
                    </div>
                    <div className="grid gap-3 py-5">
                        <h1 className="text-2xl font-semibold ">DECLUTTER WORKSHOP</h1>
                        <p className=" text-secondary-text font-semibold  ">Free 2 Hour Workshop For People Who Would Like To Learn Strategies For Decluttering</p>
                    </div>
                    <div className="grid gap-3 py-5">
                        <ul className="grid gap-2">
                            <li className=" flex items-start w-full gap-2 ">
                                <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                                <p className="text-lg font-medium text-secondary-text ">
                                    Do you live in a very cluttered environment?
                                </p>
                            </li>
                            <li className=" flex items-start w-full gap-2 ">
                                <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                                <p className="text-lg font-medium text-secondary-text ">
                                    Do you find it hard to declutter?
                                </p>
                            </li>
                            <li className=" flex items-start w-full gap-2 ">
                                <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                                <p className="text-lg font-medium text-secondary-text ">
                                    Does your clutter cause you to feel anxious or overwhelmed? . Would you like to restore functionality to your home?
                                </p>
                            </li>
                            <li className=" flex items-start w-full gap-2 ">
                                <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                                <p className="text-lg font-medium text-secondary-text ">
                                    Would you like to restore functionality to your home?
                                </p>
                            </li>
                            <h4 className="text-xl my-3 text-secondary-text font-semibold">If you answered YES to any of these questions, than</h4>
                        </ul>
                    </div>
                    <div className="grid gap-3 py-5">
                        <p className="text-lg font-medium text-secondary-text ">
                            This workshop may be just what you need Come and join us for an afternoon of fun while we learn tips for decluttering
                        </p>
                    </div>

                </div>
                <div className="flex w-full  ">
                    <Image src={event_image} alt='event' />
                </div>
            </div>
        </div>
    )
}

export default PastEvents