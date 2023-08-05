import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);
    window.addEventListener('scroll' , function() {
      var item = document.getElementById('item')
      var scroll = window.pageYOffset || this.document.documentElement.scrollTop
      if( scroll <= 200 ){
        item.style.display = 'none'
      } else {
        item.style.display = 'block'
      }
    })
    const goToTopHandler =() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }
  return (
    <Grid id="item" position="sticky" right="50px" bottom="5%" zIndex={9999999999} sx={{cursor:'pointer' }} onClick={goToTopHandler} >
        <Box sx={{width:"40px",height:'40px',bgcolor:'#000',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <ExpandLess sx={{color:'#fff',fontSize:'40px'}}/>
        </Box>
    </Grid>
  )
}

export default BackToTop