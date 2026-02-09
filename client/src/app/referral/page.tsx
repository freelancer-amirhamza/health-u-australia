import PageBanner from 'app/UI/PageBanner'
import Title from 'app/UI/Title'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Referral = () => {
    const referral_information = [
        {
            title:"",

        }
    ]
  return (
    <div className="flex flex-col items-center justify-between w-full">
        <PageBanner title='Referral' path='referral'/>
        <div className="container mx-auto flex flex-col my-10 items-center justify-center w-full">
            <div className="grid  border border-neutral-300 px-10 py-5 rounded-md place-content-start my-10 w-full max-w-3xl">
                <Title title1='Ready To' title2='Get Started?' />
                <div className="grid gap-4 text-xl text-secondary-text">
                    <h2 className="">I am completing this for</h2>
                    <select name="completing_for" id="completing_for" className='border-neutral-400 border p-5 rounded focus-within:outline-secondary' >
                        <option value="for_myself">Myself as the participant</option>
                        <option value="for_myself">Someone I am referring to Health U Support Services</option>
                    </select>
                </div>
            </div>
        </div>

            <div className="grid  border border-neutral-300 px-10 py-5 rounded-md  my-10 w-full max-w-3xl">
                <Title title1='Participant' title2='Details' />
                <div className="grid grid-cols-1 md:grid-cols-2 min-w-full gap-5 place-content-center">
                    <div className=" grid gap-2 text-xl text-secondary-text w-full  ">
                    <label className="font-medium">First Name:</label>
                    <input type="text" name="first_name" id="first_name"
                    className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Last Name:</label>
                        <input type="text" name="last_name" id="last_name"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Date of Birth</label>
                        <input type='date' name="date_of_birth" id="date_of_birth"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Gender:</label>
                        <select name="gender" id="gender" className="px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefer not to say">Prefer not to say </option>
                        </select>
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Participant Phone Number</label>
                        <input type='phone' name="participant_phone" id="participant_phone"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Participant Email Address</label>
                        <input type='email' name="participant_email" id="participant_email"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full md:col-span-2  ">
                        <label className="font-medium">Area/Suburb</label>
                        <input type='text' name="area_suburb" id="date_of_birth"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>



                </div>
            </div>
            {/* participant details ends */}

            <div className="grid  border border-neutral-300 px-10 py-5 rounded-md  my-10 w-full max-w-3xl">
                <Title title1='Cultural' title2='Details' />
                <div className="grid grid-cols-1 md:grid-cols-2 min-w-full gap-5 place-content-center">
                    <div className=" grid gap-2 text-xl text-secondary-text w-full  ">
                    <label className="font-medium">Participant Main Language Spoken</label>
                    <input type="text" name="first_name" id="first_name"
                    className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>

                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Does The Participant Require An Interpreter?</label>
                        <select name="gender" id="gender" className="px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefer not to say">Prefer not to say </option>
                        </select>
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Does The Participant Require An Interpreter?</label>
                        <input type='phone' name="participant_phone" id="participant_phone"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Does The Listed Participant Identify As An Aboriginal Or Torres Strait Islander?</label>
                        <select name="gender" id="gender" className="px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefer not to say">Prefer not to say </option>
                        </select>
                    </div>



                </div>
            </div>
            {/* participant details */}

            <div className="grid  border border-neutral-300 px-10 py-5 rounded-md  my-10 w-full max-w-3xl">
                <Title title1='Services' title2='Request' />
                <div className="grid grid-cols-1 md:grid-cols-2 min-w-full gap-5 place-content-center">
                    <div className=" grid gap-2 text-xl text-secondary-text w-full  ">
                    <label className="font-medium">Type Of Primary Service Required:</label>
                    <select name="gender" id="gender" className="px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefer not to say">Prefer not to say </option>
                        </select>
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Number Of Hours Requested For Service:</label>
                        <input type="text" name="last_name" id="last_name"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Type Of Secondary Service Required:</label>
                        <select name="gender" id="gender" className="px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefer not to say">Prefer not to say </option>
                        </select>
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Additional Service Required:</label>
                        <select name="gender" id="gender" className="px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefer not to say">Prefer not to say </option>
                        </select>
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Participant's Relevant Conditions / Disability (Please List):</label>
                        <textarea rows={5} name="participant_phone" id="participant_phone"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Extra Information That May Assist With Preparation For Initial Appointment:</label>
                        <textarea rows={5} name="participant_email" id="participant_email"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Special Assessments Or Therapies Required:</label>
                        <textarea rows={5} name="participant_email" id="participant_email"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Notes For Practitioners (Additional Relevant Details):</label>
                        <textarea rows={5} name="participant_email" id="participant_email"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                </div>
            </div>
            {/* participant details ends */}

            <div className="grid  border border-neutral-300 px-10 py-5 rounded-md  my-10 w-full max-w-3xl">
                <Title title1='Contact' title2='Details' />
                <div className="">
                    <label className="flex gap-3 text-xl font-medium text-secondary-text items-center cursor-pointer ">
                        <input type="checkbox" name="phone" id="phone" className=' peer hidden ' />
                        <div className=" border-3 h-5 text-[15px] flex rounded-full  text-secondary-text peer-checked:border-primary  peer-checked:text-white peer-checked:bg-primary m-0 p-0.5 w-5 items-center justify-center">
                            <FaCheck  />
                        </div>
                        <h4 className="">Phone</h4>
                    </label>

                    <label className="flex gap-3 text-xl font-medium text-secondary-text items-center cursor-pointer ">
                        <input type="checkbox" name="email" id="email" className=' peer hidden ' />
                        <div className=" border-3 h-5 text-[15px] flex rounded-full  text-secondary-text peer-checked:border-primary  peer-checked:text-white peer-checked:bg-primary m-0 p-0.5 w-5 items-center justify-center">
                            <FaCheck  />
                        </div>
                        <h4 className="">Email</h4>
                    </label>

                    <label className="flex gap-3 text-xl font-medium text-secondary-text items-center cursor-pointer ">
                        <input type="checkbox" name="text" id="text" className=' peer hidden ' />
                        <div className=" border-3 h-5 text-[15px] flex rounded-full  text-secondary-text peer-checked:border-primary  peer-checked:text-white peer-checked:bg-primary m-0 p-0.5 w-5 items-center justify-center">
                            <FaCheck  />
                        </div>
                        <h4 className="">Text</h4>
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 min-w-full gap-5 place-content-center">
                    <div className=" grid gap-2 text-xl text-secondary-text w-full  ">
                    <label className="font-medium">Participant Main Language Spoken</label>
                    <input type="text" name="first_name" id="first_name"
                    className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Does The Participant Require An Interpreter?</label>
                        <select name="gender" id="gender" className="px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefer not to say">Prefer not to say </option>
                        </select>
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Does The Participant Require An Interpreter?</label>
                        <input type='phone' name="participant_phone" id="participant_phone"
                        className=' px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ' />
                    </div>
                    <div className="grid gap-2 text-xl text-secondary-text w-full  ">
                        <label className="font-medium">Does The Listed Participant Identify As An Aboriginal Or Torres Strait Islander?</label>
                        <select name="gender" id="gender" className="px-4 py-3 border-neutral-400 focus-within:outline-secondary border rounded  min-w-full ">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefer not to say">Prefer not to say </option>
                        </select>
                    </div>
                </div>
            </div>
            {/* participant details */}
    </div>
  )
}

export default Referral