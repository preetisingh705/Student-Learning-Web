
import { IoArrowForward } from "react-icons/io5";
import data from './data'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Courses/AllCourses/recorded.css"; 
import {Link} from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";



function Events() {
  const [flipped,setFlipped] = useState(false);

  function handleFlip () {
      setFlipped(!flipped);
      
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow:3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [

      {
        breakpoint: 1024,
        settings:{
          slidesToShow:2,
        slidesToScroll: 2,
        dots: false,
        infinite: true,
        arrows:false
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,
        
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow:1,
        slidesToScroll: 1,
        arrows: false
        
        }
      },
      {
        breakpoint:480,
        settings:{
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots:true
        
        }
      },
    
    ]
  };
  
    return ( <section id='events'   className='  bg-[#FFFFFF] dark:text-white  dark:bg-black overflow-hidden ' >

      <div  style={{backgroundImage:`url("../../src/assets/Home/background.png")`}} 
       className='grid grid-cols-1 bg-no-repeat bg-cover  gap-y-4 px-4 py-6 md:px-10 md:py-14 md:gap-y-10 font-poppins'>
      

       {/* Events Box */}
      
       <div className='flex flex-col justify-center items-center font-poppins   md:px-10 gap-y-6'>
       <p className="text-[25px] md:text-[35px]  text-[#7862e4]  font-semibold leading-none">Explore Events</p>

       <p className='text-3xl md:text-4xl lg:text-5xl text-center font-poppins'>
          Transoforming Your Ideas Into New Technology
          </p>
       
       <p className='text-lg md:text-xl text-center'>
          We specialize in turning  new upcoming technology and your ideas that's make you more upskilled and tech-world  in new upcoming technology world.
        </p>

        <div className='flex gap-4  md:gap-x-10'>
          <Link to="/allevents">
          <button className='px-4 py-2 text-lg text-white rounded-md bg-[#7862e4] hover:border hover:border-[#7862e4] hover:text-[#7862e4] hover:bg-white'>
          Join Events</button>
          </Link>
          <Link to="/allevents"
          >
          <button className="px-4 py-2 text-lg text-[#7862e4] border-2 rounded-md hover:bg-[#7862e4] hover:text-white border-[#7862e4]">How it Works</button>
          </Link>
          </div>
       </div>
        
     <div className=" mt-4 md:mt-8 md:m-8 ">
      <Slider {...settings}>
         {data.map((d) => (
        <div
          className=""
          key={d.id}
          onClick={() => setFlipped(d.id)}
        >
          <ReactCardFlip isFlipped={flipped === d.id} flipDirection="horizontal">

          <div className=" w-[100%] h-[100%] text-black shadow-md border-b-2 border-solid rounded-lg dark:bg-neutral-900 border dark:text-white dark:border-neutral-500 bg-white  ">
        
        <div className="flex justify-center items-center rounded-t-lg ">
        <img src={d.img} alt="img" className="center h-40 w-full rounded-t-lg" />
       </div>
      <div className="flex flex-col py-4 px-4 border-t-[1px] border-black  border-solid rounded-b-lg ">
        <p className="text-2xl font-poppins text-[#7862e4]">{d.titel}</p>
        <p className=" "> {d.detail}</p>
      </div>
          </div> 


            <div onMouseOut={handleFlip}
          className='   h-[100%] text-black shadow-md border-b-2 border-solid rounded-lg  bg-neutral-100 bg-no-repeat bg-cover p-4 dark:bg-neutral-900 border dark:text-white dark:border-neutral-500 '  style={{backgroundImage:`url(${d.img2})`}}>
          <div className="flex flex-col justify-center items-center rounded-t-lg py-4 px-6 text-center gap-y-3  ">
             <Link to={d.path}>
         <div className="p-4  bg-[#715cda]  md:border-slate-500 flex  justify-center  items-center rounded-full    ">
        <RxExternalLink className="text-[32px] text-white" />

         </div>
              </Link>
         <p className="text-lg font-poppins text-center text-[#7862e4]">{d.title2}</p>
          <p className="text-center "> {d.time}</p>
         </div>
        {/* <div className="flex flex-col py-2 px-4 border-t-[1px] border-black  border-solid rounded-b-lg ">
          
        </div> */}
             </div>
              
          
          </ReactCardFlip>
        </div>
      ))}
      
      
 
      </Slider>
    
      </div>
  
      </div>

    
      <div className=' font-poppins flex flex-col  gap-y-6 md:gap-y-10 bg-[#594175] px-4 py-5 md:px-8 md:py-14 items-center'>
       <div className='flex flex-col md:flex-row lg:px-10 items-center gap-x-4 gap-y-4 '>
       <p className='text-3xl md:text-4xl lg:text-5xl font-poppins text-white text-center'>Take Part In Innovation!</p>
       <div className='text-white px-2 lg:px-10'>Be The Part of the Larget Tegional Tech Innovation Chanllanges And Innovative entrepreneurship session. 
        Also More Events  Programm in AI Techonolgy and Machine Learning</div>
       </div>

       <div className='grid grid-cols-1 md:grid-cols-3 px-4  md:px-10 gap-x-10 justify-center'>
      <div className='hover:scale-105 text-white p-2'>
        <p className='text-2xl'>200+</p>
        <p>Hackthons Oraganise on every week and more prizes.</p>
      </div>
      <div className='hover:scale-105 text-white p-2'>
      <p className='text-2xl'>6+</p>
      <p>Evesnts Session in 6+ diverse field on every month oraganize for the students.</p>
      </div>
      <div className='hover:scale-105 text-white p-2'>
      <p className='text-2xl'>10+</p>
      <p>Mentor who guide to start your tech journey and career guidance</p>
      </div>
      <div></div>

       </div>

       <div className='flex gap-x-4'>
        <Link to="/allevents">
        <button className='bg-slate-50 px-3 py-2 text-lg rounded-md dark:text-black hover:text-white hover:border-white hover:border hover:bg-[#594175] flex items-center gap-x-1'>
          Explore Events <IoArrowForward className="text-lg" />

        </button>
        </Link>
        <button className="p-2 lg:px-3 lg:py-2 bg-[#f8af4e] rounded-md text-lg md:text-xl text-white 
        hover:text-[#f8af4e] hover:border-[#f8af4e] hover:border hover:bg-white  ">
           <a href="https://wa.me/9651609214">Book Events</a>
        </button>
        </div>
       </div>

      
      

    </section>   
    )
}



export default Events;


