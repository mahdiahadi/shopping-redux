import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product,useCardStyle}) => {
  if (useCardStyle) {
    return (
      
      <Grid item xs={12} md={4}  sx={{display:'flex',justifyContent:'space-around'}}  >
        <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ textAlign: 'center' }}>
              <Grid container justifyContent="center"> {/* Use a Grid container to center the media */}
                <CardMedia
                  component="img"
                  height="170"
                  src={product.image}
                  alt={product.title}
                  sx={{ width: '50%', objectFit: 'fill' }}
                />
              </Grid>
            </CardActionArea>
            <CardContent sx={{ textAlign: 'center' }}>
              {/* <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography> */}
              <Typography variant="body2" color="text.secondary">
                {product.description.slice(0, 120)}...
              </Typography>
              <Button sx={{color:'rgba(0, 0, 0, 0.3)'}}>
                read more
              </Button>
            </CardContent>
        </Card>
      </Link>
      </Grid>
    );
  }
  return (

      <Grid item xs={12} md={3}  >
        <Link to={`/product/${product.id}`}>
        <Grid  display="flex" justifyContent="center">
        <img
            src={product.image}
            width={200}
            height={200}
            style={{
            objectFit: 'fill',
            minHeight: 100,
            border: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            transition: 'border-color 0.3s', // Add transition for a smoother effect
    // Regular styles
        }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = '#828387')} // Change the border color on mouse over
          onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)')} // Change it back on mouse out
    />   </Grid>
        </Link>
        <Grid textAlign="center">
            <Typography variant='body2'>{product.title}</Typography>
            <Typography variant='body2' fontWeight="bold">${product.price}</Typography>
        </Grid>
    </Grid>
  
  )
}

export default Product