import { BiSolidCameraMovie } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import { TbSettingsCode } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { LuBug } from "react-icons/lu";
import { RiLightbulbFlashFill } from "react-icons/ri";


function Whychoose ({product}) {
    return (
        <div className="p-4 md:px-20 md:py-10 bg-[#F4F3FF]  dark:bg-neutral-900">
        <div className="flex flex-col justify-center items-center gap-y-3">
        <p className="font-poppins text-2xl text-[#785fd3]">WHY {product.Heading} ?</p>
        <p className="dark:text-white text-lg md:text-xl text-gray-700 font-poppins text-cneter">
          {product.why}</p>
        </div>
       

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 justify-center  items-center p-10 mt-5">

      <div style={{borderColor: `${product.box1.color}`}} className="flex flex-col h-full gap-y-8 justify-center items-center
       bg-white px-8 py-10 rounded-lg border-b-4  dark:border dark:bg-neutral-900 dark:border-[rgba(255,255,255,0.10)]   shadow-md shadow-gray-400 backdrop-blur-lg ">
        <div  className=" bg-[#FBEAC3]  p-3.5 rounded-full ">
        <IoCodeSlash  style={{color: `${product.box1.color}`}} className="text-[35px]" />
        </div>

        <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="font-poppins text-xl dark:text-white" >{product.box1.heading}</p>
        <p className="font-poppins text-md text-center text-gray-600 dark:text-white">
          {product.box1.desc}</p>
        </div>
      </div>
      
      <div style={{borderColor: `${product.box2.color}`}} className="flex flex-col gap-y-8 h-full justify-center items-center  bg-white px-8 py-10 rounded-lg border-b-4  dark:border dark:bg-neutral-900 dark:border-[rgba(255,255,255,0.10)]   shadow-md shadow-gray-400 backdrop-blur-lg ">
        <div  className=" bg-[#EAF6DA]  p-3.5 rounded-full ">
        <TbSettingsCode  style={{color: `${product.box2.color}`}} className="text-[35px]" />
        </div>

        <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="font-poppins text-xl dark:text-white" >{product.box2.heading}</p>
        <p className="font-poppins text-md text-center text-gray-600 dark:text-white">
          {product.box2.desc}</p>
        </div>
      </div>

      <div style={{borderColor: `${product.box3.color}`}} className="flex flex-col h-full gap-y-8 justify-center items-center bg-white px-8 py-10 rounded-lg border-b-4  dark:border dark:bg-neutral-900 dark:border-[rgba(255,255,255,0.10)]   shadow-md shadow-gray-400 backdrop-blur-lg ">
        <div className="bg-[#9CF0FF]  p-3.5 rounded-full ">
         <FaReact  style={{color: `${product.box3.color}`}}  className="text-[35px]" />
        </div>

        <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="font-poppins text-xl dark:text-white" >{product.box3.heading}</p>
        <p className="font-poppins text-md text-center text-gray-600 dark:text-white">
          {product.box3.desc}</p>
        </div>
      </div>

     

      <div style={{borderColor: `${product.box4.color}`}} className="flex flex-col h-full gap-y-8 justify-center items-center bg-white px-8 py-10 rounded-lg border-b-4  dark:border dark:bg-neutral-900 dark:border-[rgba(255,255,255,0.10)]   shadow-md shadow-gray-400 backdrop-blur-lg ">
        <div  className=" bg-[#FCDBCB]  p-3.5 rounded-full ">
        <RiLightbulbFlashFill  style={{color: `${product.box4.color}`}} className="text-[35px]" />
        </div>

        <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="font-poppins text-xl dark:text-white" >{product.box4.heading}</p>
        <p className="font-poppins text-md text-center text-gray-600 dark:text-white">
          {product.box4.desc}</p>
        </div>
      </div>

      <div style={{borderColor: `${product.box5.color}`}} className="flex flex-col h-full gap-y-8 justify-center items-center bg-white px-8 py-10 rounded-lg border-b-4  dark:border dark:bg-neutral-900 dark:border-[rgba(255,255,255,0.10)]   shadow-md shadow-gray-400 backdrop-blur-lg ">
        <div  className="bg-[#FBB6B1]  p-3.5 rounded-full ">
        <LuBug style={{color: `${product.box5.color}`}} className="text-[35px]" />
        </div>

        <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="font-poppins text-xl dark:text-white" >{product.box5.heading}</p>
        <p className="font-poppins text-md text-center text-gray-600 dark:text-white">
          {product.box5.desc}</p>
        </div>
      </div>
     

    </div>
    </div>

    )
}

export default Whychoose;