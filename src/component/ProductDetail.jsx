import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleFakeProductQuery } from '../redux/services/fakestoreapi';
import { Button, Container, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Star } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, incereaseCart, selectAllItems } from '../redux/features/Cart/CartSlice';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectAllItems)
  
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down('sm'))
  const [star]=useState(5)
  const [showAddButton,setShowAddButton]=useState(false)
  const {id} = useParams();
  const itemsCount = parseInt(id) - 1
  const { data: product, isLoading, isError } = useGetSingleFakeProductQuery({ id });
  const createArray = (len) => [...Array(len)]
  const StarRating = ({star,count}) => {
    return(
      <>
        {
          createArray(star * 2).map((value,index) => (
            <div
            key={index}
            style={{
              display:'inline-block',
              width:'12px',
                  overflow:'hidden',
                  direction: index % 2 === 0 ? 'ltr' : 'rtl'
                }}
                >
                { index <= count * 2 - 1 ? <Star style={{ fill:'orange'}} /> : <Star style={{ fill:'lightgray'}}/>}
            </div>
          ))
        }
      </>
    )
  }
  // useEffect(() => {
  //   const zoomContainer = document.querySelector('.zoom-container');
  //   const zoomedImage = document.querySelector('.zoomed-image');
    
  //   zoomContainer.addEventListener('mousemove', (e) => {
  //     const { left, top, width, height } = zoomContainer.getBoundingClientRect();
  //     const x = ((e.pageX - left) / width) * 100;
  //     const y = ((e.pageY - top) / height) * 100;
      
  //     zoomedImage.style.backgroundPosition = `${x}% ${y}%`;
  //   });
    
  //   zoomContainer.addEventListener('mouseenter', () => {
  //     zoomedImage.style.opacity = '1';
  //   });

  //   zoomContainer.addEventListener('mouseleave', () => {
  //     zoomedImage.style.opacity = '0';
  //   });
  // }, []);
  const image = product?.image;
  const price = product?.price;
  const title = product?.title
  const count = cart?.itemsList.find((item) => item.id === id)?.count
  useEffect(()=>{
    const handleButton = () => {
      if(count > 0 ){
        setShowAddButton(true)
      } else{
        setShowAddButton(false)
      }
    }
    handleButton()
  },[count])

  const addToBasket = (event) => {
    event.preventDefault();

    if(product){

      dispatch(
        addToCart({id,price,title,image})
        )
    }

  }

  const increase = id => {
    dispatch(
      incereaseCart({id})
    )
  }
  const decrease = id => {
    dispatch(
      decreaseCart({id})
    )
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Unable to fetch product data.</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
   <Container>
    <Grid  container sx={{direction:"ltr",marginTop:'2rem'}}  >
      <Grid item xs={12} md={6}   >
        <Grid className='zoom-container' textAlign="center" >
          <img src={product?.image} alt={product?.title} className="product-image" width={smallDevice? 100 : 280 } height={smallDevice ? 150 : 320} border="1px solid rgba(0,0,0,0.3)" style={{padding:'1rem 4rem'}}/>
          <Grid className='zoomed-image'></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid>
        <Typography variant='h5' color="rgba(0,0,0,0.9)" fontFamily="inherit" marginBottom={2}>{product?.title}</Typography>
        <Typography variant='h6' color="#ba2227" fontFamily="inherit">${product?.price}</Typography>
        <Typography variant='body2' color="rgba(0,0,0,0.7)" fontFamily="inherit" marginBottom={2}>{product?.description}</Typography>
        </Grid>
        <Grid>
       {/* <TextField
          id="basketInput"
           sx={{
            width: '60px',
          }}
          type="number"
          value={cart.itemsList.count}
          InputLabelProps={{
            shrink: true,
          }}
          
        /> */}
       {
        !showAddButton ?
        <Button onClick={addToBasket} id="addToBasketButton" sx={{bgcolor:'#000',color:'#fff',padding:'10px',marginLeft:'0.7rem'}} >
          add to basket
        </Button>
        :
 
        <Grid sx={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
        <button onClick={()=> increase(id)}  style={{width:'20px',color:'#fff',backgroundColor:'#000',border:'none',borderRadius:'3px',cursor:'pointer'}}>+</button>
        <Typography marginX={1} fontSize={16}>{count}</Typography>
        <button onClick={()=>decrease(id)} style={{width:'20px',color:'#fff',backgroundColor:'#000',border:'none',borderRadius:'3px',cursor:'pointer'}} >-</button>
        </Grid>      

       }
       </Grid>
          <Grid marginTop={3}>
          <Grid display="flex" alignItems="center" >
          <Typography variant='body2' color="rgba(0,0,0,0.7)" fontFamily="inherit"><span style={{fontWeight:'bold'}}>Rating:</span> {product?.rating?.rate}</Typography> 
          <StarRating count={product?.rating?.rate} star={star} />
          </Grid>
          <Typography variant='body2' color="rgba(0,0,0,0.7)" fontFamily="inherit"><span style={{fontWeight:'bold'}}>Count:</span> {product?.rating?.count}</Typography>
            <Typography variant='body2' color="rgba(0,0,0,0.7)" fontFamily="inherit"><span style={{fontWeight:'bold'}}>Category:</span> {product?.category}</Typography>
          </Grid>
      </Grid>
    </Grid>
   </Container>
  )
}

export default ProductDetail