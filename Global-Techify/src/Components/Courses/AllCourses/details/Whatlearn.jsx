
import { GoGoal } from "react-icons/go";

function Whatlearn ({product}) {
    return (
        <div className="flex flex-col gap-y-6 md:gap-y-10">
             <div className="flex flex-col gap-y-4 justify-center items-center">
        <p className=" font-poppins text-3xl text-[#785fd3]" >What You'll Learn ?</p>
      <p className="text-xl font-poppins dark:text-white text-center">
        Explore the comprehensive learning experience awaiting you on this course detail page. 
        From fundamental concepts to advanced techniques, discover what you will learn and how it will propel 
        your skills to new heights.</p>
      </div>

      <div class="w-full dark:text-white p-5 grid grid-cols-1 sm:grid-cols-2 place-content-start
       place-items-start border-[rgba(189,189,189,0.1)] 
      dark:border-[rgba(255,255,255,0.10)] border rounded-lg bg-[#F4F3FF] dark:bg-neutral-800 gap-x-4 gap-y-8 sm:place-content-center">
        <div class="flex flex-row gap-x-3 items-start">
        <GoGoal className="text-[25px] text-[#7977e2]"/>

            <p class="text-lg font-poppins">{product.learn.learn1}</p>
            </div>
            <div class="flex flex-row gap-x-3 items-start">
        <GoGoal className="text-[25px] text-[#7977e2]"/>

            <p class="text-lg font-poppins">{product.learn.learn2}</p>
            </div><div class="flex flex-row gap-x-3 items-start">
        <GoGoal className="text-[25px] text-[#7977e2]"/>

            <p class="text-lg font-poppins">{product.learn.learn3}</p>
            </div><div class="flex flex-row gap-x-3 items-start">
        <GoGoal className="text-[25px] text-[#7977e2]"/>

            <p class="text-lg font-poppins">{product.learn.learn4}</p>
            </div><div class="flex flex-row gap-x-3 items-start">
        <GoGoal className="text-[25px] text-[#7977e2]"/>

            <p class="text-lg font-poppins">{product.learn.learn5}</p>
            </div><div class="flex flex-row gap-x-3 items-start">
        <GoGoal className="text-[25px] text-[#7977e2]"/>

            <p class="text-lg font-poppins">{product.learn.learn6}</p>
            </div><div class="flex flex-row gap-x-3 items-start">
        <GoGoal className="text-[25px] text-[#7977e2]"/>

            <p class="text-lg font-poppins">{product.learn.learn7}</p>
            </div><div class="flex flex-row gap-x-3 items-start">
        <GoGoal className="text-[25px] text-[#7977e2]"/>

            <p class="text-lg font-poppins">{product.learn.learn8}</p>
            </div><div class="flex flex-row gap-x-3 items-start">
        <GoGoal className="text-[25px] text-[#7977e2]"/>

            <p class="text-lg font-poppins">{product.learn.learn9}</p>
            </div>

      </div>

        </div>
    )
}

export default Whatlearn;