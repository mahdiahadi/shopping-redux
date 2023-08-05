import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectedAllAuth } from '../redux/features/Auth/AuthSlice';
import Navbar from './Navbar';
import Menu from './Menu';
import Footer from './Footer';
import BackToTop from './BackToTop';

const GuestLayout = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const  userToken = useSelector(selectedAllAuth);
  useEffect(()=>{
    if(!userToken.userToken){
      navigate('/')
    }
  },[userToken, navigate])
  return (
    <div>
      <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/>
      <Menu setMobileMenu={setMobileMenu}/>   
      <Outlet />
      <Footer/>
      <BackToTop/>
    </div>
  )
}

export default GuestLayout;