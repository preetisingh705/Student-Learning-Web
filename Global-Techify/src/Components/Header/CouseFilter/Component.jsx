const Web = [
  {
    title : 'HTML5 , CSS3'

  },
  {
    title : 'Complete JavaScript'
    
  },
  {
    title : 'ReactJS'
  },
  {
    title : 'NodeJS , ExpressJS'
    
  },
  {
    title : 'MySql , MongoDB'
    
  }
]

const Java = [
  {
    title : 'Basic Java'

  },
  {
    title : ' Advance Java'
    
  },
  {
    title : 'Spring Boot'
  },
  
]

const language = [
  {
    title : ' C Language'

  },
  {
    title : 'C++ Language'
    
  },
  {
    title : 'Pyhton Programming'
  },
  
]

const Dsa = [
  {
    title : 'DSA C++'

  },
  {
    title : 'DSA Java'
    
  },
  {
    title : 'DSA Pyhton'
  },
  {
    title : 'DSA JavaScript'
  },
  
  
]





export function Component1 () {
    return(
        <div class="flex flex-col gap-2 justify-start  bg-[#d3d0e9] p-4 w-[360px]">
          {Web.map ((name) => (
        <div class=" flex items-center  rounded-md justify-between gap-2.5 p-3 bg-white  border-[1px] border-solid border-[#9d95dd] w-[200px] shadow-md">
              {name.title}
            </div>
          ))}
        </div>
    )
}
export function Component2 () {
    return(
        <div class="flex flex-col gap-2 justify-start    bg-[#d3d0e9] p-4 w-[360px]">
         {Java.map ((name) => (
        <div class=" flex items-center  rounded-md justify-between gap-2.5 p-3 bg-white  border-[1px] border-solid border-[#9d95dd] w-[200px] shadow-md">
              {name.title}
            </div>
          ))}
      </div>
     
    )
}
export function Component3 () {
    return(
      <div class="flex flex-col gap-2 justify-start    bg-[#d3d0e9] p-4 w-[360px]">
      {language.map ((name) => (
     <div class=" flex items-center  rounded-md justify-between gap-2.5 p-3 bg-white  border-[1px] border-solid border-[#9d95dd] w-[200px] shadow-md">
           {name.title}
         </div>
       ))}
   </div>
    )
}
export function Component4 () {
    return(
      <div class="flex flex-col gap-2 justify-start    bg-[#d3d0e9] p-4 w-[360px]">
      {Dsa.map ((name) => (
     <div class=" flex items-center  rounded-md justify-between gap-2.5 p-3 bg-white  border-[1px] border-solid border-[#9d95dd] w-[200px] shadow-md">
           {name.title}
         </div>
       ))}
   </div>
    )
}