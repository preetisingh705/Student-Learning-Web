import { useState ,useEffect,useContext} from 'react';
import React from 'react';
import Logo from '../../assets/Header/logo.svg'
import {  Box,Drawer ,List, ListItem} from '@mui/material';
import Navbar from './NavBar';

import { FaChevronLeft } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";

import { FaLinkedin } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Profile from './Profile';
import { DataContext } from '../../Context/DataProvider';
import LoginDialog from '../Login/LoginDialog';
import { MdShoppingCart } from "react-icons/md";





function Header() {

  // change icon
const [icon,setIcon] = useState(<BsFillMoonStarsFill />)
const [visible,setVisible] = useState(false)
const changeIcon = () => {
  setVisible(!visible);
  setIcon(visible ? <BsFillMoonStarsFill/> : <HiSun />);
};

// Open drawer
const [on, setOn] = useState(false);
const handleOpen = ()=>{
setOn(true);
};
const handleClose = ()=>{
setOn(false);
};

//Dark Mode 
const [darkMode, setDarkMode] = useState();

useEffect(() => {
  const theme = localStorage.getItem("theme")
if( theme === "light") setDarkMode(true)
},[]);

useEffect(() => {
 if(darkMode){
  document.documentElement.classList.add('dark');
  localStorage.setItem("theme", "light")
 }else{
  document.documentElement.classList.remove('dark');
  localStorage.setItem("theme", "dark")
 }
},[darkMode]);


const [open, setOpen] = useState(false);

const { account, setAccount } = useContext(DataContext);

const openDialog = () => {
    setOpen(true);
}


  return (
    <header className="fixed top-0 z-50  overflow-hidden flex p-2 w-full leading-none border-b dark:bg-black bg-zinc-100 border-zinc-300 
    font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] ">
   
    {/* Header */}
   

     <div className='flex flex-1 justify-start font-poppins'>

      {/* Menu Bar Icon */}
     <div className=' w-[45px] flex  items-center  justify-start lg:hidden '>
        <div className='border-solid border-2 px-1'>
        <IoIosMenu className='text-[#563AE0] text-2xl md:text-3xl' onClick={handleOpen} />
        </div>
     </div>

        {/* Drawer */}
        
      <Drawer open={on} onClose={handleClose} >
      {
            account ? 
        <Box className='w-full '>
          <List>
          <ListItem className='m-2'>
          <Profile account={account} setAccount={setAccount}/> 

          <FaChevronLeft className='text-[20px] ml-4  ' onClick={handleClose} />
          </ListItem>
          <hr></hr>

         {/* <ListItem>
          
        {/* <button className=' flex font-bold text-xl   hover:none '> All Courses
           <FaAngleDown className=' mt-2 -rotate-90 text-xl text-[#563AE0]' />
        </button> 
         </ListItem> */}

      <ListItem className='flex flex-col mx-2'>
        <div className='hover:border-b-2  h-[30px] border-[#7862e4]  flex '>
          <Link to='/' >Home
          </Link>
          </div>
         <div className='hover:border-b-2  h-[30px] border-[#7862e4]  flex '>
          <Link to='/allcourses' >Courses
          </Link>
          </div>
          <div className='hover:border-b-2  h-[30px] border-[#7862e4]  flex '>
          <Link to='/allmentor'> Mentorship
          </Link>
          </div>
          <div className='hover:border-b-2  h-[30px] border-[#7862e4]  flex '>
          <Link to='/allevents'> Events
          </Link>
          </div>
         
          <div className='hover:border-b-2  h-[30px] border-[#7862e4] flex '>
          <Link to='/cart'> My Courses
          </Link>
          </div>
         
       
      </ListItem>
        
        <ListItem>
          <p>Follow Us On</p>
          <hr></hr>
        </ListItem>

       <ListItem>
            <div 
       className='text-[25px]  lg:mx-0 flex gap-x-4 lg:gap-x-10'>    
       <div className='bg-icon'>
        <a href="">
        <FaYoutube className='text-black dark:text-black' />
        </a>
         <span></span>
        </div>    
        <div className='bg-icon'>
        <a href="">
        <FaLinkedin className='text-black dark:text-black' />
        </a>
         <span></span>
        </div>
        <div className='bg-icon'>
        <a href="">
        <FaTelegramPlane  className='text-black dark:text-black ' />
        </a>
         <span></span>
        </div><div className='bg-icon'>
        <a href="">
        <FaTwitter className='text-black dark:text-black ' />
        </a>
         <span></span>
        </div>
            </div>
       </ListItem>
    
        </List>
        </Box>
        :
        <Box className='w-full '>
          <List>
          <ListItem className='m-2'>
          <button className='flex m-2 px-4 h-[40px] rounded-3xl items-center bg-[#9789dd]  text-white font-serif ' 
           onClick={()=> openDialog()}>Sign Up/Login</button>    

          <LoginDialog open={open} setOpen={setOpen} />

          <FaChevronLeft className='text-[20px] ml-4  ' onClick={handleClose} />
          </ListItem>
          <hr></hr>

         {/* <ListItem>
          
        <button className=' flex font-bold text-xl   hover:none '> All Courses
           <FaAngleDown className=' mt-2 -rotate-90 text-xl text-[#563AE0]' />
        </button>
         </ListItem> */}

      <ListItem className='flex flex-col mx-2 text-[#7862e4] text-lg dark:text-[#7862e4]   gap-y-3'>
        
        <div className='hover:border-b-2  h-[30px] border-[#7862e4]  flex '>
         <Link to='/'> Home
         </Link>
        </div>
         
        <div className='hover:border-b-2  h-[30px] border-[#7862e4]  flex '>
         <Link to='/allcourses'> Courses
         </Link>
        </div>
         
         <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/allevents'> Events
         </Link>
         </div>

         <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/allmentor' > Mentorship
         </Link>
         </div>

         <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/allservices' > Services
         </Link>
         </div>   
         <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/cart' >  <MdShoppingCart className='text-[30px]' />
         </Link>
         </div>   

       
      </ListItem>
        
        <ListItem>
          <p>Follow Us On</p>
          <hr></hr>
        </ListItem>

       <ListItem>
            <div 
       className='text-[25px]  lg:mx-0 flex gap-x-4 lg:gap-x-10'>    
       <div className='bg-icon'>
        <a href="">
        <FaYoutube className='text-black dark:text-black' />
        </a>
         <span></span>
        </div>    
        <div className='bg-icon'>
        <a href="">
        <FaLinkedin className='text-black dark:text-black' />
        </a>
         <span></span>
        </div>
        <div className='bg-icon'>
        <a href="">
        <FaTelegramPlane  className='text-black dark:text-black ' />
        </a>
         <span></span>
        </div><div className='bg-icon'>
        <a href="">
        <FaTwitter className='text-black dark:text-black ' />
        </a>
         <span></span>
        </div>
            </div>
       </ListItem>
    
        </List>
        </Box>
      }
      </Drawer>

       {/* Logo and Courses */}
       <Link to='/'>
      <div className=' flex items-center m-1 justify-center gap-x-4 px-2 '>
       <img src={Logo} className='w-[40px] lg:w-[40px] xl:w-[50px] bg-white rounded-full '  />
       <p className="w-[250px] text-xl lg:text-[22px] xl:text-3xl   font-bold text-[#7862e4] ">Tech Shiksha</p>
       </div>
       </Link>
     

       {/* Courses Filter Box */}
       {/* <Allcourses /> */}
       
     </div>

     

      {/* Large screen Navbar */}
       <Navbar />


       {/* Dark Mode Icon */}
       <div className='w-[45px] flex  justify-end  items-center'>
       <button className=' rounded-full border-solid border-[#7862e4] border-2 p-1 text-[#7862e4] text-xl ' onClick={() =>{changeIcon(); setDarkMode(!darkMode);} }>
        {icon}
      </button>
      </div>
      
    </header>
  );
}

export default Header;