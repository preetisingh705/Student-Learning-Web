import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import * as React from 'react';
import {  Menu} from '@mui/material';
import { FaAngleRight } from "react-icons/fa6";
import { Component1 , Component2 , Component3, Component4 } from "./Component";




function Allcourses () {
    const [icon,setIcon] = useState(<FaAngleDown className=' text-xl text-[#563AE0]' />)
    const [open, setOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(0);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
        setIcon( <FaAngleUp className=' text-xl text-[#563AE0]' />)
    }

    const handleClose = () => {
        setOpen(false);
        setIcon( <FaAngleDown className=' text-xl text-[#563AE0]' />)

    }

    const Render = ({index}) => {
      switch (index) {
        case 0: return <Component1 />
        break;
        case 1: return <Component2 />
        break;
        case 2: return <Component3 />
        break;
        case 3: return <Component4 />
        break;
        default:
          break;
      }
    }

    return(
        <div className='hidden md:flex  '>

        <button onClick={handleClick}  className=" border border-gray-400 p-[8px] 
             rounded-lg flex items-center gap-[5px] justify-center" >
                <span class="text-[#535353] font-bold text-xl">All Courses</span><span>
                {icon}
                </span>
         </button>

          <Menu
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose} 
          className="mt-2 "
        >
            <div className="flex flex-row  ">
             <div className="flex flex-col  ">
             {data.map((d , index) => (      
              <div className= { isSelected == index ? "bg-[#d3d0e9]" : "bg-white" }   onClick={() => setIsSelected(index)}>
              <div className="p-4 flex items-center  rounded-md justify-between gap-4 "  >
                <div className="text-[16px] font-[600] leading-[24px] text-[#1B2124]">{d.titel} </div>
               <div> <FaAngleRight/> </div>
            </div>
            </div>
             ))}
            
           
            </div>

            <Render className=" bg-[#d3d0e9]" index={isSelected} />      
            

        
            </div>

       
        </Menu>
       </div>
    )
}

export default Allcourses;

const data = [
    {
      titel:`Web Development`,
    },
    {
        titel:`Java Courses`,
      },
      {
        titel:`Programming Languages`,
      },
      {
        titel:`Data Structure And Algorithms`,
      },
      
]