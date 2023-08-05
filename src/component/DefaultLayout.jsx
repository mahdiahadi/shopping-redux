import React, { useEffect } from 'react'
import { useGetProductsQuery } from '../redux/services/ProductsApi'
import { useDispatch, useSelector } from 'react-redux'
import { selectedAllAuth } from '../redux/features/Auth/AuthSlice';
import { Outlet, useNavigate } from 'react-router-dom';

const DefaultLayout = () => {
   
  
  return (
    <>
      <Outlet/>
    </>
  )
}

export default DefaultLayout