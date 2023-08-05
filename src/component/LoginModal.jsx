import { Avatar, Box, Button, Checkbox, Container, Grid, Modal, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Copyright } from '@mui/icons-material';
import Login from '../pages/Login';
import Profile from './Profile';
const LoginModal = ({setOpenLogin,openLogin,useStyle}) => {

    const handleCloseLoginModal = () => {
        setOpenLogin(false)
    }
  return (
    <Container >
        <Modal
        open={openLogin}
        onClose={handleCloseLoginModal}
        >
          <Grid container sx={{direction:'ltr',display:'flex',justifyContent:'center',position:'absolute',top:'0',left:'0',backgroundColor:'#fff',zIndex:'',minHeight:"100vh", width:"280px",transition:'all 0.5s ease-in',zIndex:'9999'}} >
          {
            !useStyle ?
            <Login />
              :
            <Profile/>
          }
     

   </Grid>

        </Modal>
    </Container>
  )
}

export default LoginModal