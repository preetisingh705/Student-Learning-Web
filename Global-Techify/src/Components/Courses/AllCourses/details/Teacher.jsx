import teacher from "../../../../assets/Allcourses/mentor11.jpg";
import logo from "../../../../assets/Header/logo.svg";
import sde from "../../../../assets/Allcourses/sde.png";
import google from "../../../../assets/Allcourses/googlelogo.png"
function Teacher () {
    return (
     
        <div className="flex flex-col justify-center items-center md:px-20 gap-y-5 p-4 ">
          <div className=" ">
         <img src={teacher} alt="" className="h-32 w-32 md:h-56 md:w-56  rounded-full" />
          </div>
          <div className="flex flex-col gap-y-1 dark:text-white"> 
            <p className="text-center font-poppins text-[#5d39e2]">TAUGHT BY</p>
          <p className="text-xl font-poppins">BHAVYA DUBEY</p>
          </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-6 lg:gap-x-28">
           <div className="p-4 flex flex-col justify-center items-center gap-1 ">
            <img src={logo} alt="" className="h-14" />
            <p className="text-xl dark:text-white">Founder, Tech Shiksha</p>
           </div>
           <div className="p-4 flex flex-col justify-center items-center gap-1 ">
            <img src={sde} alt="" className="h-14" />
            <p className="text-xl dark:text-white">IIT'an ,Software Engineer</p>
           </div>
           <div className="p-4 flex flex-col justify-center items-center gap-1">
            <img src={google} alt="" className="h-14" />
            <p className="text-xl dark:text-white">Google Startup , India</p>
           </div>
         </div>

     
      </div>
     
    )
}

export default Teacher;