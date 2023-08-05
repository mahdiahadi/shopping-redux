import { AccountCircle } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logout, selectedAllAuth} from '../redux/features/Auth/AuthSlice'
const Profile = () => {
    
    const userInfo = useSelector(selectedAllAuth)
    const dispatch = useDispatch()
    const signout = () => {
    
        dispatch(
            logout({
                userToken:null,userInfo:null
            })
        )
    }
  return (
    <Grid container sx={{display:'flex',justifyContent:'center'}} >
        <Grid item xs={12} sx={{textAlign:'center'}} >
            <AccountCircle sx={{fontSize:'6rem'}}/>
            <Typography variant='h6' sx={{fontFamily:'initial',fontWeight:'bold'}}>Name: <span style={{fontWeight:'normal'}}>{userInfo?.userInfo.firstName}</span></Typography>
            <Typography variant='h6' sx={{fontFamily:'initial',fontWeight:'bold'}}>Family: <span style={{fontWeight:'normal'}}>{userInfo?.userInfo.lastName}</span></Typography>
            <Typography variant='h6' sx={{fontFamily:'initial',fontWeight:'bold'}}>Email: <span style={{fontWeight:'normal'}}>{userInfo?.userInfo.email}</span></Typography>
            <Button onClick={signout} id="addToBasketButton" sx={{bgcolor:'#000', color:'#fff',marginTop:'1rem'}}>
                Logout
            </Button>
        </Grid>
    </Grid>
  )
}

export default Profile