import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedAllAuth } from '../redux/features/Auth/AuthSlice';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { decreaseCart, incereaseCart, removeAllCart, removeFromCart, selectAllItems } from '../redux/features/Cart/CartSlice';
import { Backdrop, Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import { Close, ShoppingBag } from '@mui/icons-material';


const Checkout = () => {
    const itemsList = useSelector(selectAllItems)
    const dispatch = useDispatch();
    const userToken = useSelector(selectedAllAuth)
    const navigate=useNavigate()
    const removeItem = (id) => {
      dispatch(removeFromCart({id}))
    }
    const decrease = id => {
      dispatch(decreaseCart({id}))
    }
    const increase = id =>{
      dispatch( incereaseCart({id}))
    }
    const clearCart = () => [
      dispatch(
        removeAllCart()
      )
    ]
   useEffect(()=>{
    if(!userToken.userToken){
      navigate('/login')
    }
   },[])
  return (
    <Container>

      <Grid container>
        {
          itemsList.itemsList.length === 0 ?
          <Grid item xs={12}>
             <Grid container marginTop={3}>
            <Grid item xs={12}>
                <Typography variant='h6' fontFamily='inherit' display="flex" justifyContent="center">
                <Link to='/shop' style={{textDecoration:'none', color:"rgb(25, 118, 210)",alignItems:'center',display:'flex'}}> <ShoppingBag/>  Back To Shop </Link>&nbsp;  Basket Is Empty 
                </Typography>
                <div style={{ borderBottom: '1px solid #000', width: '8%',margin:'5px auto',textAlign:'center',textAlign:"center"}}></div> 
            </Grid>
      </Grid>
          </Grid>
          :
          <>
             <Grid item xs={12}>
        <Grid container marginTop={3}>
            <Grid item xs={12}>
                <Typography variant='h6' fontFamily='inherit' display="flex" justifyContent="center">
                   Cart
                </Typography>
                <div style={{ borderBottom: '1px solid #000', width: '8%',margin:'5px auto',textAlign:'center',textAlign:"center"}}></div> 
            </Grid>
      </Grid>
        </Grid>
        <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{alignContent:'center',border:'none',boxShadow:'none'}}>
                  <TableHead >
                    <TableRow>
                      <TableCell>Subtotal</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Product</TableCell>
                      <TableCell colSpan='2'></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      itemsList.itemsList.map((item,index) => (
                        <TableRow key={item.id}>
                            <TableCell>${item.totalPrice}</TableCell>
                            <TableCell>
                              <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                              <button onClick={()=> increase(item.id)}  style={{width:'20px',color:'#fff',backgroundColor:'#000',border:'none',borderRadius:'3px',cursor:'pointer'}}>+</button>
                              <Typography marginX={1} fontSize={16}>{item.count}</Typography>
                              <button onClick={()=>decrease(item.id)} style={{width:'20px',color:'#fff',backgroundColor:'#000',border:'none',borderRadius:'3px',cursor:'pointer'}} >-</button>
                              </Grid>
                            </TableCell>
                            <TableCell>${item.price}</TableCell>
                            <TableCell>{item.title}</TableCell>
                            <TableCell colSpan='2'>
                              <Grid display="flex" justifyContent="space-between" alignItems="center">
                              <img src={item.image} width={120} height={120} />
                              <Close onClick={() => removeItem(item.id)} sx={{color:'red',cursor:'pointer'}}/>
                              </Grid>
                            </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
              </Table>
            </TableContainer>
        </Grid>
        <Grid marginTop={5} item xs={12} sx={{display:'flex',justifyContent:'center'}}>
          <Button onClick={clearCart} id="addToBasketButton" sx={{bgcolor:'#000',color:'#fff'}}>
            clear Cart
          </Button>
        </Grid>
        <Grid marginTop={5} item xs={6}>
            <TableContainer component={Paper}>
              <Table sx={{alignContent:'center'}}>
                  <TableHead >
                    <TableRow>
                      <TableCell  sx={{fontWeight:'bold',fontSize:'20px'}}>Cart Totals</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{display:'flex',justifyContent:'space-between',fontWeight:'bold'}}><span>{itemsList.totalCount}</span> TotalCount  </TableCell> 
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{display:'flex',justifyContent:'space-between',fontWeight:'bold'}}><span>${itemsList.totalPrice}</span> TotalPrice  </TableCell> 
                    </TableRow>
                  </TableBody>
                  <TableFooter >
                    <TableRow>
                      <TableCell  sx={{fontWeight:'bold',fontSize:'20px'}}>
                        <Button id="addToBasketButton" sx={{bgcolor:'#000',color:'#fff'}}>procced to checkout</Button>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
              </Table>
            </TableContainer>
        </Grid>
          </>
        }
      </Grid>
    </Container>
  )
}

export default Checkout