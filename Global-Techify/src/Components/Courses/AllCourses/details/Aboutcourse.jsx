import { useState } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";

import { BsPersonWorkspace } from "react-icons/bs";
import { PiListNumbersBold } from "react-icons/pi";
import { MdOutlineEmergencyRecording } from "react-icons/md";
import { BsFillCalendar2DateFill } from "react-icons/bs";


function Aboutcourse ({product}) {
    return (
    <div className="flex flex-col gap-y-6 md:gap-y-10">
         <div className="flex flex-col gap-y-6 md:gap-y-8 font-poppins justify-center items-center">
       <p className="text-3xl font-poppins text-[#785fd3]">About Course</p>
      <p className="text-xl dark:text-white font-poppins text-center">  
       {product.about}
      </p>
      </div>
      <div className="w-full p-5 grid grid-cols-1 sm:grid-cols-2 place-content-start sm:place-content-center place-items-start 
        border-[rgba(189,189,189,0.1)] dark:border-[rgba(255,255,255,0.10)] border rounded-lg bg-[#F4F3FF] dark:bg-neutral-800 gap-x-4 gap-y-8">
        
        <div className="flex flex-row gap-x-3 items-center">
          <div className="flex p-4 justify-center items-center rounded-full border border-[#969494] bg-neutral-200 dark:bg-neutral-800">
          <BiSolidCameraMovie className="text-[25px] text-[#785fd3]" />
          </div>
          <p className="text-md md:text-lg font-poppins dark:text-white">
          {product.aboutcourses.about1}</p>
        </div>

        <div className="flex flex-row gap-x-3 items-center">
        <div className="flex p-4 justify-center items-center rounded-full border border-[#969494] bg-neutral-200 dark:bg-neutral-800 ">
        <PiListNumbersBold className="text-[25px] text-[#785fd3]" />
        </div>
               <p className="text-md md:text-lg font-poppins dark:text-white">
                {product.aboutcourses.about2}</p>
         </div>

        <div className="flex flex-row gap-x-3 items-center">
                <div className="flex p-4 justify-center items-center rounded-full border border-[#969494] bg-neutral-200 dark:bg-neutral-800">
                <BsPersonWorkspace className="text-[25px] text-[#785fd3]" />

               </div>
               <p className="text-md md:text-lg font-poppins dark:text-white">{product.aboutcourses.about3}</p>
         </div>

        <div className="flex flex-row gap-x-3 items-center">
                <div className="flex p-4 justify-center items-center rounded-full border border-[#969494] bg-neutral-200 dark:bg-neutral-800">
                  <MdOutlineEmergencyRecording className="text-[25px] text-[#785fd3]" />

                </div>
                <p className="text-md md:text-lg font-poppins dark:text-white">{product.aboutcourses.about4}</p>
       </div>

        <div className="flex flex-row gap-x-3 items-center">
                  <div className="flex p-4 justify-center items-center rounded-full border border-[#969494] bg-neutral-200 dark:bg-neutral-800">
                    <BsFillCalendar2DateFill className="text-[25px] text-[#785fd3]" />
               </div>
             <p className="text-md md:text-lg font-poppins dark:text-white">{product.aboutcourses.about5}</p>
        </div>

        
        <div className="flex flex-row gap-x-3 items-center">
                 
             <p className="text-md md:text-lg font-poppins dark:text-white">{product.aboutcourses.about6}</p>
        </div>

      </div>

    </div>
    )
}

export default Aboutcourse;