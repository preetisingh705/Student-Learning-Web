
import Logo from '../../assets/Header/LOGO11.PNG'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsThreadsFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import {Link} from "react-router-dom";





const currentYear = new Date().getFullYear();
 
function Footer() {
  return (
    <footer id="footer" className="relative w-full dark:bg-black bg-white p-4 md:p-6  border-t-[1px] border-gray-300 dark:border-white ">

      <div className="mx-auto w-full max-w-7xl md:px-6 font-poppins">

        <div className="grid grid-cols-1 justify-between md:grid-cols-[40%_60%] gap-x-10">
        
        <div  className="mb-4   dark:text-white  flex flex-col gap-y-2">
         <div className='flex justify-start items-center gap-x-4 '>
         <img src={Logo} className='w-10 md:w-14 bg-white rounded-full '  />
           <p className=" text-2xl lg:text-3xl  items-center font-bold text-[#7862e4] ">Tech Shiksha</p>
         </div>

      
         <p className="font-medium" >Tech Shiksha is the plateform for providing the best courses to the students. And oraganise Events to give a new techology journey to the students. </p>
      
         <a href="tel:9651609214" className="text-[#7862e4] text-xl hover:scale-105" >
          Click here for 24*7 Support
          </a>

          <div className='flex flex-col gap-y-4'>
          <p className='text-2xl font-semibold'> Follow Us On</p>
          <div className='flex gap-x-4'>
            <FaLinkedin  className='text-4xl text-[#7862e4] hover:text-black'/>
            <FaInstagramSquare  className='text-4xl text-[#7862e4] hover:text-black' />
            <FaFacebookSquare  className='text-4xl text-[#7862e4] hover:text-black' />
            <BsThreadsFill  className='text-4xl text-[#7862e4] hover:text-black' />
            <FaGithubSquare  className='text-4xl text-[#7862e4] hover:text-black' />
          </div>
        </div>
          
          </div>
         

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-poppins  gap-x-6 gap-y-4">
          <ul className="flex flex-col gap-y-1" >
                <p className="font-bold text-xl md:text-2xl text-[#7862e4]  mt-4 lg:mt-0 dark:text-white">
                
                  USEFUL LINKS
                </p>
                
                {data.map ((d) => (
             <li >
                <Link to= {d.id} activeClass='active' smooth={true} spy={true} >
            <p className="py-1 text-xl cursor-pointer transition-colors text-blue-gray-900 hover:text-blue-gray-900
            hover:text-[#7862e4] dark:text-white"> 
               {d.title}
            </p>
            </Link>
               </li>
                ))}
      
               
          </ul>
          <ul  className="flex flex-col gap-y-1">
                <p  className=" text-[#7862e4] text-xl md:text-2xl font-bold  mt-4 lg:mt-0 dark:text-white" >
                
                COURSES
                </p>
                <li >
      {course.map ((d) => (
        <Link to="/allcourses">
            <p className="py-1 text-xl  hover:text-[#7862e4] font-normal transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                  {d.title}  
          </p>
          </Link>
      ))}      
                    
                  </li>
         </ul>
                <ul  className="flex flex-col gap-y-1">
                <p className="text-[#7862e4] font-bold text-xl md:text-2xl  dark:text-white"
                >
                   EVENTS
                </p>
                <li >
        {event.map ((d) => (
            <Link to="/allevents" >
              <p className="py-1 text-xl  font-normal  cursor-pointer hover:text-[#7862e4] transition-colors text-blue-gray-900 hover:text-blue-gray-900 dark:text-white"> 
                    {d.title}  
            </p>
            </Link>
        ))}      
                      
 </li>
                </ul>
             
          </div>
          
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center   border-t border-blue-gray-50 py-4 md:flex-row ">
          <div
            className="font-poppins text-center  text-md md:text-xl text-blue-gray-900 dark:text-white"
          >
             Copyrights &copy; {currentYear} All Right Reserved
          <Link to="/">
              <span  className="text-[#7862e4]"> Tech Shiksha</span>
              </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;


const event = [
  {
      title: 'Business Program',
      id: ``
    },
    {
      title: 'AI Hackthon',
      id: ``
    },
    {
      title: 'ML Project',
      id: ``
    },
    {
      title: 'Web Development',
      id: ``
    },
    {
      title: 'App Development',
      id: ``
    },
    {
      title: 'Entrepreneurship',
      id: ``
    },

];

const course = [
  {
    title: 'Full Stack',
    id: ``
  },
  {
    title: 'Data Structure',
    id: ``
  },
  {
    title: 'Languages',
    id: ``
  },
  {
    title: 'Html,Css',
    id: ``
  },
  {
    title: 'JavaScript',
    id: ``
  },
];

const data = [
  {
    title: 'Home',
    id: `/`,
},
  {
      title: 'Events',
      id: `/allevents`,
  },
  {
      title: 'Mentorship',
      id: `/allmentor`,
  },
  {
      title: 'About Us',
      id: `/about`,
  },
  {
      title: 'Services',
      id: `/allservices`,
  },
  {
      title: 'Contact Us',
      id: `/contact`,
  },
 
];