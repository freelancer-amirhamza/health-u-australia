import React from 'react'
import PageBanner from 'app/UI/PageBanner'
import Image from 'next/image'
import ndis1 from "assets/images/about/ndis-img01.jpg"
import ndis2 from "assets/images/about/ndis-img02.jpg"
import ndis3 from "assets/images/about/ndis-img03.jpg"
import ndis4 from "assets/images/about/ndis-img04.jpg"
import { TiTick } from 'react-icons/ti';
import Link from 'next/link';


const NDIS = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <PageBanner title='NDIS Services' path='/ndis' />
      <div className="container px-5 flex flex-col items-center mx-auto justify-center w-full h-full ">
        <div className=" flex flex-col  gap-x-0 md:flex-row-reverse justify-center items-start my-10 w-full   ">
          <Image src={ndis1} alt='about heath u australia' className='hover:scale-102 ease-in-out transition-all duration-500  w-full h-full md:object-scale-down inset-0 items-start justify-start p-0 m-0 ' />
          <div className="flex flex-col w-full justify-center gap-2 mt-10   ">
            <h1 className="text-[32px] font-bold  ">Health U Support Services – <span className="text-secondary">The NDIS Partner to Rely On</span></h1>
            <div className='w-14 h-0.75 bg-primary items-center  ' />
            <p className=" flex w-full text-lg text-secondary-text font-medium  ">
              At Health U Support Services, we aim to empower individuals with specific needs by providing a wide range of support services through the National Disability Insurance Scheme (NDIS) optimised to their requirements. So, if you are a participant, with our assistance, you can experience the improvement of your quality of life. Our support staff will guide you in navigating NDIS and achieving independence.
            </p>
          </div>
        </div>

        <div className=" flex flex-col  gap-x-0 md:flex-row justify-center items-start  w-full   ">
          <Image src={ndis2} alt='about heath u australia' className='hover:scale-102 ease-in-out transition-all duration-500  w-full h-full md:object-scale-down inset-0 items-start justify-start p-0 m-0 ' />
          <div className="flex flex-col w-full justify-center gap-2 mt-8   ">
            <h1 className="text-[32px] font-bold  ">What is NDIS, and <span className="text-secondary">Who is Eligible?</span></h1>
            <div className='w-14 h-0.75 bg-primary items-center  ' />
            <p className=" flex w-full text-lg text-secondary-text font-medium  ">
              The National Disability Insurance Scheme (NDIS) is a government initiative that provides funding and support to Australians with permanent disabilities.
              The NDIS enables participants to access various services, such as community participation, transport support, and more, with the aim of equipping them with skills to enable them to achieve their goals and improve their well-being.
            </p>
            <ul className="grid gap-2">
              <h4 className="text-xl my-3 text-secondary-text font-semibold">The eligibility criteria for NDIS are:</h4>
              <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                  <p className="text-lg font-medium text-secondary-text ">You have to be within 9 to 65 years of age</p>
                </li>
                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                  <p className="text-lg font-medium text-secondary-text ">You have a significant disability that affects your daily life and activities</p>
                </li>
                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                  <p className="text-lg font-medium text-secondary-text ">You need to be a permanent Australian citizen</p>
                </li>
                <h3 className="text-lg text-secondary-text font-medium my-3"> At <a className='text-blue-500' href="http://">Health U Support Services,</a> </h3>
                <p className="text-lg text-secondary-text font-medium my-2">
                  we provide our support service to eligible individuals and their families while considering their needs.
                </p>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col  gap-x-0 md:flex-row-reverse justify-center items-start  w-full   ">
          <Image src={ndis3} alt='about heath u australia' className='hover:scale-102 ease-in-out transition-all duration-500  w-full h-full md:object-scale-down inset-0 items-start justify-start p-0 m-0 ' />
          <div className="flex flex-col w-full justify-center gap-2 mt-8   ">
            <h1 className="text-[32px] font-bold  ">Application Support –<span className="text-secondary">At No Cost to You</span></h1>
            <div className='w-14 h-0.75 bg-primary items-center  ' />
            <p className=" flex w-full text-lg text-secondary-text font-medium  ">
              Navigating the NDIS application process can be overwhelming, but we are here to simplify it. We will assist you with the process to ensure that you are able to secure your funding. Our experienced team will guide you every step of the way and even handle the paperwork for the application procedure.
            </p>
            <ul className="grid gap-2">
              <h4 className="text-xl my-3 text-secondary-text font-semibold">Our no-cost application support includes:</h4>
              <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                  <p className="text-lg font-medium text-secondary-text ">Initial consultation, where we will assess your eligibility</p>
                </li>
                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                  <p className="text-lg font-medium text-secondary-text ">We will assist you with filling out and submitting the NDIS application</p>
                </li>
                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                  <p className="text-lg font-medium text-secondary-text ">Preparing supporting documents and reports</p>
                </li>
                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-5 max-w-5 mt-0.5 text-white ' />
                  <p className="text-lg font-medium text-secondary-text ">Communicating with the NDIS representatives on your behalf</p>
                </li>
                <p className="text-lg text-secondary-text font-medium my-2">
                  We are committed to helping you get started with your NDIS journey that is
                </p>
            </ul>
          </div>
        </div>


        <div className=" flex flex-col  gap-x-0 md:flex-row justify-center items-start  w-full   ">
          <Image src={ndis4} alt='about heath u australia' className='hover:scale-102 ease-in-out transition-all duration-500  w-full h-full md:object-scale-down inset-0 items-start justify-start p-0 m-0 ' />
          <div className="flex flex-col w-full justify-center gap-2 mt-8   ">
            <h1 className="text-[32px] font-bold  ">Funded Supports<span className="text-secondary">for You</span></h1>
            <div className='w-14 h-0.75 bg-primary items-center  ' />
            <p className=" flex w-full text-lg text-secondary-text font-medium  ">
             After your NDIS funding is approved, at Health U Support Services, we will offer the support that you need to achieve your goals.
            </p>
            <ul className="grid gap-2">
              <h4 className="text-xl my-3 text-secondary-text font-semibold">Our no-cost application support includes:</h4>
              <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-6 max-w-6 mt-0.5 text-white ' />
                  <p className=" text-xl text-secondary-text font-bold  ">Community Participation:
                    <span className="text-lg font-medium ">Our staff will help you engage with your community, develop social connections, and build new skills.</span>
                    </p>
                </li>

                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-6 max-w-6 mt-0.5 text-white ' />
                  <p className=" text-xl text-secondary-text font-bold  ">Capacity Building:
                    <span className="text-lg font-medium "> We will assist you in developing skills with which you can achieve independence and live your life with your head held high. </span>
                    </p>
                </li>

                <li className=" flex items-start w-full gap-2 ">
                  <TiTick className='bg-secondary rounded-full text-4xl  h-full w-full max-h-6 max-w-6 mt-0.5 text-white ' />
                  <p className=" text-xl text-secondary-text font-bold  ">Domestic Assistance / Cleaning
                    <span className="text-lg font-medium "> We assist participants with various household tasks and keeping their homes clean so that they can live a convenient and peaceful life. </span>
                    </p>
                </li>
            </ul>
          </div>
        </div>
            <div className="flex flex-col w-full justify-center gap-4 h-full items-center bg-gray-100 p-10    ">
              <h1 className="text-3xl font-bold  ">Contact us to Get an NDIS Service as Per Your Needs</h1>
              <div className='w-14 h-0.75 bg-primary items-center  ' />
              <p className=" flex  text-lg text-secondary-text font-medium text-center ">
                Call us or send us an email requesting an appointment, and we will get back to you as soon as possible.
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

export default NDIS