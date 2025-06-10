import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function MyAccordion({product}) {

  return (
    <div className="flex flex-col justify-center items-center gap-y-4 md:gap-y-6 ">

    <p className="text-2xl lg:text-3xl font-poppins text-[#785fd3]">Course Module</p>
    <div className="">
    
        
            <Accordion className='w-full md:w-[600px] lg:w-[800px] '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='text-md md:text-lg text-black font-bold ' >
          {product.topic1}
        </AccordionSummary>

        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus1.detail1}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus1.detail2}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus1.detail3}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus1.detail4}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus1.detail5}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus1.detail6}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus1.detail7}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus1.detail8}
        </AccordionDetails>
            </Accordion>

            <Accordion className=' w-full md:w-[600px] lg:w-[800px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='text-md md:text-lg text-black font-bold ' >
          {product.topic2}
        </AccordionSummary>

        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus2.detail1}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus2.detail2}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus2.detail3}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus2.detail4}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus2.detail5}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus2.detail6}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus2.detail7}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus2.detail8}
        </AccordionDetails>
            </Accordion>

            <Accordion className='w-full md:w-[600px] lg:w-[800px] '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='text-md md:text-lg text-black font-bold ' >
          {product.topic3}
        </AccordionSummary>

        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus3.detail1}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus3.detail2}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus3.detail3}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus3.detail4}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus3.detail5}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus3.detail6}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>   
      {product.syllabus3.detail7}
        </AccordionDetails>
        <AccordionDetails className=' text-md  font-poppins bg-[#F4F3FF]'>
        {product.syllabus3.detail8}
        </AccordionDetails>
            </Accordion>
       
    </div>
    </div>
  );
}


