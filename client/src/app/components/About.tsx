import React from 'react'
import about_img from "assets/images/about-img.jpg"
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
        <section className='flex w-full  h-full ' >
            <div className="container mx-auto flex flex-col py-20 px-10 sm:flex-row gap-20">
                <div className="flex flex-1 w-full h-full ">
                    <Image src={about_img} alt='about health u australia '
                        className=' inset-0 w-auto  h-full object-cover rounded-tr-[150px] rounded-2xl  ' />
                </div>
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-primary font-bold text-3xl">About Us</h2>
                    <h1 className="text-black font-extrabold text-[2.3rem] uppercase">We Offer Care <span className='text-secondary'>that Matters</span> </h1>
                    <p className="text-secondary-text text-lg font-medium ">
                        To reach your goals and achieve independence as a participant, you will need Health U Support Services since we are here to assist you by taking individual-specific approaches.
                        From the development of a support plan to implementing it, we will follow the steps required to make your life convenient.
                        <br /> <br />
                        Through our support services, we promote healthy living and social inclusiveness. Most importantly, we will help you make the most of your funding.
                        In fact, to offer the care that you need, we will coordinate with you and your family. So, if you are looking for professional NDIS support,
                        we have you covered.
                    </p>
                    <Link href={"/"} className='text-white bg-primary text-xl uppercase font-semibold rounded-full py-5 px-8
                      hover:bg-secondary transition-colors duration-300 items-start w-max '
                     >Learn more </Link>
                </div>
            </div>
        </section>
    )
}

export default About