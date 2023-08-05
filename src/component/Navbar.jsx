import React, { useState } from 'react'
import { Box, Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MobileMenu from './MobileMenu';
import { useSelector } from 'react-redux';
import { selectAllItems } from '../redux/features/Cart/CartSlice';

import LoginModal from './LoginModal';
import CheckOutModal from './CheckOutModal';
import { selectedAllAuth } from '../redux/features/Auth/AuthSlice';

const Navbar = ({mobileMenu,setMobileMenu}) => {
  const[openLogin,setOpenLogin] = useState(false)
  const[checkoutOpen,setCheckoutOpen]=useState(false)
  const cart = useSelector(selectAllItems)
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'))
  const user = useSelector(selectedAllAuth)
  console.log(user)
  const userName = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <Grid   container sx={{ bgcolor:'#000',minHeight:'50px', position:'fixed',top:0,zIndex:'999'}}>
      <Grid  item xs={12}  sx={{ textAlign: isTabletOrMobile && 'center'}}  display={!isTabletOrMobile && 'flex'} justifyContent={!isTabletOrMobile ? 'space-between' : 'center' }  alignItems="center" >
        <Grid sx={{ marginTop: isTabletOrMobile && '10px'}}>
          <Box  >
            <EmailIcon sx={{color:'#fff',mr:'.7rem',fontSize:'1.3rem'}}/>
            <TwitterIcon sx={{color:'#fff',mr:'.7rem',fontSize:'1.3rem'}}/>
            <InstagramIcon sx={{color:'#fff',mr:'.7rem',fontSize:'1.3rem'}}/>
            <FacebookOutlinedIcon sx={{color:'#fff',mr:'.7rem',fontSize:'1.3rem'}}/>
            <PinterestIcon sx={{color:'#fff',mr:'.7rem',fontSize:'1.3rem'}}/>
          </Box>
        </Grid>
        <Grid position="relative"  >
          <Box   >
              {checkoutOpen && <CheckOutModal setCheckoutOpen={setCheckoutOpen}/>}
            <Button onMouseOver={()=>setCheckoutOpen(true)} sx={{color:'#fff',fontSize:'0.8rem', fontFamily:'initial'}}>
              {cart?.totalPrice} $ - {cart.totalCount} items &nbsp; <ShoppingCartIcon/>
            </Button>
           {
               user?.loggedIn === true ?
            <Button onClick={()=> setOpenLogin(true)} size='sm'  sx={{color:'#fff',fontSize:'0.8rem', fontFamily:'initial'}} >        
                {
                 userName?.firstName && userName?.firstName
                }
            </Button>
              :  
            <Button onClick={()=> setOpenLogin(true)} size='sm'  sx={{color:'#fff',fontSize:'0.8rem', fontFamily:'initial'}} >        
                Sign in | register
            </Button>
           }
            
                { openLogin && <LoginModal setOpenLogin={setOpenLogin} openLogin={openLogin} useStyle={user?.loggedIn ? true : false} />}
          </Box>
         
        </Grid>
        {  
            mobileMenu && <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
        }
      </Grid>
    </Grid>

  )
}

export default Navbar