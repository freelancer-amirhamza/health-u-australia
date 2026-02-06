import PageBanner from 'app/UI/PageBanner'
import Title from 'app/UI/Title'
import { contact_details } from 'config/page'
import React from 'react'
import { LuPhoneCall } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'
import { PiMapPinAreaBold } from 'react-icons/pi'
import { TbClockHour3 } from 'react-icons/tb'

const Contact = () => {
  return (
    <div className="grid w-full h-full">
        <PageBanner title='Contact Us' path='/contact-us'/>
        <div className="container flex flex-col w-full h-full mx-auto my-12 ">
            <div className="flex flex-wrap items-center justify-center w-full gap-5 my-12 h-full">
                {contact_details.map((item, index)=>(
                    <div key={index} className="flex w-full max-w-100 border-[0.5px] border-neutral-300 rounded-md min-h-136 items-start  shadow-2xl">
                        <ul>
                            <Title title1={item.title1} title2={item.title2} className={`p-5`} />
                            <li className="flex items-center p-5 gap-3">
                                <div className="shadow-2xl shadow-black  h-12 flex items-center justify-center rounded-full w-12">
                                <LuPhoneCall className='text-2xl text-primary ' />
                                </div>
                                <div className="grid gap-">
                                    <h1 className="text-xl font-semibold">Call Us</h1>
                                    <a className='text-secondary-text text-lg font-semibold' href={`tel:${item.phone}`}>{item.phone}</a>
                                </div>
                            </li>
                            <li className="flex items-center p-5 gap-3">
                                <div className="shadow-2xl shadow-black  h-12 flex items-center justify-center rounded-full w-12">
                                    <MdOutlineMail className='text-2xl text-primary '  />
                                </div>
                                <div className="grid ">
                                    <h1 className="text-2xl font-semibold">Email Us</h1>
                                    <a className='text-secondary-text text-lg font-semibold' href={`mailto:${item.email}`}>{item.email}</a>
                                </div>
                            </li>
                            <li className="flex items-center p-5 gap-3">
                                <div className="shadow-2xl shadow-black  h-12 flex items-center justify-center rounded-full w-12">
                                    <PiMapPinAreaBold className='text-2xl text-primary '  />
                                </div>
                                <div className="grid gap-3">
                                    <h1 className="text-2xl font-semibold">Address</h1>
                                    <address className=' text-secondary-text font-semibold '>{item.address} </address>
                                </div>
                            </li>
                            <li className="flex items-center p-5 gap-3">
                                <div className="shadow-2xl shadow-black  h-12 flex items-center justify-center rounded-full w-12">
                                    <TbClockHour3  className='text-2xl text-primary ' />
                                </div>
                                <div className="grid gap-3">
                                    <h1 className="text-2xl font-semibold">Working Hour</h1>
                                    <span className=' text-secondary-text font-semibold '>{item.time}</span>
                                </div>
                            </li>

                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Contact