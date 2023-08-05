import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/Auth/AuthSlice';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/"  style={{color:'#1976d2'}}>
        Shop Star
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const nameRef = React.useRef();
  const lastNameRef = React.useRef()
  const emailRef = React.useRef();
  const passRef = React.useRef();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = e => {
    e.preventDefault();
    const payload ={
      firstName:nameRef?.current?.value,
      lastName:lastNameRef?.current?.value,
      email:emailRef?.current?.value,
      password:passRef?.current?.value
    }
    if (!payload.password) {
      alert('Please enter your password');
      return; // Abort login if password is empty
    }
    localStorage.setItem('userInfo',JSON.stringify(payload))
    localStorage.setItem('userToken',payload.password)
    if(payload.password && payload.email){
    dispatch(
        login({
          userToken:payload.password , userInfo:payload 
        })
        )
      }
    navigate('/checkout')
  }
 
  return (
      <Container  onSubmit={handleLogin} component="main" maxWidth="xs" sx={{direction:'ltr'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <input
                style={{height:'40px'}}
                  ref={nameRef}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  
                  id="firstName"
                  placeholder="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                ref={lastNameRef}
                style={{height:'40px'}}
                  required
                  
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                ref={emailRef}
                style={{height:'40px'}}
                  required
                  
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                ref={passRef}
                style={{height:'40px'}}
                  required           
                  name="password"
                  placeholder="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              
              variant="contained"
              id="addToBasketButton" sx={{ mt: 3, mb: 2,bgcolor:'#000',color:'#fff'}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Link to="/login" variant="body2"  style={{color:'#1976d2'}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}