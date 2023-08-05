import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useGetAllFakeProductsQuery, useGetLimitFakeProductsQuery } from '../redux/services/fakestoreapi'
import { Product } from '../component'

const Shop = () => {
  const theme = useTheme()
  const mediumDevice= useMediaQuery(theme.breakpoints.down('sm'))
  const [sort,setSort]=useState('')
  const [count,setCount] = useState('8')
  const { data:products} = useGetLimitFakeProductsQuery({count})

  const sortedProducts = (products,sort) =>{
    switch(sort) {
      case "default sorting" :
        return products;
      case "sort by popularity":
        return [...products].sort((a,b) => a.rating.count - b.rating.count);
      case "sort by average rating":
        return [...products].sort((a,b) => a.rating.rate - b.rating.rate );
      case "sort by latest" :
        return [...products].sort((a,b) => b.iid - a.id )
      case "sort by price: low to high" :
        return [...products].sort((a,b) => a.price - b.price)
      case "sort by price: high to low" :
        return [...products].sort((a,b) => b.price - a.price)
        default:
          return products;
    }
  }
  const sortProducts = sortedProducts(products,sort)
  return (
    <Grid>
      <Grid container marginTop={3}>
        <Grid item xs={12} sx={{textAlign:'center'}}>
        <Typography variant='h5' fontFamily="inherit">SHOP</Typography>
        <div style={{ borderBottom: '1px solid #000', width: '5%',margin:'15px auto',textAlign:'center',textAlign:"center"}}></div> 
        </Grid>
      </Grid>
      <Container>
      <Grid container display="flex" justifyContent="space-between" alignContent="center">
        <Grid item xs={ mediumDevice ? 12 : 6} sx={{justifyContent: mediumDevice ? 'center' :'flex-start',display:'flex', marginBottom: mediumDevice && '2rem'}} >
          <FormControl sx={{width: mediumDevice ? '400px':'250px',direction:'ltr'}}>
            <InputLabel>Sort products</InputLabel>
            <Select
              sx={{height:'50px'}}
              label="Default Sorting"
              labelId='select-products'
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
            <MenuItem defaultValue="default sorting" value='default sorting'>default sorting</MenuItem>
            <MenuItem value="sort by popularity">sort by popularity</MenuItem>
            <MenuItem value="sort by average rating">sort by average rating</MenuItem>
            <MenuItem value="sort by latest">sort by latest</MenuItem>
            <MenuItem value="sort by price: low to high">sort by price: low to high</MenuItem>
            <MenuItem value="sort by price: high to low">sort by price: high to low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={ mediumDevice ? 12 : 6} sx={{display:'flex',justifyContent: mediumDevice ? 'center' :'flex-end',alignItems:'center'}}>
          <Typography variant='body2' color="rgba(0, 0, 0, 0.8)">
            Showing all </Typography> <FormControl sx={{direction:'ltr'}}>
            
            <Select
              sx={{height:'20px'}}
           
              labelId='select-count'
              value={count}
              onChange={(e) => setCount(e.target.value)}
            >
            <MenuItem defaultValue={8} value={8}>8</MenuItem>
            <MenuItem  value={12}>12</MenuItem>
            <MenuItem  value={16}>16</MenuItem>
            <MenuItem  value={20}>20</MenuItem>
            </Select>
          </FormControl>  <Typography variant='body2' color="rgba(0, 0, 0, 0.8)">
            results </Typography>
         
        </Grid>
      </Grid>
      <Grid marginTop={4} container display="flex" justifyContent="space-between" alignContent="center">
          {
            sortProducts?.map((product,index) => (
              <Product product={product} key={product.id} useCardStyle={false}  />
            ))
          }
      </Grid>
      </Container>
    </Grid>
  )
}

export default Shop