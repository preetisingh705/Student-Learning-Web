// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import data from './data';
import {Link} from "react-router-dom"


function CenterMode() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false,
    responsive: [

      {
        breakpoint: 1024,
        settings:{
        slidesToShow:2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,
        
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
        arrows: false,
        dots:true
        
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

    <div className="w-full  ">
      <Slider {...settings}>
        {data.map((d) => (
         <div className="bg-white p-2 dark:text-white dark:bg-neutral-800 border dark:border-neutral-500  text-black rounded-xl ">
         <div className=" flex justify-center items-center shadow-b-xl  rounded-xl  ">
          <img src={d.img} alt="img" className="h-40 w-full center rounded-xl " />
         </div>
        <div className="flex flex-col justify-center items-center gap-2 m-2  font-poppins">
          <p className="text-2xl font-bold">{d.titel}</p>
          <p className="text-center ">{d.detail}</p>
          
        </div>
         </div>
        ))}
 
      </Slider>
    
    </div>
  );
}

export default CenterMode;

