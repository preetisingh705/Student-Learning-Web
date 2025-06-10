import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

function Card ({products}) {

  const [ text,setText] = useState('');  
  

  const getText  = (text) => {
     setText(text);

  }
  const [items, setItems] = useState(products);

     const filterItem = (cate) => {
       const updatedItems = products.filter((currentItem) => {
         return currentItem.category === cate;
       });
       setItems(updatedItems);
     };

    return (
      <div id="courses" className="px-4 md:px-16 py-4 md:py-10 flex flex-col  gap-y-6 md:gap-y-10 bg-[#F8FBFF] dark:bg-neutral-800">
        <p className="font-poppins text-2xl md:text-3xl lg:text-4xl text-center dark:text-white">Explore Online  <span className="text-[#7862E4]"> Courses</span></p>

        <div className=" flex flex-col  gap-y-4 justify-center items-center ">

      
           <div className=" flex flex-col w-[600px] ">
            <div className="flex justify-center items-center border bg-white px-3 gap-x-3 rounded-3xl border-[#7862E4]">
        <FcSearch className=" text-[20px] w-6 h-6  "/>
        <input type="type" className="font-poppins w-full  py-2 bg-transparent placeholder:text-black text-black placeholder:text-sm lg:placeholder:text-lg text-lg border border-none  transition duration-300 ease focus:outline-none"
         placeholder="Find Your All Courses here ...." 
         onChange={(e) => getText(e.target.value)} 
         />
         </div>
           {
            text && 
             <div className=" bg-white mt-3 flex flex-col py-4 gap-y-2 ">
               {
                products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                  <div className="px-4 ">
                    <Link to={`/product/${product.id}`}>
                    {product.title.longTitle}
                    </Link>
                  </div>
                ))
               }
             </div>
            
            
           }
        </div>
       
      

       

        <div className="grid grid-cols-3 md:flex  md:flex-row  gap-4 md:gap-x-10 ">
         
          <div className="px-2 md:px-4 dark:text-white text-center  py-2 border text-md md:text-lg 
          font-poppins border-[#7862E4] hover:bg-[#7862E4] hover:text-white rounded-full"  
          onClick={() => setItems(products)}>
          <p className="cursor-pointer">All Courses</p>
          </div>
          <div className="px-2 md:px-4 dark:text-white text-center  py-2 border text-md md:text-lg 
          font-poppins border-[#7862E4] hover:bg-[#7862E4] hover:text-white rounded-full" onClick={() => filterItem('java')}>
          <p className="cursor-pointer" >Java Courses</p>
          </div>
          <div className="px-2 md:px-4 dark:text-white text-center  py-2 border text-md md:text-lg 
          font-poppins border-[#7862E4] hover:bg-[#7862E4] hover:text-white rounded-full" onClick={() => filterItem('web')}> 
          <p className="cursor-pointer" >Web Development</p>
          </div>
          <div className="px-2 md:px-4 dark:text-white text-center  py-2 border text-md md:text-lg 
          font-poppins border-[#7862E4] hover:bg-[#7862E4] hover:text-white rounded-full"
           onClick={() => filterItem('dsa')}> 
          <p className="cursor-pointer" >Data Structure</p>
          </div>
      
        </div>

        </div>

      
        
        < div className='grid  grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-x-10  font-poppins '>

           {items.map ( (course,index) => (

           <Link  to={`/product/${course.id}` } >
             <div className="bg-white hover:scale-105 h-full dark:bg-black dark:border-[1px] dark:border-neutral-400  rounded-xl  text-black p-4">
            <div className=" md: border-slate-500 flex  justify-center  items-center  bg-slate-400 rounded-xl  ">
        <img src={course.url} alt="img" className=" center rounded-xl" />
            </div>

              <div className="flex  flex-col justify-start  gap-y-4">
                      <p className="text-xl font-poppins dark:text-white">{course.title.longTitle}</p>
                    <p className="sm:text-justify flex justify-center items-center font-semibold dark:text-white">Special Discount Prices</p>

                  <div className="flex gap-x-2 md:gap-x-8 lg:gap-x-0 xl:gap-x-8 justify-center items-center">
   <del className="dark:text-white">₹ {course.price.mrp}</del>
   <p className="font-bold text-xl dark:text-white">₹ {course.price.cost}</p>
   <div className="bg-green-500 text-white rounded-xl px-2 flex justify-center items-center">{course.price.discount}off
 </div>
                 </div>
             <div className="flex flex-row gap-2 items-center justify-center">
              <button className=" text-[#7862e4] text-lg px-3 py-1 rounded-lg" ><u>View More</u></button>
                <button className="bg-[#7862e4] text-white text-lg px-3 py-1 rounded-lg font-Arial hover:border
                hover:border-[#7862e4] hover:text-[#7862e4] hover:bg-white">Buy Now</button>

              </div>
           </div>
            </div>
              </Link>

          ))}
     
        </div>

        </div>
    )
}

export default Card;

