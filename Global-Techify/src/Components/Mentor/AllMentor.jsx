import mentor from "../../assets/Mentor/mentor2.png"
import mentor2 from "../../assets/Mentor/mentor3.png";
import { category, guider } from "./data";
import {Link} from 'react-scroll';
import { useState } from 'react';
import LoginDialog from '../Login/LoginDialog';
import Frequently from "./Frequently";

function AllMentor() {
  const [open, setOpen] = useState(false);

  
  const openDialog = () => {
      setOpen(true);
  }
  return (
    <section id="allmentor"  className='mentor   dark:bg-black overflow-hidden bg-[#fcfcfc] ' >
  
  <div className="p-4 md:px-6 lg:px-10  mt-12">

    <div className="grid grid-cols-1  md:grid-cols-2 bg-[#b5b0ff]  font-poppins rounded-3xl ">
 <div className="flex flex-col  px-4 py-6 gap-y-6 md:gap-y-8 lg:px-8 lg:py-10 xl:py-14  lg:gap-y-16 ">
  <p className="text-4xl lg:text-5xl xl:text-6xl text-white font-poppins">
    Uncover the Screct of Successful Careers!</p>
  <p className="text-white font-poppins">Start the career journey with the mentors for find a right path to discover your prepation.
     Here You Find Your Right mentor for your whole journey and discussion </p>
  <div className="flex gap-x-4"> 
  <Link to='findmentor' activeClass='active' smooth={true} spy={true}  offset={-90}>

    <button className="px-3 py-2 bg-[#f8b857] rounded-full text-md md:text-lg font-poppins text-white
     border hover:bg-white hover:border-[#f8b857] hover:text-black">
      Find a Mentors</button>
    </Link>
    <Link to='more' activeClass='active' smooth={true} spy={true}  offset={-50}>

    <button className="px-3 py-2 border  border-black rounded-full text-md md:text-lg font-poppins text-black hover:bg-black hover:text-white">
      Learn More</button>
  </Link>
  </div>
 </div>

 <div>
  <img src={mentor} className="" alt="" />
 </div>
    </div>

    {/* /How work */}
     <div id='more' className=" flex flex-col justify-center items-center px-4 py-6 md:px-10 md:py-10 lg:py-16 gap-y-6 md:gap-y-10">
  <p className="text-3xl font-poppins text-[#7862e4] ">How it Works?</p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-10 gap-y-4 gap-x-6 lg:gap-x-10">
    <div className="flex flex-col justify-center hover:scale-110 items-center gap-y-4 border-2  dark:border-white border-black rounded-2xl
     px-2 py-5 lg:px-4 lg:py-10 font-poppins">
      <p className="text-2xl text-[#7862e4] ">Registraion</p>
      <p className="text-center dark:text-white">Are you looking to joing mentornship program ? Now it's very simple. Register Now.</p>
    </div>
    <div className="flex flex-col justify-center hover:scale-110  items-center gap-y-4 border-2 dark:border-white border-black rounded-2xl 
    px-2 py-5 lg:px-4 lg:py-10 font-poppins">
      <p className="text-2xl text-[#7862e4] ">Collaborate</p>
      <p className="text-center dark:text-white">Collaborate on your own timing. by scheduling with mentor booking</p>
    </div>
    <div className="flex flex-col justify-center hover:scale-110  items-center gap-y-4 border-2 dark:border-white border-black rounded-2xl 
    px-2 py-5 lg:px-4 lg:py-10 font-poppins">
      <p className="text-2xl text-[#7862e4] ">Improve & Get Back</p>
      <p className="text-center dark:text-white">You can gather differents skill set. and you are become mentor too.
        </p>
    </div>
  </div>
     </div>
     </div>

     {/* improve */}

     <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#F4F3FF] dark:bg-neutral-900 p-4 md:px-10 md:py-10 gap-y-10">
      <div className="flex justify-center items-center">
        <img src={mentor2} className="w-[500px] " alt="" />
      </div>

      <div className="flex flex-col md:px-10  gap-y-6 md:gap-y-10 font-poppins justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-[#7862e4]">Our misson is make your career Brighter</p>
        <p className="dark:text-white">Top Higher Comapny's and IIT mentors that they provide you mentorship guidance to reach you on your careers goals.
          Give a shape to your career for the your placements Journey.
        </p>
        <div>
        <button className="px-3 py-2 border border-[#7862e4] hover:bg-[#7862e4] hover:text-white text-xl dark-text-white rounded-lg dark:text-white font-poppins " onClick={() => openDialog()} > Join Now</button>
        <LoginDialog open={open} setOpen={setOpen} />

        </div>
      </div>

     </div>

     

    {/* category */}
     <div id='findmentor' className="flex flex-col justify-center items-center  p-4 py-8 gap-y-8 md:gap-y-10 font-poppins  lg:py-10 md:mt-4 ">
    <p className="text-3xl md:text-4xl text-[#7862e4] ">Category We have</p>
      <div className="flex flex-col gap-y-6">
      <div className="grid grid-cols-2  gap-y-2 md:flex gap-x-3 md:gap-x-8 justify-center dark:text-white">
       <div className="p-2 border-2 border-[#7862e4] rounded-full shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">Web Developer</div>
        <div className="p-2 border-2 border-[#7862e4] rounded-full shadow-md font-poppins hover:bg-[#7862e4] hover:text-white"> Placement  </div>
        <div className="p-2 border-2 border-[#7862e4] rounded-full shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">Interview Talk</div>
        <div className="p-2 border-2 border-[#7862e4] rounded-full shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">Ui Design</div>
        <div className="p-2 border-2 border-[#7862e4] rounded-full shadow-md font-poppins sm:text-sm hover:bg-[#7862e4] hover:text-white">Non-Tech Coding</div>

       </div>

       {/* cards */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-x-10 px-4 md:px-10 lg:px-20 gap-y-6">
        {category.map ((d) => (
         <div className="border rounded-2xl p-2 flex flex-col gap-y-2 justify-start shadow-md hover:scale-105 dark:bg-neutral-700 bg-[#ebebf7] ">
          <div className="flex justify-end">
            < p className=" rounded-2xl border border-[#7862e4] px-2  dark:text-white  ">10:00 AM - 3:00PM</p> </div>
            <div className="flex flex-col gap-y-2">
   <p className="text-2xl font-poppins text-[#7862e4]">{d.title}</p>
       <p className="font-poppins dark:text-white"> {d.mentor} mentor avalaible</p>
       </div>
       <div>
 <button className="text-lg px-3 py-1 rounded-2xl border bg-[#9b8de0] hover:bg-white hover:border-[#7862e4]   ">
 <a href="https://wa.me/9651609214">Book Now</a></button>
 </div>
</div>
        ) )  }
   
      </div>
      </div>
     </div>
     
     {/* what become */}
     <div className="flex flex-col px-2 py-10  md:mt-5 rounded-lg justify-center items-center font-poppins gap-y-2
      bg-[#F4F3FF] md:gap-y-6 dark:bg-neutral-800">
      <p className="text-2xl md:text-3xl lg:text-4xl text-center text-[#7862e4] ">What's Your Career Path?</p>
      <p className="text-sm md:text-md text-center dark:text-white">Find the best career with Global Techify</p>
     
        {/* detail */}
        <div className="grid grid-cols-2  gap-y-2 md:flex gap-x-8 justify-center dark:text-white">
       <div className="p-2 border-2 border-[#7862e4] rounded-md shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">1:1 Session</div>
        <div className="p-2 border-2 border-[#7862e4] rounded-md shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">Live Interview </div>
        <div className="p-2 border-2 border-[#7862e4] rounded-md shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">Placement Prep</div>
        <div className="p-2 border-2 border-[#7862e4] rounded-md shadow-md font-poppins hover:bg-[#7862e4] hover:text-white">MNC's Drive</div>
       </div>
       <button className="p-2 lg:p-4 bg-[#f7c65d] rounded-md text-sm md:text-xl hover:bg-white border hover:border-[#f7c65d] hover:text-[black] text-white  font-poppins">
           <a href="https://wa.me/9651609214">BOOK SESSION</a>
        </button>
     </div>

     {/* mentors */}
      <div className="flex flex-col justify-center items-center py-8   lg:px-10 md:py-14  gap-y-6 lg:gap-y-10">
    <p className="text-3xl md:text-4xl lg:text-5xl  md:px-20 lg:px-60 xl:px-80 text-center font-poppins dark:text-white">Discovers the World's best mentors</p>
     <div className="grid  grid-cols-1 md:grid-cols-3 gap-x-4  gap-y-6 lg:gap-x-10">
      {guider.map ((d) =>(
 <div className="flex flex-col gap-y-6">
 <div className="rounded-full ">
  <img src={d.img} alt="" className="rounded-full h-40 md:h-60"/>
 </div>
 <div>
 <p className="text-xl font-poppins dark:text-white text-center">{d.name}</p>
 <p className="font-poppins dark:text-white text-center">{d.postion}</p>
 </div>
 </div>
      ))}
     
     </div>
     </div>

     <div  className=" bg-[#040728] font-poppins border dark:border-neutral-500 shadow-neutral-700 p-8  flex flex-col justify-center items-center gap-y-4 ">
          <p className="text-xl md:text-2xl text-center text-white">Join a demo to unlock the full potential of
             <span className="text-[#fcba58]"> Mentorship Program</span> and see how it can elevate your skills!</p>
          <button className="px-6 py-2 bg-[#DF8907] text-xl rounded-xl text-white hover:bg-white border hover:border-[#DF8907] hover:text-black " onClick={()=> openDialog()}>Join Here</button>
          <LoginDialog open={open} setOpen={setOpen} />
        </div>

     {/* frequently asked questions */}
     <Frequently />
        
    </section>
  )
}

export default AllMentor;
