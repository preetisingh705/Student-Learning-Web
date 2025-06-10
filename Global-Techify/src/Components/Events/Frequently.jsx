import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion } from '@mui/material';


function Frequently () {
    return (
        
        <div className='flex flex-col justify-center items-center py-10 md:py-16 lg:py-20 gap-y-8  md:gap-y-16'>
            <div className='flex flex-col justify-center items-center text-[#785fd3]'>
                <p className='text-xl md:text-3xl font-poppins font-bold'>FRQUENTLY ASKED QUESTIONS</p></div>
            <div className='px-8 md:px-20 lg:px-28'>
        {data.map ((d) => (
            <Accordion className='w-full p-4'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='text-lg text-black font-bold' >
          {d.title}
        </AccordionSummary>

        <AccordionDetails className='flex flex-col text-lg font font-poppins bg-slate-400 rounded-md'>
          {...d.detail} 
        </AccordionDetails>
       
      </Accordion>
        ))}
        </div>
      
     
     
    </div>
    )
}

export default Frequently;

const data = [
    {
      title:`I don't know anything about Coding, is this batch good for me?`,
      detail: 'Yes, this batch will cover all important concepts from basic till advanced. So, there is no need to know anything about coding beforehand.'
    
    },
    {
        title :'Can I enrol as a working professional?',
        detail: `Yes, the batch is curated to help you become a web developer with alternate day schedule, you'll be able to manage with the pace even as a working professional.`

      },
      {
        title: `Do I need to be a Computer Science student to take up this course?`,
        detail: `Anyone, from any background or field of study, can take up this batch and learn Full Stack Web Development.`
      },{
        title: `I just completed 12th and I want to start learning coding, can I take it?`,
        detail: `Yes, you are eligible to enrol as we will cover everything from basics to advanced. It is always better to start as early as possible. It will give you a good head start and ample time to get practical experience. `
      },
      {
        title: `Can I do this batch with my college classes?`,
        detail: `Yes, it is a self-paced batch and can be done along with college classes.
`
      },
      {
        title: `Is the batch in Hindi or English?`,
        detail: `The batch is taught in Hinglish (a mix of Hindi & English). `
      },
      {
        title: `What is the batch duration?`,
        detail: `The batch duration is almost 4.5 months.`
      },
      {
        title: `Will there be a Certificate of completion?`,
        detail: `Yes, you will get a certificate after finishing the batch.
`
      },
      {
        title: `Is there a batch schedule? `,
        detail: `Yes, the course will have many minor & major projects that will help to strengthen your concepts and you can mention in your resume/portfolio. 
`
      },
      {
        title: `How will I resolve my doubts?`,
        detail: `We always encourage our students to be self-sufficient in solving their problems. We'll also add you in a community with your fellow batchmates where you can interact with them & help each other. Additionally, there will be Teaching Assistants (TAs) for doubt assistance.`
      },
      {
        title: `Will there be LIVE classes?`,
        detail: `We always encourage our students to be self-sufficient in solving their problems. We'll also add you in a community with your fellow batchmates where you can interact with them & help each other. Additionally, there will be Teaching Assistants (TAs) for doubt assistance.`
      },
      {
        title: `What are the class timings?`,
        detail: `The lectures will be in recorded format and uploaded according to schedule(alternate days). The timings for the Live sessions might vary which will be conveyed to students in advance.`
      }
      ,
      {
        title: `Where will I find my batch after purchase?`,
      detail : `You will find your batch in the My Batch section. Please note, the lectures will be visible after the batch starts on 15th Feb, 2024.`
    }
      ,

      
      
      
      
      
  ]