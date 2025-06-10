import { IoArrowForward, IoMailOpen } from "react-icons/io5";

import mentor from "../../assets/Mentor/mentor3.gif"
import box1 from "../../assets/Courses/box6.png"
import box2 from "../../assets/Courses/box1.png"
import box3 from "../../assets/Courses/box5.png"
import "./mentor.css";
import {Link} from "react-router-dom";



function Mentor() {
 
  
    return (
    <section id="mentor"  className='mentor  bg-[#FFFFFF]  dark:bg-black overflow-hidden  ' >
      

   <p className="text-[25px] md:text-[35px] text-center  text-[#7862e4]  font-semibold leading-none mt-10"> Mentornship</p>

      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] px-4 py-6 md:px-10 md:py-14">
     

       <div className="flex flex-col font-poppins gap-y-4 md:gap-y-8 justify-center ">

       <div className="flex flex-col gap-y-4 md:gap-y-5 justify-center">

     <p className="text-[25px]   text-[#7862e4]  font-semibold leading-none">1:1 Long Term Mentorship For</p>
         
       <p className="text-3xl  md:text-4xl  font-bold leading-1 dark:text-white">
            Getting Off Campus Opportunities
        </p>

        <p className="text-xl leading-1 dark:text-white">
        Tech Shiksha gives you the information, tools and support to figure out the skills you need today that will get you the job ou want in the future.
        </p>

       </div>
          {/* Book button */}
        <Link to="/allmentor">
       <button 
      className="px-3 py-2 border-[#6e56db] text-sm md:text-xl dark:text-white border-2 border-solid rounded-md
      hover:bg-[#6e56db]  hover:text-white text- font-semibold flex items-center  gap-x-2">
       START JOURNEY <IoArrowForward className="text-xl" />
       </button>
       </Link>
       
      
       </div>
      
       <div className="flex justify-center items-center ">
        <img src={mentor} alt="" />
        </div> 

   
     </div>
    



     <div className="px-4 py-6 md:px-8  md:py-20  bg-[#F4F3FF] dark:bg-neutral-800 flex flex-col gap-y-8">

     <div className="flex flex-col   rounded-lg justify-center items-center font-poppins gap-y-2 md:gap-y-6 md:mx-10">
      <p className="text-2xl md:text-3xl lg:text-4xl text-center dark:text-white">What Could You Want Become?</p>
      <p className="text-sm md:text-md text-center dark:text-white">Find the best career with Global Techify</p>
     
        {/* detail */}
        <div className="grid grid-cols-2  gap-y-2 md:flex gap-x-8 justify-center dark:text-white">
       <div className="p-2 border-2 border-[#7862e4] rounded-md shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">1:1 Session</div>
        <div className="p-2 border-2 border-[#7862e4] rounded-md shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">Live Interview </div>
        <div className="p-2 border-2 border-[#7862e4] rounded-md shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">Placement Prep</div>
        <div className="p-2 border-2 border-[#7862e4] rounded-md shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">MNC's Drive</div>
       </div>
       <button className="p-2 lg:p-4 bg-[#f8af4e] rounded-md text-sm md:text-xl hover:border hover:border-[#f8af4e]
        hover:bg-white hover:text-[#f8af4e] text-white  font-poppins">
           <a href="https://wa.me/9651609214">BOOK SESSION</a>
        </button>
     </div>
    
      
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:p-4 gap-y-2 bg-[#050E5A] text-white  rounded-lg md:mx-10 ">
       <div className="md:p-4 flex gap-x-2 md:gap-x-4 hover:scale-105 ">
        <div className="rounded-lg  p-2 bg-[#8C92BF] flex justify-center items-center">
          <img src={box1} className="h-16 w-28"  /></div>
        <div className="font-poppins">
          <p className="text-lg md:text-xl">Intractive Demo Session</p>
          <p className="text-sm">Engage in a live session tailored to showcase our unique teaching approach</p>
        </div>
       </div>
       <div className="md:p-4 flex gap-x-2 md:gap-x-4 hover:scale-105">
        <div className="rounded-lg bg-[#8C92BF] p-2 flex justify-center items-center">
          <img src={box2} className="h-14" /></div>
        <div className="font-poppins">
          <p className="text-lg md:text-xl">No obligation, No Cost</p>
          <p className="text-sm">Experience the demo completely free with zero commitments</p>
        </div>
       </div>
       <div className="md:p-4 flex gap-x-2 md:gap-x-4 hover:scale-105">
        <div className="rounded-lg p-2 bg-[#8C92BF] flex justify-center items-center">
          <img  src={box3} className="h-14" /></div>
        <div className="font-poppins">
          <p className="text-lg md:text-xl">Expert Guidance</p>
          <p className="text-sm">Meet our top instructor and ask questions directly</p>
        </div>
       </div>

     </div>

   

     </div>

    </section>

        
    );
}

export default Mentor;




