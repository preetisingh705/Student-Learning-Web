import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import CenterMode from './CenterMode';
import { IoArrowForward } from "react-icons/io5";
import {Link} from "react-router-dom"

function Services () {
  return(
    <section id='services' className='p-4 md:px-10 md:py-12 dark:bg-black overflow-hidden ' >

      <div className='grid grid-cols-1 gap-y-14 justify-center items-center font-poppins'>
        
        {/* Services Text */}
      <div className=' flex flex-col  justify-center items-center text-[25px] md:text-[35px]   text-[#7862e4] 
         font-semibold '>
         What We Do
      </div>
      
      <div className='text-center text-sm md:text-lg mx-4 md:mx-20 xl:mx-40 flex justify-around items-baseline dark:text-white'>
        Tech Shiksha Provide the Online Courses Of there Best Top Teachers  & Mentorship Program To Guidance To the Students . Oraganizing Events On the New Techonology.
        </div>

     {/* Slider */}
       <CenterMode />
       

      {/* Know More button */}
      <div className='flex justify-center'>
      <Link to="/allservices">
      
      <button className='flex justify-center items-center text-xl md:text-2xl  text-[#7862e4] 
      font-poppins gap-x-2 border border-[#7862e4] px-2 rounded-md hover:bg-[#7862e4] hover:text-white'> Know More <IoArrowForward className=' text-[20px] ' /> 
      </button> 
      </Link> 
      </div>
     
     

    </div> 
    
    </section>
  )
}

export default Services;