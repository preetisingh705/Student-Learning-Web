import { useState } from 'react'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';
import AllCourses from './Components/Courses/AllCourses/AllCourses';
import AllServices from './Components/Services/AllServices';
import Allevents from './Components/Events/Allevents';
import AllMentor from './Components/Mentor/AllMentor';
import DetailView from './Components/Courses/AllCourses/details/DetailView';

import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import { Outlet } from 'react-router-dom';


import DataProvider from "./Context/DataProvider"
import { useLayoutEffect } from 'react'
import Landing from './Components/Landing/Landing';
import Services from './Components/Services/Services';
import Events from './Components/Events/Events';
import Mentor from './Components/Mentor/Mentor';
import About from './Components/About/About';
import Contact from './Components/Contact/conatct';
import Cart from './Components/cart/Cart';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {

  return (
    <DataProvider  >
      <BrowserRouter>
      <Wrapper>
      <Header />
      <Routes >
       <Route path='/' element={<GuestLayout />}>   
       <Route index element={<Home/>} />
       <Route path="/product/:id" element={<DetailView />} />
       <Route path="/cart" element={<Cart />} />
       </Route>
       <Route path='/home' element={<Landing />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/allcourses' element={<AllCourses/>} /> 
        <Route path='/allservices' element={<AllServices/>} />
        <Route path='/allevents' element={<Allevents/>} />
        <Route path='/allmentor' element={<AllMentor />} />
        <Route path='*' element={<Error />} /> 
      </Routes>
      <Footer />
      </Wrapper>
      </BrowserRouter>
    </DataProvider>
  )
}

const GuestLayout = () => {
  return (
    <div >
      <h1>This is the Guest Layout Page</h1>
      <Outlet /> 
    </div>
  );
};

export default App
