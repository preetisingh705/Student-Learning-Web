import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import {TypeAnimation} from 'react-type-animation';
import { PiVideoDuotone } from "react-icons/pi";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Learn from "../../assets/Home/Html1.png"
import ai from "../../assets/Events/ai.jpg"
import app from "../../assets/Events/app.jpg"
import business from "../../assets/Events/business.jpg";
import { MdEmojiEvents } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { TbFileCertificate } from "react-icons/tb";
import { SiCodementor } from "react-icons/si";
import "./landing.css";
import { Link } from 'react-scroll';

import { useState } from 'react';
import LoginDialog from '../Login/LoginDialog';

const data = [
  { id: 2, img: ai  },
  { id: 3, img: business },
  { id: 4, img: app }
]

const responsive = {
 
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Landing() {
  const [open, setOpen] = useState(false);

  
  const openDialog = () => {
      setOpen(true);
  }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: "linear",
      arrows:false,
      
    };

  return (
    <section id='home' 
     className=' dark:bg-black overflow-hidden bg-[#FFFFFF]  lg:pt-8 mt-10 lg:mt-0' >
        
        
     <div  style={{backgroundImage:`url("../../src/assets/Home/back2.png")`}} 
     className='font-poppins bg-no-repeat bg-cover   grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-y-4 mt-3 ' >



      {/* image */}
     <div className='flex  md:justify-center lg:p-4 xl:pl-12 xl:mb-4'>
  		
      <div class="flex flex-col justify-center items-center">
      <img src={Learn } className='' />
	   	</div>
    
       </div>

       <div className='flex flex-col gap-y-2 px-4 md:p-1  lg:gap-y-4 justify-center items-center md:items-start '>
      

           <div className='flex flex-col justify-center  font-poppins gap-y-2 lg:gap-y-6 '>
         
         <h1 className='text-lg md:text-xl  text-black dark:text-white'> 
       Exproling The Technology World With
      </h1>
 
           <div className='flex flex-col gap-y-2 text-[25px] md:text-[35px] lg:text-[40px]   font-poppins leading-none  text-[#7b67df]'>
 <span className='flex text-[#7b67df] text-[35px] md:text-[42px] lg:text-[55px]  xl:text-[60px] font-bold '>
  Global Techify </span> 
 <TypeAnimation
  sequence={[
   'E-Learning !!',
   2000,
   'Mentorship !!',
   2000,
   'Events !!',
   2000,
  ]}
  speed={50}
  className='  '
  wrapper='span'
  repeat={Infinity}
  />

         </div>  

        <p  className="text-md   font-medium text-black dark:text-white  ">
         Unlock your potencial careers to give a shape to your future by signing up with Tech Shiksha- Learn and Get Mentorship with Our Top Higher Comapies Mentors and start your 
         career journey .
         </p>


 

           </div>

           <div  className=' flex  mt-2 gap-2  gap-x-6'>
         <button className='font-poppins text-lg xl:text-2xl  text-white  rounded-3xl bg-[#7862e4] px-2 md:px-4 border
         hover:border-[#7862e4] hover:bg-white  hover:text-[#7862e4]
         py-1 md:py-2 ' onClick={()=> openDialog()} >
         Enroll now
         </button>
         <LoginDialog open={open} setOpen={setOpen} />


         <Link to='courses' activeClass='active' smooth={true} spy={true} >
        
          <button className="flex px-2 md:px-4 py-1 md:py-2 rounded-md items-center  font-poppins text-lg lg:text-2xl
           dark:bg-neutral-900 dark:border-neutral-400 dark:text-white border-[1px] border-solid border-[#7b67df]
            hover:bg-[#7b67df]  hover:text-white text-[#7b67df]">
       Explore Here <FaArrowRight />
      </button>
      </Link>

 
      </div>


      
       </div>



     

   


         {/* small screen view */}


        <div className="w-full  md:hidden  ">
     <Carousel
     responsive={responsive}
     swipeable={false}
     draggable={false}
     infinite={true}
     autoPlay={true}
     removeArrowOnDeviceType={["mobile"]}
     showDots={true}
     containerClass="carousel-container"
       itemClass="carousel-item-padding-40-px"
       autoPlaySpeed={1000}
     >
       { 
         data.map(data => (
           <img className="w-full h-40"  src={data.img} alt="banner" />
         ))
       }

     </Carousel>

    
         </div>

     </div>

      
      <div className='bg-[#F4F3FF] dark:bg-neutral-800 p-4  md:p-8 pt-5 lg:p-16 flex flex-col gap-y-10'>
        <p className='text-center font-poppins text-2xl md:text-3xl text-[#7862e4]'>Why Tech Shiksha ?</p>

       <div  className='grid grid-cols-2  lg:grid-cols-4 gap-x-1 md:gap-x-6 gap-y-1 md:gap-y-6  dark:text-white dark:border-neutral-500  justify-center font-poppins'>
         
        <div className='flex flex-col justify-center items-center font-poppins gap-y-3 p-1 md:p-3 hover:scale-105' >
          <div className='p-2 bg-[#7862e4] rounded-full'>
          < PiVideoDuotone  className='text-white text-[50px] md:text-[70px]' />
          </div>
          <div>
          <p className='font-poppins text-md md:text-xl text-center'>Course of Top Instructor</p>
          <p className='text-[10px] md:text-[15px]  text-center'>Find Online courses from the Best Mentors. </p>
          </div>
        </div>

        <div className='p-1 md:p-3 flex flex-col justify-center items-center font-poppins gap-y-3 hover:scale-105'>
          <div className='p-2 bg-[#7862e4] rounded-full'>
          <SiCodementor className='text-white text-[50px] md:text-[70px]' />
          </div>
          <div>
          <p className='font-poppins text-md md:text-xl text-center'>Mentorship Guide</p>
          <p className='text-[10px] md:text-[15px]  text-center'> Learn To crack the top interviews , Placements.</p>
          </div>
        </div>

        <div className='p-1 md:p-3 flex flex-col justify-center items-center font-poppins gap-y-3 hover:scale-105'>
        <div className='p-2 bg-[#7862e4] rounded-full'>
          <TbFileCertificate className='text-white text-[50px] md:text-[70px]' />
          </div>
          <div>
          <p className='font-poppins text-md md:text-xl text-center'>Earn Certifications</p>
          <p className='text-[10px] md:text-[15px]  text-center'>Earn Certifications and Recognition.</p>
        </div></div>

        <div className='p-1 md:p-3 flex flex-col justify-center items-center font-poppins gap-y-3 hover:scale-105'>

        <div className='p-2 bg-[#7862e4] rounded-full'>
          <MdEmojiEvents className='text-white text-[50px] md:text-[70px]' />
          </div>
          <div>
          <p className='font-poppins text-md md:text-xl  text-center'>Live Events</p>
          <p className='text-[10px] md:text-[15px]  text-center'>Get Chance To join the live events on upcoming tecnology.</p>
        </div>
        </div>

       </div>
       </div>
     



     
  </section>
  );
  
};

export default Landing;

