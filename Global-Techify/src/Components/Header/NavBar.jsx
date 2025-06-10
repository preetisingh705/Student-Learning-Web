import {Link} from 'react-router-dom';
import { useState,useContext } from 'react';
import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../../Context/DataProvider';
import Profile from './Profile';
import { MdShoppingCart } from "react-icons/md";


function Navbar () {
    const [open, setOpen] = useState(false);

const { account, setAccount } = useContext(DataContext);

const openDialog = () => {
    setOpen(true);
}
    return (
        <div className='hidden lg:flex justify-center items-center mx-2 font-poppins font-bold'>
             {

            account ? 
            // navbar after login
        <nav className=" flex   text-[#7862e4] text-xl dark:text-[#7862e4] items-center gap-4 xl:gap-8">
        <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
          <Link to='/' >Home
          </Link>
          </div>
         <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
          <Link to='/allcourses' >Courses
          </Link>
          </div>
          
          <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
          <Link to='/allmentor'> Mentorship
          </Link>
          </div>
          <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
          <Link to='/allevents'> Events
          </Link>
          </div>
          <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
          <Link to='/cart'> My Courses
          </Link>
          </div>
         
           <Profile account={account} setAccount={setAccount}/> 
        </nav> 
        
        :
        // navbar before login
        <nav className=" flex   text-[#7862e4] dark:text-[#7862e4]  text-xl items-center gap-4 xl:gap-6">
        <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/'> Home
         </Link>
        </div>
         
        <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/allcourses'> Courses
         </Link>
        </div>
        <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/allmentor' > Mentorship
         </Link>
         </div>
         <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/allevents'> Events
         </Link>
         </div>

        

         <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/allservices' > Services
         </Link>
         </div>
         <div className='hover:border-b-2  h-[30px] border-[#7862e4] items-center flex '>
         <Link to='/cart' > <MdShoppingCart className='text-[30px]' />
         </Link>
         </div>
         
         <button className='flex px-1 h-[40px] rounded-3xl items-center border-2 border-solid border-[#7862e4]  text-[#7862e4] font-Arial ' onClick={()=> openDialog()}>Sign Up/Login</button>      
         <LoginDialog open={open} setOpen={setOpen} />

       </nav>
          }
  
        </div>
    )
}

export default Navbar;