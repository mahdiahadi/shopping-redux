import { Box, Button, Checkbox, Container, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import DoneIcon from '@mui/icons-material/Done'
import Images from './images';

const Footer = () => {
  const theme = useTheme();
  const isMediumDevice = useMediaQuery(theme.breakpoints.down('md'))
  const images = [
    {
      id:0 ,
      fileName: 'image1',
      filePath: './src/assets/images/gallery01-150x150.jpg'
    },
    {
      id:1 ,
      fileName: 'image2',
      filePath: './src/assets/images/gallery02-150x150.jpg'
    },
    {
      id:2 ,
      fileName: 'image3',
      filePath: './src/assets/images/gallery03-150x150.jpg'
    },
    {
      id:3 ,
      fileName: 'image4',
      filePath: './src/assets/images/gallery04-150x150.jpg'
    },
    {
      id:4 ,
      fileName: 'image5',
      filePath: './src/assets/images/gallery05-150x150.jpg'
    },
    {
      id:5 ,
      fileName: 'image6',
      filePath: './src/assets/images/gallery06-150x150.jpg'
    }
  ]
  return (
    <Container maxWidth='100%' sx={{backgroundColor:"#ECEDED",marginTop:'2rem'}} >

      <Grid bgcolor="#ECEDED" container paddingY={10} textAlign={isMediumDevice ? 'center' : 'left'}>
           <Grid xs={12} item md={3} marginBottom={isMediumDevice ? 5 : 0}>
        <Grid marginLeft={isMediumDevice ? 0 : 5}>
              <Grid>
              <Typography fontSize={18}   fontFamily="initial">!About Shopstar </Typography>
              </Grid>
              <Grid>
              <div style={{ borderBottom: '1px solid #000', width: '22%',margin: !isMediumDevice ? '20px 0 0 0' : '20px auto', float: !isMediumDevice &&'left'}}></div>
              </Grid>
            <Grid margin= {isMediumDevice ? "20px 0 0 0" : "50px 0 0 0"}>
            <Typography variant='body2' color='rgba(0, 0, 0, 0.8)'>
              A super stylish, fully responsive, easy to use theme perfect for an online store, fashion website or blog. Its minimalist design features let your products and visuals do the talking. Integrated with powerful plugins like SiteOrigin’s Page Builder and WPForms, as well as being Woocommerce-ready – it’s easily customisable and ready to go. Download it today and get your customers shopping up a storm!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item md={3} marginBottom={isMediumDevice ? 5 : 0}>
          <Grid marginLeft={isMediumDevice ? 0 : 5}>
            <Grid>
              <Typography  fontSize={18}  fontFamily="initial">Stylespiration</Typography>
            </Grid>
            <Grid>
              <div style={{ borderBottom: '1px solid #000', width: '22%',margin: !isMediumDevice ? '20px 0 0 0' : '20px auto', float: !isMediumDevice &&'left'}}></div>
            </Grid>
            <Grid margin= {isMediumDevice ? "20px 0 0 0" : "50px 0 0 0"}>
              <Grid container spacing={ isMediumDevice ? 2 : 1}>
              {
                images.map((image) => (
                  <Grid key={image.id} item xs={isMediumDevice ? 4 : 4}  style={{ margin: '0px' }}>
                     <img src={image.filePath}  style={{ width: '100%', height: '100px', objectFit: 'fill',borderRadius:'5px'}} />
                  </Grid>
                ))
              }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item md={3} marginBottom={isMediumDevice ? 5 : 0}>
          <Grid marginLeft={isMediumDevice ? 0 : 5}>
            <Grid>
              <Typography  fontSize={18}  fontFamily="initial">Stay on Fleek</Typography>
            </Grid>
              <Grid>
              <div style={{ borderBottom: '1px solid #000', width: '22%',margin: !isMediumDevice ? '20px 0 0 0' : '20px auto', float: !isMediumDevice &&'left'}}></div>
              </Grid>
            <Grid  margin= {isMediumDevice ? "20px 0 0 0" : "50px 0 0 0"}>
            <Typography variant='body2' color='rgba(0, 0, 0, 0.8)'>
                Stay on trend and get all the latest news, reviews and hot deals straight from us! 
            </Typography>
            </Grid>
            <Grid margin="20px 0 0 0"   sx={{direction:'ltr'}}>
            <div style={{ position: 'relative' }}>
      <TextField
        placeholder="Email Address"
        fullWidth
        variant="outlined"
        sx={{ mr: 0 }} // Remove the right margin
        />
      <Button
        variant="contained"
        sx={{
          bgcolor:"black",
          position: 'absolute',
          top: 0,
          right: 0,
          width: '10%',
          height: '100%',
        }}
      >
        <DoneIcon/>
      </Button>
    </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item  md={3} marginBottom={isMediumDevice ? 5 : 0}>
          <Grid marginLeft={isMediumDevice ? 0 : 5} >
              <Grid>
              <Typography fontSize={18}   fontFamily="initial">Connect with Us </Typography>
              </Grid>
              <Grid>
              <div style={{ borderBottom: '1px solid #000', width: '22%', margin: !isMediumDevice ? '20px 0 0 0' : '20px auto', float: !isMediumDevice &&'left',}}></div>
              </Grid>
            <Grid margin= {isMediumDevice ? "20px 0 0 0" : "50px 0 0 0"} >
          <Box  >
            <EmailIcon sx={{color:'#54595F',mr:'.7rem',fontSize:'1.3rem'}}/>
            <TwitterIcon sx={{color:'#54595F',mr:'.7rem',fontSize:'1.3rem'}}/>
            <InstagramIcon sx={{color:'#54595F',mr:'.7rem',fontSize:'1.3rem'}}/>
            <FacebookOutlinedIcon sx={{color:'#54595F',mr:'.7rem',fontSize:'1.3rem'}}/>
            <PinterestIcon sx={{color:'#54595F',mr:'.7rem',fontSize:'1.3rem'}}/>
          </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    )
}

export default Footer