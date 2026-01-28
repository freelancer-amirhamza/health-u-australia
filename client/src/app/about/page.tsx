import PageBanner from 'app/UI/PageBanner'
import Image from 'next/image'
import React from 'react';
import about1 from "assets/images/about/about-img01.jpg"
import about2 from "assets/images/about/about-img02.jpg"
import about_icon from "assets/images/about/about-icon-img01.png"
import about_icon1 from "assets/images/about/about-icon-img02.png"
import { TiTick } from 'react-icons/ti';
import Link from 'next/link';


const About = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <PageBanner title='About Health U Australia' path='/about' />
      <div className="container px-5 flex flex-col items-center mx-auto justify-center w-full h-full ">
        <div className=" flex flex-col  gap-x-0 md:flex-row-reverse justify-center items-start my-10 w-full   ">
          <Image src={about1} alt='about heath u australia' className='hover:scale-102 ease-in-out transition-all duration-500  w-full h-full md:object-scale-down inset-0 items-start justify-start p-0 m-0 ' />
          <div className="flex flex-col w-full justify-center gap-2 mt-10   ">
            <h1 className="text-[27px] font-bold  ">Health U Support Services <span className="text-secondary">– We Empower Souls</span></h1>
            <div className='w-14 h-0.75 bg-primary items-center  ' />
            <p className=" flex w-full text-lg text-secondary-text font-medium  ">
              We at Health U Support Services, are more than just NDIS service providers. We extend support to participants,
              assisting them to lead the life of their choice and also aim to enrich their lives by empowering them with certain abilities that help them live with autonomy.
              We pride ourselves on helping individuals with impairments with a wide range of support services that precisely meet their diverse needs.
              The supports we offer include community participation, assistance in self-care, assistance in transport, domestic assistance/cleaning, capacity building, support coordination, and home repair/yard maintenance.
              With such wide-ranging support services, we ought to be a one-stop solution for NDIS participants.
            </p>
          </div>
        </div>

        <div className=" flex flex-col  gap-x-0 md:flex-row justify-center items-start  w-full   ">
          <Image src={about2} alt='about heath u australia' className='hover:scale-102 ease-in-out transition-all duration-500  w-full h-full md:object-scale-down inset-0 items-start justify-start p-0 m-0 ' />
          <div className="flex flex-col w-full justify-center gap-2 mt-8   ">
            <h1 className="text-[27px] font-bold  ">Our Support Workers Are  <span className="text-secondary">Unique In Approach</span></h1>
            <div className='w-14 h-0.75 bg-primary items-center  ' />
            <p className=" flex w-full text-lg text-secondary-text font-medium  ">
              Our support workers always consider NDIS participants as their extended family members.
              Thus, they support not just with professionalism but with care, compassion and affection.
              They will consider the lifestyle of participants, the goals of their lives and even their cultural, religious and social backgrounds.
              This focused and individualized approach helps us to frame support plans that contribute towards independent living.
              Our support staff talk to the families of participants and their immediate caregivers and also believe in holistic empowerment.
            </p>
          </div>
        </div>
        <div className="flex w-full items-start justify-center flex-col md:flex-row gap-10 h-full  my-20 ">
          <div className=" border border-secondary-text/40 hover:scale-102 ease-in-out transition-all duration-500 flex-1 flex flex-col items-start p-8 w-full h-full rounded-md shadow-2xl gap-10 ">
            <Image src={about_icon} alt='about health u australia' />
            <div className="flex flex-col w-full justify-center gap-4    ">
              <h1 className="text-[27px] font-bold  ">Our Mission  <span className="text-secondary">Statement</span></h1>
              <div className='w-14 h-0.75 bg-primary items-center  ' />
              <p className=" flex w-full text-lg text-secondary-text font-medium  ">
                Ever since we started our endeavour, our mission has been to ensure that NDIS participants have access to all the support services they need to live the life they deserve.
                Thus, we strive to extend quality service that not only makes lives easier for participants but also helps them meet their goals.
              </p>
            </div>
          </div>

          <div className=" border border-secondary-text/40 hover:scale-102 ease-in-out transition-all duration-500 flex-1 flex flex-col items-start p-8 w-full rounded-md shadow-2xl gap-10 ">
            <Image src={about_icon} alt='about health u australia' />
            <div className="flex flex-col w-full justify-center gap-2    ">
              <h1 className="text-[27px] font-bold  ">Our Support Workers Are  <span className="text-secondary">Unique In Approach</span></h1>
              <div className='w-14 h-0.75 bg-primary items-center  ' />
              <ul className=" flex flex-col w-full text-lg text-secondary-text font-medium gap-3 ">
                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-6 max-w-6 mt-0.5 text-white ' />
                  <p className=" text-xl text-secondary-text font-bold  ">Respect:
                    <span className="text-lg font-medium "> We respect the feedback we receive from participants and their families and use it to improve our service. We also respect the privacy of participants. </span>
                    </p>
                </li>

                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-6 max-w-6 mt-0.5 text-white ' />
                  <p className=" text-xl text-secondary-text font-bold  ">Diversity:
                    <span className="text-lg font-medium "> Our service participants come from various cultural, ethnic, social, and religious backgrounds, making it diverse in character. </span>
                    </p>
                </li>

                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-6 max-w-6 mt-0.5 text-white ' />
                  <p className=" text-xl text-secondary-text font-bold  ">Transparency:
                    <span className="text-lg font-medium "> We are always upfront about how we work, the costs and the steps we take to maintain transparency. </span>
                    </p>
                </li>
              </ul>
            </div>
          </div>
        </div>



            <div className="flex flex-col w-full justify-center gap-4 h-full items-center bg-gray-100 p-10    ">
              <h1 className="text-3xl font-bold  ">Let Us Guide You To A New Tomorrow</h1>
              <div className='w-14 h-0.75 bg-primary items-center  ' />
              <p className=" flex w-full text-lg text-secondary-text font-medium text-center ">
                Talk to our support staff so that we know what precisely you want from us. You can also write to us stating your support needs and we will get back to you immediately.
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

export default About