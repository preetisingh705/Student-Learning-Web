import { useState , useEffect} from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-router-dom';
import { CiVideoOn } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { IoStar } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import Teacher from "./Teacher";
import MyAccordion from "./Accordion";
import Whatlearn from "./Whatlearn";
import Aboutcourse from "./Aboutcourse";
import Whychoose from "./Whychoose";
import Frequently from "./frequently";
import { useNavigate } from "react-router-dom";
import {addToCart} from '../../../../redux/action/cartAction'
// database
import { useDispatch , useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../../../redux/action/coursesAction";

import { payUsingPaytm } from "../../../../services/api";
import { post } from "../../../../utils/paytm";
function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } =useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id)
    dispatch(getProductDetails(id))

  },[dispatch, id, product , loading])


  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const addItemToCart = ()=>{
    dispatch(addToCart(id,quantity));
    navigate('/cart');
  }

  const buyNow = async() => {
    let response = await payUsingPaytm ({ amount: 500, email: 'codeforinterview01@gmail.com'});
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
  }
 
  
    return (
      <div>

      {
        product && Object.keys(product).length &&

    <section id='detail'  className='mentor   dark:bg-black flex flex-col gap-y-8   overflow-hidden  ' >
       
    {/* Detail of course */}
  

      <div className=" mt-8 bg-[#F4F3FF] dark:bg-neutral-900 flex flex-col gap-y-4 h-full p-4  md:px-16 md:py-10">

      <div className="flex-col flex md:flex-row gap-x-2 text-white  font-poppins">       
    <Link  to="/" >
    <div className="flex justify-center items-center"> <u className="text-[#785fd3] text-sm md:text-xl">Home</u>   
     <MdOutlineKeyboardArrowRight  className="md:text-[25px] text-black dark:text-white"/>
     </div>
    </Link>
     <Link  to="/allcourses" >
     <div className="flex justify-center items-center"><u className="text-[#785fd3] text-sm md:text-xl">Courses</u>
      <MdOutlineKeyboardArrowRight className="md:text-[25px] text-black dark:text-white" /> 
      </div>
      </Link>
      <p className="text-[#785fd3] text-sm md:text-xl"><u>{product.title.longTitle}</u> </p>
      </div>

     <div className=" grid lg:grid-cols-2 grid-cols-1  ">

     <div className="flex flex-col gap-3 gap-y-4 md:gap-y-8  dark:text-white">

     <div className="text-lg md:text-xl font-poppins">
       <p>Welcome to <strong className="text-[#785fd3]">{product.title.shortTitle}</strong> Family</p>
       </div>

     <div className="flex flex-col gap-y-4">
     <p className="text-2xl lg:text-3xl font-poppins text-[#785fd3] ">{product.title.longTitle}</p>
     <div className="flex items-center gap-4 text-base font-medium flex-wrap">
       <div className="flex items-center gap-2">
       <CiVideoOn className="text-[25px] text-green-500" />
         <p className="text-green-500 text-lg">{product.lecture}+ Lectures</p>
       </div>
       <div className="h-3 w-[1px] bg-gray-500 dark:bg-neutral-8">
       </div>
         <div className="flex items-center gap-2">
         <GrLanguage className="text-[20px] text-[#7862e4]" />
         <p className="text-[#7862e4] text-lg">Hindi | English</p>
         </div>
         <div className="h-3 w-[1px] bg-gray-500 dark:bg-neutral-8">
           </div>
           <div className="flex items-center gap-2">
             <p class="text-yellow-400 text-lg ">{product.rating}</p>
             <div class="flex gap-1 text-yellow-400 text-[20px]">
             <IoStar />
             <IoStar />
             <IoStar />
             <IoStar />
             <FaStarHalf />
            </div>
         </div>
     </div>
     </div>

     <div className="flex  gap-x-3 font-poppins flex-wrap items-center dark:text-white">
     <span className=" text-2xl md:text-3xl"> Price ₹{product.price.cost}</span>
     <span className="text-shark-400 line-through text-xl md:text-2xl">₹{product.price.mrp}</span>
     <p className="text-[15px] bg-green-500 px-2 py-1 rounded-full">{product.price.discount} Off</p>
     </div>

     <div className=" flex gap-x-8 font-poppins">

      <button className="border-[#f17b66] border-2 px-3 py-2 text-xl rounded-md flex gap-2" 
      onClick={() =>addItemToCart()}>
       <FaHeart className="text-[#f17b66] text-[25px]" />       Favourite</button>

      <button className="bg-[#6a54dd] px-3 py-2 text-2xl text-white rounded-md" onClick={() =>buyNow()}> Enroll Now </button>
     </div>
    
     </div>

         <div class="flex justify-center items-center ">

           <div class=" rounded-2xl p-2 md:p-4 lg:translate-y-0 translate-y-10 flex flex-col gap-y-4 bg-white 
           dark:bg-neutral-800 dark:border-[rgba(255,255,255,0.10)] border-[rgba(189,189,189,0.1)] border 
           shadow-md  backdrop-blur-md ">
             
              
                 <div><img src={product.url} className="h-40 w-full rounded-md" alt="" /></div>
                 <div class="flex text-3xl gap-x-3 font-poppins flex-wrap items-center dark:text-white">
                   <span class="text-brand">₹ {product.price.cost} </span>
                   <span class="text-shark-400 line-through text-2xl">₹ {product.price.mrp}</span>
                  </div>
                   <div class="dark:text-white">
                     <p class="font-semibold text-xl mb-4">This Course Includes :</p>
                     <div class="flex flex-col gap-3">
                     <p class="flex gap-2 items-start">
                        <SiTicktick />
                         <span>{product.includeds.tag1}</span>
                       </p>
                       <p class="flex gap-2 items-start">
                        <SiTicktick />
                         <span>{product.includeds.tag2}</span>
                       </p>
                       <p class="flex gap-2 items-start">
                        <SiTicktick />
                         <span>{product.includeds.tag3}</span>
                       </p>
                       <p class="flex gap-2 items-start">
                        <SiTicktick />
                         <span>{product.includeds.tag4}</span>
                       </p>
                    
                    <a target="_blank" class="w-full text-center p-3 rounded-md text-white  text-xl bg-[#7862E4] 
                    hover:border-[#7862E4] border hover:bg-white hover:text-[#7862E4]" onClick={() => buyNow()}>
                      Buy Now</a>
                    </div>
              
              </div>

           </div>
         </div>
     </div>

   
   
     </div>
      <div className="p-4 md:px-20 md:py-2 flex flex-col gap-y-6 md:gap-y-10">
      {/* About Course */}
      <Aboutcourse product={product} />

      {/* What learn */}
        <Whatlearn product={product} />

      {/* Syllabus of course */}
      <MyAccordion product={product} />
     </div>

        {/* Why Choose the course */}
       <Whychoose product={product} />
       
     
     

   

    

       {/* About The teacher */}
          <Teacher />

          {/* Frequent ask question */}

          <Frequently />

    </section>
    
    }
    </div>

        
    );
}

export default DetailView;

