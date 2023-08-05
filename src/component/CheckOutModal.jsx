import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, selectAllItems } from '../redux/features/Cart/CartSlice'
import { Close } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const CheckOutModal = ({setCheckoutOpen}) => {
    const theme = useTheme();
    const isMediumDevice = useMediaQuery(theme.breakpoints.down('md')) 
    const checkoutList = useSelector(selectAllItems)
    const dispatch = useDispatch();
    const removeItem = id => {
        dispatch(removeFromCart({id}))
    } 
  return (
    <Container  onMouseLeave={()=>setCheckoutOpen(false)} >
        <Grid container  sx={{position:'absolute',top:'50px',left: isMediumDevice ? '35%': '130px',zIndex:'9999',bgcolor:'#fff',height:'auto',width:'250px',borderRadius:'5px'}}>
            <Grid item xs={12}  > 
            {    
                checkoutList.itemsList.length === 0 ?
                <Grid padding={1}  justifyContent="space-between" alignItems="center" display="flex" sx={{direction:'ltr',float:'left'}}>
                      <Typography variant='body2' sx={{ fontFamily:'inherit',fontSize:'12px',}}>
                      No products in the cart. 
                    </Typography>   
                </Grid>

                :
                checkoutList.itemsList.map((item,index) => (
              
                      <Grid padding={1} key={item.id}  justifyContent="space-between" alignItems="center" display="flex">
                        <Grid>
                        <img height="40px" width="40px" src={item.image} style={{border:'1px solid rgba(0,0,0,0.7)', padding:'1px'}}/>
                        </Grid>
                        <Grid sx={{float:'left',display:'flex'}}>
                            <Typography variant='body2' sx={{ fontFamily:'inherit',fontSize:'12px',direction:'ltr'}}>
                                {item.title}
                            </Typography>
                            <Close onClick={()=>removeItem(item.id)} fontSize='5px' sx={{color:'red',cursor:'pointer'}}/>
                        </Grid>
                    </Grid>
          
                ))
            }
            </Grid>
            <Grid item xs={12} justifyContent="space-around" alignItems="center" display="flex" >
                <Button    id="addToBasketButton" sx={{ mt: 3, mb: 2,bgcolor:'#000',color:'#fff'}}>
                   <Link to="/checkout" style={{ textDecoration:'none',color:'#fff'}}> view cart </Link>
                </Button>
                <Button    id="addToBasketButton" sx={{ mt: 3, mb: 2,bgcolor:'#000',color:'#fff'}}>
                    checkout
                </Button>
            </Grid>
        </Grid>
    </Container>
  )
}

export default CheckOutModal