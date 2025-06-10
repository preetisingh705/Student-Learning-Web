        import Slider from "react-slick";
        import "slick-carousel/slick/slick.css";
        import "slick-carousel/slick/slick-theme.css";
        import data from './data'
        import { Divider } from '@mui/material';
        import "./recorded.css";  
        import {Link } from "react-router-dom"     
      
function Recorded ({products} ) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow:3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear",
        responsive: [
    
          {
            breakpoint: 1024,
            settings:{
              slidesToShow:2,
            slidesToScroll: 2,
            dots: false,
            infinite: true,
            arrows:false
            }
          },
          {
            breakpoint: 768,
            settings:{
              slidesToShow:2,
            slidesToScroll: 2,
            dots: true,
            infinite: true,
            
            }
          },
          {
            breakpoint: 600,
            settings:{
              slidesToShow:1,
            slidesToScroll: 1,
            arrows: false
            
            }
          },
          {
            breakpoint:480,
            settings:{
            slidesToShow:1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots:true
            
            }
          },
        
        ]
      };
      
    return (
      <div id="recommendation"  className="px-4 md:px-16 py-8 lg:py-20">

        <div className="flex justify-center items-center gap-x-3 font-poppins text-2xl md:text-3xl lg:text-4xl">
    <p className="dark:text-white">Recommended </p><p className="text-blue-900">Courses</p>
        </div>


    <div className="w-full h-full  mt-4 md:mt-8 ">
      <Slider {...settings}>
        {products.map ((record) => (
           <Link  to={`/product/${record.id}` } >
         <div  className="bg-white shadow-md hover:scale-105  dark:bg-black p-4 dark:border-[1px] 
         dark:border-[#8a7feb] dark:text-white text-black rounded-xl ">
         <div className=" flex justify-center items-center shadow-b-xl  rounded-xl  ">
          <img src={record.url} alt="img" className="object-cover ease-out  h-44 w-full center rounded-xl " />
         </div>
        <div className="flex flex-col  gap-2 m-2  font-poppins">
          <p className="text-xl font-poppins">{record.title.shortTitle}</p>
          <Divider className="dark:bg-white" />
           <div className="flex gap-x-6 items-center justify-start">
           <p className="font-poppins text-xl ">₹ {record.price.cost}</p>
           <del >₹ {record.price.mrp}</del>
           <button className="bg-green-500 px-3 py-1 rounded-md">{record.price.discount}</button>
           </div>
     

        </div>
         </div>
         </Link>
        ))
        }
 
      </Slider>
    
    </div>


        </div>
    );
}

export default Recorded;