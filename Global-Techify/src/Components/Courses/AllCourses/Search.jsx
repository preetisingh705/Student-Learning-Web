import {React , useState} from "react";
import { TextField } from "@mui/material";
// import List from "./List";
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";



function Search () {
    return (
       
        <div className=" flex gap-3 md:gap-8 ">
        
       <div className="relative flex rounded-3xl w-full bg-white   max-w-lg min-w-[200px] lg:w-full ">
       <FcSearch class="absolute text-[20px] w-6 h-6 top-2.5 left-2.5 "/>
       <input type="type" class="w-full pl-10 md:pl-14  py-2 bg-transparent placeholder:text-black text-black placeholder:text-sm lg:placeholder:text-lg text-lg border border-none  transition duration-300 ease focus:outline-none"
        placeholder="Find Your All Courses here ...." />
       </div>

       <button className="flex justify-center items-center ">
       <IoFilter className="text-4xl dark:text-white" />
       </button>

      </div>
    )
}

export default Search;