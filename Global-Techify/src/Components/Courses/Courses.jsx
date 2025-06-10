import { IoArrowForward } from "react-icons/io5";

import {Link} from 'react-router-dom';
import { coursname ,freature,card } from "./coursname";
import { IoStar } from "react-icons/io5";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { RxExternalLink } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

function Courses () {
  const [flipped,setFlipped] = useState(false);

  function handleFlip () {
      setFlipped(!flipped);
      
  }
  const myStyle = {
    backgroundImage:
        "url('../../src/assets/Courses/card3.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};


    return (
    <section id='courses' className=' dark:bg-black bg-[#FFFFFF] overflow-hidden  ' >


       <div style={{backgroundImage:`url("../../src/assets/Home/background.png")`}} 
       className="bg-no-repeat bg-cover px-4 py-6 md:px-10 md:py-16 flex flex-col gap-y-8">

      
      {/* Browse */}
    <div className="flex  flex-col gap-y-3 justify-center items-center ">
    <p className="text-[25px] md:text-[35px]  text-[#7862e4]  font-poppins leading-none">Explore Courses</p>

    <p className="text-[23px] md:text-4xl lg:text-5xl font-poppins dark:text-white text-center">
      Browse Our Best Courses</p>
    <p className="text-sm md:text-lg text-center dark:text-white font-poppins"> 
      100+ videos and Live Classes with Books , Notes of Our Best Teachers</p>

    </div>


       {/*Card of courses  */}

       < div className=' grid  grid-cols-1 gap-y-6 md:grid-cols-3   px-2 md:gap-x-3 lg:px-20  justify-center items-center   '>
       {coursname.map( (d) => (
         <div
         key={d.id}
         onClick={() => setFlipped(d.id)}
       >
         <ReactCardFlip isFlipped={flipped === d.id} flipDirection="horizontal">

          <div className="bg-white  dark:bg-neutral-900 border dark:text-white dark:border-neutral-500 rounded-xl  text-black md:p-4 p-2 shadow-md border-b-2 border-solid ">
         <div className="  md:border-slate-500 flex  justify-center  items-center rounded-xl    ">
         <img src={d.url} alt="img" className=" center rounded-xl" />
        </div>

        <div className="flex  flex-col   gap-y-3 ">
         <p className="text-xl font-poppins flex justify-center  text-[#7862e4] items-center">{d.title}</p>
         <div className="flex flex-row justify-between">
         <p className="sm:text-justify flex   font-poppins">{d.description}</p>
         <div className="flex gap-x-2 text-yellow-300"><IoStar  /><IoStar /><IoStar /><IoStar /></div>
         </div>
        </div>

            </div>


        <div onMouseOut={handleFlip}  className="flex flex-col  bg-white rounded-xl dark:bg-neutral-900 border  dark:border-neutral-500 
          md:p-4 p-2 shadow-md border-b-2 border-solid justify-center items-center gap-y-4">
       
        <div style={myStyle}  className="flex flex-col justify-center items-center p-4 gap-y-3 rounded-md">
        <Link to={d.path}>
         <div className="p-4  bg-[#8574da]  md:border-slate-500 flex  justify-center  items-center rounded-full    ">
        <RxExternalLink className="text-[32px] text-white" />

         </div>
         </Link>
         <p className="text-xl font-poppins flex justify-center text-[#7862e4] text-center items-center">{d.title2}</p>
         <p className="   font-poppins text-center ">{d.desc2}</p>

        </div>


        <div className="flex gap-x-2 md:gap-x-8  justify-center items-center">
           <p className="font-bold text-xl dark:text-white">Price ₹ {d.price}</p>
           <del className="dark:text-white">₹ {d.discount}</del>

           <div className="bg-green-500 text-white rounded-xl px-2 flex justify-center items-center">{d.off}% off
         </div>
         </div>
        
         
         </div> 

           
             
         
         </ReactCardFlip>
         </div>
      
       ))}
 
        </div>

      {/* View All Button */}

      <Link to='/allcourses'>
      <div className='flex  mt-6 justify-center items-center    text-[#563AE0] hover:text-white font-poppins   '>
      <button className='flex border-2 border-solid px-2 border-[#563AE0] hover:bg-[#563AE0]  rounded-md text-[20px] lg:text-[25px]'> 
        View All <IoArrowForward className='m-2 text-[20px]  lg:text-[25px] ' /> 
      </button>  
      </div>
      </Link>
      </div>


      <div className="flex flex-col gap-y-14 bg-[#F4F3FF]  dark:bg-neutral-800 px-4 py-5 md:px-10  md:py-16 "> 

      <div className="grid   gap-y-4 grid-cols-1 md:grid-cols-2  ">
        <div className="p-6 flex flex-col justify-center mt-6">
        <p className="text-4xl font-poppins text-[#7862e4]">Key Features</p>
        <div className="flex flex-col gap-y-2 mt-4">
        {freature.map((d) => (
         <div className="flex gap-x-2 justify-start items-center"><GoDotFill className="text-[#7862e4]" />
<p className="dark:text-white"> {d.item}</p></div >

        ))}
        </div>
        </div>

        <div className="grid grid-cols-1 mt-6">

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 xl:gap-x-6 gap-y-4 px-4 lg:px-6 xl:px-12">
            {card.map ((d) => (
              <div style={{backgroundColor: `${d.color}`}} className='rounded-lg p-2 xl:p-4 flex flex-col hover:scale-105' >
                    <p className="text-xl text-white font-poppins"> {d.titel}</p>
                    <div className="flex justify-end items-end">
                    <img src={d.img} className="h-10" />
                    </div>

            <div></div>

          </div>
            ))}
          
          </div>

          {/* <div className="grid-cols-3">
          <div className=" bg-slate-400 rounded-lg p-4">
            <p>100% Live Sessions & 1:1 Mentorship</p>
            <div></div>

          </div>
          </div> */}
        </div>

      </div>

      {/* box  */}
      <div  className=" bg-[#040728]  border dark:border-neutral-500 shadow-neutral-700 p-8 rounded-xl flex flex-col justify-center items-center gap-y-4 ">
          <p className="text-xl md:text-2xl text-center text-white">Join a demo to unlock the full <span className="text-[#fcba58]">potential of our course</span> and see how it can elevate your skills!</p>
          <Link to="/allcourses" >
          <button className="px-6 py-2 bg-[#DF8907] hover:bg-white hover:text-[#DF8907] hover:border hover:border-[#DF8907] text-xl rounded-xl text-white">Join Courses</button>
          </Link>
        </div>
      </div>

    </section>

        
    )
}

export default Courses;


