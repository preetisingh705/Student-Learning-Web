import teacher from "../../../assets/Mentor/mentor11.jpg"
import teacher1 from "../../../assets/Mentor/mentor4.png"
import teacher2 from "../../../assets/Mentor/mentor5.png"

function Instructor () {
    return (
        <div className="py-6 px-4 lg:px-16" >
         <div className="flex flex-col justify-center items-center gap-y-4">
            <p className="text-2xl md:text-3xl lg:text-4xl font-poppoins text-[#7862e4] ">Our Instructor</p>
            <p className="text-xl dark:text-white px-4 md:px-10 lg:px-20 xl:px-40 text-center">Discover brilliance in code with our expert instructors. Passionate mentors dedicated to fueling your coding journey at Global Techify.</p>
         </div>

         <div className="grid grid-cols-1  gap-y-4 md:grid-cols-3 md:px-4 lg:px-20 py-6   gap-x-6 dark:bg-black  bg-white ">

           <div className="flex flex-col p-2 shadow-md  rounded-md border">
           <div className="flex  justify-center items-center">
          <img src={teacher} className="h-60 w-full rounded-md" alt="" />          
            </div>
        <div className="flex flex-col ">
          
           <p className="text-2xl  font-poppins dark:text-white">Bhavya Dubey</p>
         <p className="font-poppins dark:text-white"> Software Developer </p>
          
            <p className=" font-poppins dark:text-white">
             
              Microsoft </p>

        </div>
           </div>
           <div className="flex flex-col p-2 shadow-md  rounded-md border">
           <div className="flex  justify-center items-center">
          <img src={teacher1} className="h-60 w-full rounded-md" alt="" />          
            </div>
        <div className="flex flex-col ">
           
           <p className="text-2xl  font-poppins dark:text-white">Aanand Dev</p>
         <p className="font-poppins dark:text-white"> Software Developer </p>
         <p className=" font-poppins dark:text-white">
             
            SDE-II at TCS </p>
           </div>

           

        
           </div>

           <div className="flex flex-col p-2 shadow-md  rounded-md border">
           <div className="flex  justify-center items-center">
          <img src={teacher2} className="h-60 w-full rounded-md" alt="" />          
            </div>
        <div className="flex flex-col ">
          
           <p className="text-2xl  font-poppins dark:text-white">Siya Singh</p>
         <p className="font-poppins dark:text-white"> Product Manager </p>
          
            <p className=" font-poppins dark:text-white">
             
              Resource Developer </p>

        </div>
           </div>
          

         </div>
        </div>
    );
}

export default Instructor;