import {motion} from 'framer-motion';
import { fadeIn } from '../Varients';
import services1 from "../../assets/Services/services1.png"
import learn from "../../assets/Services/learn.png"
import mentor from "../../assets/Services/mentor1.png"
import event from "../../assets/Services/event.png"
import comma from "../../assets/Services/comma.png"
import { useState } from 'react';
import LoginDialog from '../Login/LoginDialog';

function AllServices() {
  const [open, setOpen] = useState(false);

  
  const openDialog = () => {
      setOpen(true);
  }

  return <section id='allservice' className=' dark:bg-black overflow-hidden  py-10  ' >
        
        <div className='grid grid-cols-1 md:grid-cols-2 px-4 py-4 lg:px-10 md:py-8 bg-[#F4F3FF]  dark:bg-neutral-800'>
        <div className='lg:p-4 flex justify-center md:justify-end items-center  '>
      <img src={services1} className="w-[90%]" alt="" />
      </div>

      <div className='flex flex-col justify-center items-center md:items-start  gap-y-4 md:gap-y-6'>
      <p className='text-2xl md:text-3xl lg:text-4xl font-poppins text-[#7862E4]'>Tech Shiksha Services</p>
      <p className='text-md md:text-lg font-poppins dark:text-white'>Want to step it up on techonology? Techonology 
        is just one piecec of the puzzel, With Tech Shiksha, you're 
      not just getting the right tools - your're getting a partner dedicated to boosting your confidence, upskilling your
       technology, and supporting you every step of the way.</p>
       <p className='text-md md:text-lg font-poppins dark:text-white'>
        We've been leading the Techonlogy Learning , mentorship since 2024, and we've trained 2000+ teacher and mentors.
       Come learn with us.</p>
       <button className='text-xl px-3 py-2 bg-[#FFBD59] hover:bg-white border hover:border-[#FFBD59] rounded-md font-poppins' onClick={() => openDialog()}>Join Now</button>
       <LoginDialog open={open} setOpen={setOpen} />

      </div>
        </div>
      
      
     
      <div className='flex flex-col  font-poppins p-4 md:px-6 lg:px-16 md:py-10  gap-y-5 md:gap-y-10'>
      
    <div className='flex flex-col justify-center items-center gap-y-3'>
    <p className='text-2xl md:text-3xl text-[#7862E4] '> Exploring  Services  </p>
   <p className='text-md md:text-lg font-poppins  md:px-20 lg:px-32 text-center dark:text-white'>
   Technology doesn’t have to feel complex or confusing, and you don’t have to tackle it on your own. 
   As a Global Techify Mentors or E-learners  students, you’ll automatically get access to our Standard Services.
   </p>
    </div>
   
   <div className='flex flex-col-reverse md:grid  md:grid-cols-2 px-2 lg:px-8 gap-y-4'>
    <div className='flex flex-col justify-center items-end gap-y-4'>
     <p className='text-2xl md:text-3xl lg:text-4xl font-poppins text-[#7862E4]'>Learn new skills from the best in the Global Techify</p>
       <p className='text-lg font-poppins dark:text-white'>Don’t stress out trying to learn on your own. 
        Strengthen your technology skills with select access to Global Techify 
        Academy courses and certifications and exclusive webinars that will help you hone your technology
         strategy and use Global Techify to its full potential.</p>
    </div>
    <div className='flex justify-center'>
      <img src={learn} className='w-[85%]' alt="" />
    </div>

   </div>

   <div className='grid  grid-cols-1 md:grid-cols-2 lg:px-8 px-2 gap-y-4'>
   <div className='flex justify-center'>
      <img src={mentor} className='w-[85%]' alt="" />
    </div>
    <div className='flex flex-col justify-center items-start gap-y-4'>
     <p className='text-2xl md:text-3xl lg:text-4xl font-poppins text-[#7862E4]'>Stay on track with ongoing guidance and mentorship</p>
       <p className='text-lg font-poppins dark:text-white'>
       As your goals and objectives on placements prepration,  your needs will too.
        Our Student hep team will support you throughout your project by providing advice and strategies 
        you can count on, thanks to a set of quality online resources and mentoring sessions.
         </p>
    </div>
   

   </div>

   <div className='flex flex-col-reverse md:grid   md:grid-cols-2 lg:px-8 px-2 gap-y-4'>
    <div className='flex flex-col justify-center items-end gap-y-4'>
     <p className='text-2xl md:text-3xl lg:text-4xl font-poppins text-[#7862E4]'>Get set up for success from day one</p>
       <p className='text-lg font-poppins dark:text-white'>
       Make your investment in Hootsuite pay for itself sooner with onboarding and software configuration that will help you hit the ground running. We’ll connect Hootsuite to your existing technology stack, 
       set up all your team members, and help them create time-saving workflows.
         </p>
    </div>
    <div className='flex justify-center'>
      <img src={event} className='w-[85%]' alt="" />
    </div>

   </div>
   
    </div> 

    <div className='flex flex-col justify-center items-center gap-y-5 p-4 md:px-16 md:py-10  dark:bg-neutral-800 bg-[#F4F3FF]'>
      <img src={comma} className='h-12' alt="" />

      <p className='text-xl md:text-2xl lg:text-3xl font-poppins text-center md:px-10 dark:text-white'>
        Tech Shiksha's professional services team handled the heavy lifting and training, ensured a smooth launch, 
        and set up our corporate and field teams for success!</p>

        <div className='py-3 flex flex-col justify-center items-center gap-y-1'>
          <p className='text-2xl font-poppins text-[#7862E4]'>Bhavya Dubey</p>
          <p className='text-md font-poppins dark:text-white'>CEO and Founder of Tech Shiksha
          </p>
        </div>
    </div>
    
    <div className='p-4 md:px-16 md:py-10 flex flex-col justify-center items-center gap-y-4'>
      <p className='text-xl md:text-2xl lg:text-3xl font-poppins dark:text-white text-center'>
        Ready to see what we can do together?</p>
      <button className='px-3 py-2 rounded-md bg-[#7862E4] hover:bg-white border hover:border-[#7862E4]
       hover:text-[#7862E4] text-xl text-white' onClick={() => openDialog()}>JOIN HERE</button>
      <LoginDialog open={open} setOpen={setOpen} />

    </div>
    </section>

}

export default AllServices;




