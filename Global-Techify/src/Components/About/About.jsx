import { IoArrowForward } from "react-icons/io5";

import about1 from "../../assets/About/about3.gif";
import {Link } from "react-scroll";

import { useState,useContext } from 'react';
import LoginDialog from '../Login/LoginDialog';

function About() {
  const [open, setOpen] = useState(false);

  
  const openDialog = () => {
      setOpen(true);
  }
    return (
    <section id='about'  style={{backgroundImage:`url("../../src/assets/Home/background.png")`}}
    className='bg-no-repeat bg-cover h-full px-4 py-6 md:px-10  md:py-16 lg:px-4   dark:bg-black overflow-hidden  dark:text-white' >

      <div className='grid grid-cols-1 lg:gap-y-4   font-poppins'>
      
          <p className="text-[25px] md:text-[35px] text-[#7862e4] text-center font-semibold leading-none">What We Are</p>

      <div className="flex flex-col-reverse lg:grid md:grid-col-1 lg:grid-cols-[55%_45%] p-4  gap-y-4 ">  

      <div className='flex flex-col gap-y-8 justify-center'>

      <div className=' flex flex-col gap-y-2 justify-center font-poppins'>
         <p className='text-lg   text-[#7862e4]'>
          Our aim to provide accessible & affordable courses .
          </p>   
         <p className="text-lg md:text-xl ">
        Tech Shiksha virtual E-Learning platform to upskills the coding and programming journey of Students.
         We pride on our Teacher and Mentors to teaching  the stuents in a new method and their determination 
         to Stand By students to help in upskilling 
         </p>
    </div>
       
      <div className='flex gap-x-4 md:px-5'>

        <div className='flex flex-col'>
        <p className='text-md font-semibold text-[#7862e4]'>Teachers 30+</p>

        <p>Highly Qualified Teachers</p>
        </div>

        <div className='flex flex-col'>
        <p className='text-md font-semibold text-[#7862e4]'>Programs 20+</p>

        <p>High Qualility Videos & Materials</p>


        </div>

        <div className='flex flex-col'>
          <p className='text-md font-semibold text-[#7862e4]'>Mentors 25+</p>
        <p>Top Companies Mentors</p></div>
      </div>

      <div className='flex gap-x-8 justify-center'>
        <Link to="courses" activeClass='active' smooth={true} spy={true}  offset={-80}>
      <button className='text-md md:text-lg p-3 rounded-md border-2 border-solid border-[#7862e4] hover:bg-[#7862e4]
       hover:text-white text-[#7862e4] flex items-center gap-x-1'>
       Explore Us <IoArrowForward className="text-md md:text-lg"/>
      </button>
      </Link>

     <button className='text-lg bg-[#7862e4] hover:border hover:border-[#7862e4]  hover:bg-white 
     hover:text-[#7862e4] p-4 font-poppins rounded-md text-white font-semibold' onClick={()=> openDialog()}>
      Join Us
      </button>
      <LoginDialog open={open} setOpen={setOpen} />

      </div>

      </div>
      

      <div className='' > 
          <img src={about1} alt="" className='h-full w-full rounded-md ' />
    </div>

      </div>

      </div>
    </section>   
    )
}



export default About;


