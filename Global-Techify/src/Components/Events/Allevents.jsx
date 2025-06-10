import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import data from './data';
import event1 from "../../assets/Events/event1.png";
import event2 from "../../assets/Allevent/event3.png";

import { GoArrowRight } from "react-icons/go";
import { useState } from 'react';
import LoginDialog from '../Login/LoginDialog';
import Frequently from './Frequently';
import { Link } from 'react-scroll';


function Allevents() {
  const [open, setOpen] = useState(false);

  
  const openDialog = () => {
      setOpen(true);
  }
    return (
    <section id='allevent' className='  dark:text-white  dark:bg-black overflow-hidden  bg-[#fcfcfc]' >
       
       <div className='flex flex-col gap-y-8'>

      <div className='grid grid-cols-1 lg:grid-cols-2 mt-12 md:mt-8 gap-y-4  font-poppins p-4 md:p-8'>
    
     <div className='flex flex-col justify-center  font-poppins gap-y-4 lg:gap-y-8 md:p-6 mt-5 lg:mt-0'>
      <p className='font-poppins text-md md:text-lg text-[#7862e4]'>Celebrating Biggest Tech Events</p>
    <p className=' text-2xl md:text-4xl xl:text-5xl'>The Future Growing The Global<span className='text-[#7862e4]'>  Technology </span>
       </p>
    <p>Get ready to embark on a journey into the future of technology of TechCon 2025 Dont't miss out on this
       exciting event that will redefine your persepective on innovation. For more details and to register. </p>
      <div className='flex gap-x-2  md:gap-x-4'>
      <button className='py-2 md:py-3 px-2 md:px-5 bg-[#8d7ce2] text-lg rounded-full text-white hover:text-[#8d7ce2] hover:bg-white hover:border hover:border-[#8d7ce2]'
       onClick={()=> openDialog()}>Register Now</button>
      <LoginDialog open={open} setOpen={setOpen} />
      
      <Link to='more' activeClass='active' smooth={true} spy={true} offset={-100}>

      <button className='py-2 md:py-3 px-2 md:px-5 border-[1px] border-[#f5ae51] text-md lg:text-lg flex gap-x-1
       hover:text-white hover:bg-[#f5ae51]  items-center rounded-full'>
        Discover More <GoArrowRight />
      </button>
      </Link>

      
      </div>
     </div>

     <div className='flex justify-center items-center'>
      <img src={event1} alt="" /></div>

      

      


      </div>

      <div id='more' className='flex flex-col justify-center items-center md:gap-y-4 font-poppins p-4 md:px-8'>
       <p className='text-2xl text-[#7862e4]'>About The Events</p>
        <p className='text-2xl md:text-4xl lg:text-5xl text-center'> Emabarking Your Technology </p>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div ><img src={event2} alt="" /></div>
          <div className='flex flex-col justify-center items-start md:px-14 gap-y-8'
          ><p className='text-3xl md:text-4xl xl:text-5xl'><span className='text-[#7862e4]'>Hackthons</span> for Tech Enthusiast</p>
          <div className='bg-black w-full h-[1px] '></div> 
          <p>10+ Events Oraganizing On months on which have more sessions and live hackthons and much more exciting prizes for the winners.
            Learn The the most newest techonology expericene and live projects for the top company </p>
            
            <Link to='events' activeClass='active' smooth={true} spy={true} offset={-90}>
            <button className='py-3 px-5 text-lg  border-2 border-[#7862e4] rounded-md hover:bg-[#7862e4] hover:text-white'>Know More</button>
</Link>
            </div>
        </div>
        
      </div>

      <div id='events' className='flex flex-col justify-center items-center font-poppins gap-y-1 md:gap-y-4 p-4 md:p-8'>
        <p className='text-2xl text-[#7862e4]'>Events</p>
        <p className='text-2xl md:text-4xl xl:text-5xl text-bold text-center'>UPCOMING EVENTS</p>
         {/* Events Box */}
       <div className="flex justify-center items-center mt-2 lg:mt-5">
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6  md:gap-6 '>
       {data.map((d) => (
         <div className="grid grid-cols-1 md:grid-cols-[45%_55%] text-black shadow-md  border-solid dark:bg-neutral-800
          bg-white dark:text-white  ">
          <div className="flex  overflow-hidden justify-center items-center  ">
          <img src={d.img} alt="img" className="object-cover transition-all center h-40 w-full  ease-in-out  hover:scale-125 " />
         </div>
        <div className="flex flex-col py-4 px-4   ">
          <p className="text-lg md:text-xl font-bold">{d.titel}</p>
          <p className=" "> {d.detail}</p>
        </div>
       </div>
        ))}
       </div>
       </div>
      </div>

      <div className='flex flex-col justify-center items-center font-poppins  gap-y-4 bg-[#dadbf1] dark:bg-neutral-800 p-4 md:p-8'>
        <p className='text-2xl text-[#7862e4]'>Events Topic</p>
        <p className='text-2xl md:text-4xl xl:text-5xl text-center'>What I Will Learn ?</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-y-16 justify-center items-center mt-4 lg:mt-8'>
        {data.map((d) => (
         <div className="flex justify-center items-center hover:scale-105 text-black  gap-x-2 border-solid  dark:text-white  ">
          <div className="flex  overflow-hidden p-5 rounded-full bg-white dark:bg-neutral-700 justify-center items-center  ">
           <img src={d.icon} className='h-10 md:h-14 w-16 md:w-28' alt="" />
         </div>
        <div className="flex flex-col   ">
          <p className="text-md md:text-lg font-bold text-[#7862e4]">{d.titel} </p>
          <p className="text-[10px] md:text-[15px] ">{d.desc}  </p>
        </div>
       </div>
        ))}
      
       </div>

       </div>

       <div className='m-5 grid grid-cols-1 md:grid-cols-2 bg-[#8f93ec] p-4 md:p-16'>
        <div className='justify-center items-center '><p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white'> GET EARLY ACCESS TO AI-EXPO 2024 </p></div>
        <div className='flex flex-col justify-center items-start gap-y-8'>
          <p className='text-white'>We believe that everyone should have access to opportunities to learn about and invest in innovative
             technologies. That’s why we created Tech Event—a place where entrepreneurs can pitch their ideas.</p>
             <button className='text-xl px-5 py-3 border-2 border-white text-white   hover:scale-105 hover:bg-[#7862e4]' onClick={()=> openDialog()}>Register Now</button>
             <LoginDialog open={open} setOpen={setOpen} />

        </div>
       </div>

      </div>

      <Frequently />
    </section>   
    )
}



export default Allevents;


