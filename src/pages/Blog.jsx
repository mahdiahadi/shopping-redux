import { Box, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useGetLimitFakeProductsQuery } from '../redux/services/fakestoreapi'

const Blog = () => {
  const [count]= useState('3')
  const { data:products } = useGetLimitFakeProductsQuery({count});
  console.log(products)
  return (
    <Container>
    <Grid container spacing={1} display="flex" justifyContent="space-around" alignContent="center" marginTop="1rem" textAlign="center">
      <Grid item xs={12} md={3} >
        <Grid>
          <Typography>BLOG</Typography>
          <div style={{ borderBottom: '1px solid #000', width: '22%',margin:'5px auto',textAlign:'center'}}></div> 
        </Grid>
      </Grid>
      <Grid item xs={12} >
      {
            products?.map((product) => (
              <Card sx={{ display: 'flex',direction:'ltr',marginTop:'2rem' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={product?.image}
        alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent:'flex-start' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           {product.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {product.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         
        </Box>
      </Box>
    </Card>
            ) )
          }
      </Grid>
    </Grid>
    </Container>
  )
}

export default Blog