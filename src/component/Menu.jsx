import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
const Menu = ({setMobileMenu}) => {
  const menuItems =[
    {id:0,item:'Home'},
    {id:1,item:'Shop'},
    {id:2,item:'Blog'},
    {id:3,item:'Blog Layouts'},
    {id:4,item:'About'},
    {id:5,item:'Contact'}
  ]
   const [activeMenu,setActiveMenu]=useState('');
   const location = useLocation()
   const path = location.pathname.split('/').pop()
   
    const theme = useTheme();
    const isMediumDevice = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
   <Grid className='main-animation' container >
    <Grid item xs={12} textAlign="center" alignContent="center" marginTop={10} >
    <Grid>
        <Typography variant='h2' fontFamily="initial">!shopstar</Typography>
        <Typography  fontSize={18} fontFamily="initial">A Classic Never Goes out of Style </Typography>
    </Grid>
    </Grid>
   </Grid>
   {
    isMediumDevice ? 
    <Grid  container position="sticky" top="70px" borderBottom="3px solid #000"  bgcolor="#fff" zIndex={99} >
     <Grid item xs={12} textAlign="center" alignContent="center" >
      <Button onClick={() => setMobileMenu(true)} sx={{color:'#000'}}>  <MenuIcon  sx={{fontWeight:'bold',fontSize:'32px'}}/> </Button>
     </Grid>
    </Grid>
    :
    <Grid className='main-animation2' container position="sticky" top="50px" borderBottom="3px solid #000" bgcolor="#fff" zIndex={99} >
    <Grid item xs={12} >
        <ul id="menu-item" >
          <>
          <Link ><li><Button sx={{color:'#000',}}><SearchIcon/></Button></li></Link>
          {
            menuItems.map((item) => (
              <Link to={item.item === 'Home' ? '/' : item.item.replace(/\s+/g, '')} key={item.id}><li><Button onClick={() => setActiveMenu(item.id)} sx={{color: activeMenu === item.id ? '#ba2227' : '#000'}}>{item.item}</Button></li></Link>
            ))
          }
          </>
        </ul>
   </Grid>
   </Grid>
    }
    </>
  )
}

export default Menu