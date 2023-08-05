import React, { useState } from 'react'
import { Footer, Menu, Navbar, Product } from '../component'
import { Button, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { useGetLimitFakeProductsQuery } from '../redux/services/fakestoreapi';
import Images from '../component/images';
import FooterImages from '../component/FooterSliderImages';
const Home = () => {
  const [count]= useState('8')
    const { data:products } = useGetLimitFakeProductsQuery({count});
    const theme = useTheme();
    const smallDevice = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid>
      <Grid>
        <Swiper
        id="mainSlider"
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={50}
           slidesPerView={1}
           navigation
           pagination={{ clickable: true }}
           scrollbar={{ draggable: true }}
          //  onSwiper={(swiper) => console.log(swiper)}
          //  onSlideChange={() => console.log('slide change')}
           effect='fade'
        >
          <SwiperSlide>
            <img src='../src/assets/images/slide1.jpg' />
            <div className="text-overlay">
              <h2>Fashion is what you buy</h2>
              <p>Style is what you do with it </p>
              <button sx={{bgcolor:'#000', marginTop:'1rem'}}><Link style={{ textDecoration:'none',color:'#fff'}}>Shop Now</Link></button>
            </div>
            </SwiperSlide>
          <SwiperSlide>
            <img src='../src/assets/images/slide2.jpg' />
            <div className="text-overlay">
              <h2>Life isn't perfect</h2>
              <p id="sliderText">But your outfit can be </p>
              <button><Link style={{ textDecoration:'none',color:'#fff'}}>Shop Now</Link></button>
            </div>
            </SwiperSlide>
        </Swiper>
      </Grid>
      <Grid>  
        <Grid container spacing={1} display="flex" justifyContent="space-around" alignContent="center" marginTop="1rem" textAlign="center">
          <Grid item xs={12} md={3} >
              <Grid>
                <Typography>SHOP SHOES</Typography>
                <div style={{ borderBottom: '1px solid #000', width: '22%',margin:'20px auto',textAlign:'center'}}></div> 
              </Grid>
              <Grid className="main-animation">
              <Link  >
                 <Grid sx={{display:'flex',justifyContent:'center'}}>
                     <img style={{width:'350px'}} src='../src/assets/images/shoes.jpg'/>
                  </Grid>
              </Link>
              </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
              <Grid>
                <Typography>Shop Fragrance</Typography>
                <div style={{ borderBottom: '1px solid #000', width: '22%',margin:'20px auto',textAlign:'center',textAlign:"center"}}></div> 
              </Grid >
              <Grid className="man-banner-animattion">
              <Link   >
              <Grid sx={{display:'flex',justifyContent:'center'}}>
                <img style={{width:'350px'}} src='../src/assets/images/perfume.jpg'/>
              </Grid>
              </Link>
              </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
              <Grid>
                <Typography >Shop Accessories</Typography>
                <div style={{ borderBottom: '1px solid #000', width: '22%',margin:'20px auto',textAlign:'center',textAlign:"center"}}></div> 
              </Grid>
             <Grid className="main-animation2"  >
             <Link >
                  <Grid sx={{display:'flex',justifyContent:'center'}}>
                    <img style={{width:'350px'}} src='../src/assets/images/bag.jpg'/>
                  </Grid>
              </Link>
             </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
          <Grid className="man-banner-animattion" container marginTop={3}>
            <Grid item xs={12} sx={{ width:'100%',bgcolor:'#C8C7CC',textAlign:'center',float:'right'}}>
              <img  height="350px" src='../src/assets/images/mens-sale-banner.png' />
            </Grid>
          </Grid>
      </Grid>
      <Grid>
          <Grid container marginTop={3}>
            <Grid item xs={12}>
                <Typography variant='h6' fontFamily='inherit' display="flex" justifyContent="center">
                   Featured Products
                </Typography>
                <div style={{ borderBottom: '1px solid #000', width: '8%',margin:'20px auto',textAlign:'center',textAlign:"center"}}></div> 
            </Grid>
          </Grid>
          <Grid container>
            {
              products?.map((product,index) => (
                <Product product={product} key={product.id} useCardStyle={false}/>
              ))
            }
          </Grid>
      </Grid>
      <Grid bgcolor="#F5F5F5">
      <Grid container marginTop={3} paddingBottom={4}>
            <Grid item xs={12}>
                <Typography variant='h6' fontFamily='inherit' display="flex" justifyContent="center">
                Get the Look
                </Typography>
                <div style={{ borderBottom: '1px solid #000', width: '8%',margin:'20px auto',textAlign:'center',textAlign:"center"}}></div> 
            </Grid>
            <Grid container>
            {
                Images.map((image) => (
                  <Grid key={image.id} item xs={12} md={4}  style={{ margin: '0px',textAlign:'center' }}>
                     <img src={image.filePath}  style={{ width: '200px', height: '200px', objectFit: 'cover',borderRadius:'5px'}} />
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
      </Grid>
      <Grid >
      <Grid container marginTop={3} paddingBottom={4}>
            <Grid item xs={12}>
                <Typography variant='h6' fontFamily='inherit' display="flex" justifyContent="center">
                  Get the Scoop
                </Typography>
                  <div style={{ borderBottom: '1px solid #000', width: '8%',margin:'20px auto',textAlign:'center',textAlign:"center"}}></div> 
            </Grid>
            <Grid container>
            {
              products?.slice(0,3).map((product,index) => (
                <Product product={product} key={product.id} useCardStyle={true}/>
              ))
            }
            </Grid>
          </Grid>
      </Grid>
      <Grid bgcolor="#F5F5F5">
      <Grid container marginTop={3} paddingBottom={0}>
        <Grid item xs={12}>
          <Swiper
            spaceBetween={5}
            slidesPerView={smallDevice ? 3 :5} // Show 5 items per view
            loop={true} // Enable loop mode to create the auto-scrolling effect
            autoplay={{
              delay: 20, // Set the delay between slides (in milliseconds)
              disableOnInteraction: false, // Continue autoplay even when user interacts with the swiper
            }}
          >
            {FooterImages?.map((image) => (
              <SwiperSlide key={image.id} style={{ width: '50px', height: '100px',alignContent:'center',display:'flex',textAlign:'center',justifyContent:'center' }}>
                <img src={image.filePath}  alt={`Image ${image.id}`} />
              </SwiperSlide>
            ))}
          </Swiper>
      </Grid>
    </Grid>
      </Grid>
    </Grid>
  )
}

export default Home