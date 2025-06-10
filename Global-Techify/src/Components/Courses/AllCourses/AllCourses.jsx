import Card from "./Card.jsx";
import {React , useState} from "react";

import Recorded from "./Recorded.jsx";
import Instructor from "./Instructor.jsx";
import {Link} from 'react-scroll';
import { useEffect } from "react";
import { getProducts} from '../../../redux/action/coursesAction.js'
import { useDispatch, useSelector } from 'react-redux';
import learn1 from "../../../assets/Allcourses/learn2.png"
import certificate from "../../../assets/Allcourses/certificate.png"
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Frequently from "./frequently.jsx";


function AllCourses () {
  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();
  
  useEffect (() => {
    dispatch(getProducts())
  },[dispatch])
   
    return (
        <section id='allcourses' className='  md: py-16 dark:bg-black  overflow-hidden ' >

    {/* Courses image */}
      <div className=' flex flex-col-reverse gap-y-4 md:grid md:grid-cols-2 justify-center items-center   bg-[#D9A14C]  '>
       
      <div className="flex flex-col gap-y-6 md:gap-y-10 px-4 py-4 lg:pl-10">
        <p className="text-2xl md:text-3xl lg:text-4xl font-poppins leading-1 text-white">
          Learn today’s most in-demand skills with our free online courses</p>
          <div className="flex  gap-x-1 md:gap-x-4">
            <Link  to="courses" offset={-70}>
            <button className="px-1 md:px-4 py-2 bg-[#7862E4] rounded-md text-md md:text-xl text-white
             hover:text-[#7862E4] hover:bg-white" >Explore Courses</button>
            </Link>
            <Link to="recommendation" offset={-20}>
            <button className="px-1 md:px-3 py-2  rounded-md border-2 border-white text-white  text-md md:text-xl 
             hover:bg-[#7862E4]">Show Recommendation</button></Link>

          </div>
         </div>
      <div>
        <img src={learn1} alt=""  className=""/>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] px-4 py-6  lg:py-10  lg:px-16 gap-y-4 dark:bg-neutral-800 bg-[#F8FBFF]">
        <div className="flex flex-col gap-y-1">
          <img src={certificate} alt="" className="h-60 md:h-80"/>
          <p className="flex items-center font-poppins text-sm dark:text-white">
          <IoCheckmarkCircle className="text-[#1179EF] text-[20px]" />Completion certificate awarded on every course completion</p>

          </div>

        <div className="flex flex-col items-center md:px-4 gap-y-6 lg:gap-y-8">
          <p className="font-poppins text-xl lg:text-2xl text-[#7862E4]">
            Courses focused on building strong foundational skills for career growth</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-8">
            {certification.map ((d) => (
              <div>
          <p className="flex items-center dark:text-white font-poppins gap-x-2 text-lg">
          <IoIosCheckmarkCircleOutline  className="text-[#1179EF] text-[20px]" />{d.title}</p>
            <p className="dark:text-white">{d.topic}</p>
            </div>
            ))}
            
          </div>
        </div>
      </div>

      <Recorded products={products}  />
       <Card products={products}   />

       <div className="mx-4 md:mx-20 lg:mx-40  my-3 md:my-5 border shadow-md rounded-2xl p-2">
        <div className="flex flex-col gap-y-2 bg-[#FDF4DE] rounded-lg p-4">
        <p className="text-2xl md:text-3xl font-poppins">Get your team a <span className="text-[#7862E4]">digital skilling library</span></p>
        <p className="ttext-xl md:ext-2xl font-poppins">with unlimited access to live classes</p>
       <div>
        <button className="px-4 py-2 bg-[#7862E4] text-white border rounded-md hover:border-[#7862E4] hover:bg-white hover:text-[#7862E4]">Know More</button>
        </div>
        </div>
        
       </div>
       <Instructor  />

       <Frequently />
       </section>
    )
}

export default AllCourses;

const certification = [
  {
    title: 'Learn from Industry Experts',
    topic: 'Comprehensive self-paced courses created with top practitioners'
  },
  {
    title: 'Free Resources',
    topic: 'Free guides on career paths, salaries, interview tips, and more'
  },
  {
    title: 'Skill-based Learning',
    topic: "600+ job-ready skills on offer in today's most in-demand domains"
  },
  {
    title: 'Learn Anytime, Anywhere',
    topic: 'Learn while working or studying from any place, across any device'
  }
]