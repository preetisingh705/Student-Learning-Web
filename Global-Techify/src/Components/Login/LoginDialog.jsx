import { useState, useContext,useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";

import  { Dialog, TextField, Typography, Button , styled} from '@mui/material';

import { authenticateSignup,authenticateLogin } from '../../services/api';
import { DataContext } from '../../Context/DataProvider';
import { RxCross2 } from "react-icons/rx";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Text = styled(Typography)`
font-size:12px;
color: #878787;
`;

const CreateAccount = styled(Typography)`
font-size:  14px;
text-align: center;
color: #2874f0;
font-weight: 600;
cursor: pointer;
`;
const Error = styled(Typography)`
font-size:  10px;
color: #ff6161;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`;

const accountIntitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendation'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupIntitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}

const LoginDialog = ({  open, setOpen }) => {

    const [account, toggleAccount] = useState(accountIntitialValues.login);
    const [signup, setSignup] = useState(signupIntitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
    

    const { setAccount } = useContext(DataContext);

    const notify = () => {
        toast('Successfully login!');
            
    };

   const handleClose = () => {
    setOpen(false);
    toggleAccount(accountIntitialValues.login);
        setError(false);
  }

    const toggleSignup = () => {
        toggleAccount(accountIntitialValues.signup);
        
    }
    const toggleLogin = () => {
        toggleAccount(accountIntitialValues.login);
    }

   const onInputChange = (e) => {
   setSignup({ ...signup, [e.target.name]: e.target.value });
    }

 const signupUser = async() => {
    // authenticateSignup(signup);    
   let response = await authenticateSignup(signup);
   if(!response) return;
   handleClose();
   setAccount(signup.firstname);
 }

 const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
 }


  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if(response.status === 200){
      handleClose();
      setAccount(response.data.data.firstname);
    }else {
   setError(true);
    }
 } 


    
    return (

        <Dialog open={open}  onClose={handleClose} PaperProps={{ sx: {maxWidth: 'unset'}}} >

                <div className='h-full w-full px-6  '>
                {
                    account.view === 'login' ?
                    <div className='flex flex-col mt-4'>
                        <div className='flex flex-col justify-end items-end '>
                            <div className='border-2 rounded-full p-1 w-8 border-black cursor-pointer' onClick={handleClose} ><RxCross2 className='text-[20px]' /></div>
                        </div>
                    <div className='flex font-poppins flex-col justify-center  items-center mt-2  '>
                        <p className='text-2xl font-bold'>LOGIN </p>
                        <p className='text-md text-[#9e91e9]'>Welcome To Global Techify</p>
                    </div>
                    </div>
                    
                    :
                    <div className='flex flex-col mt-2'>
                        <div className='flex flex-col justify-end items-end '>
                            <div className='border-2 rounded-full p-1 w-8 border-black cursor-pointer' onClick={handleClose} ><RxCross2 className='text-[20px]' /></div>
                        </div>
                    <div className='flex flex-col justify-center  items-center   '>

                   <p className='text-2xl font-bold'>SIGN UP </p>
                    <p className='text-md text-[#9e91e9]'>Welcome To Global Techify</p>
                    </div>
                    </div>
                } 
                 

                {
                    account.view === 'login' ?
                <div className='flex flex-col px-5 py-3 md:px-5 md:py-6 gap-y-5 md:mx-6   '>
                    <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label="Enter Username"  />
                   {error &&  <Error>Please enter valid username or password</Error> }
                    <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label="Enter password"  />
                    <CreateAccount  >Forgot Password ? </CreateAccount>
                    <button className='bg-[#a79cdd] text-[#fff] h-[48px] rounded-md' onClick={() =>{loginUser(); notify(); }}>Login</button>
                    <ToastContainer />
                    <Typography style={{ textAlign: 'center'}}>OR</Typography>
                    <button className='bg-[#fff] text-black h-[48px] border-2 border-solid border-black rounded-md flex  items-center justify-center gap-x-4'><FcGoogle className='text-xl' />
                    Login with Google</button>
                    <CreateAccount onClick={() => toggleSignup()} >Don't have an account? Signup</CreateAccount>
                </div>
                
                     :

                <div className='flex flex-col px-2 py-2  md:px-1 md:py-2 gap-2 md:mx-6  '>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname"  />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname"  />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label="Enter Username"  />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label="Enter Email"  />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label="Enter Password"  />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone"  />
                    <button className='bg-[#a79cdd] text-[#fff] h-[48px] rounded-md' onClick={() => signupUser()}>Sign up</button>
                    <Typography style={{ textAlign: 'center'}}>OR</Typography>

                    <CreateAccount onClick={() => toggleLogin()} >Already have an account? Login </CreateAccount>

                    
                </div> 
                 } 
            </div>
        </Dialog>

    )
}

export default LoginDialog;