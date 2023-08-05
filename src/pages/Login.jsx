import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link, json, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectedAllAuth } from '../redux/features/Auth/AuthSlice';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/"  style={{color:'#1976d2'}}>
        Shop Star
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const navigate =useNavigate()
  const location = useLocation();
  const isLoginPage = location.pathname === '/login'
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const user = useSelector(selectedAllAuth)
  const userInfo = JSON.parse(localStorage.getItem('userInfo') );
  console.log(userInfo?.email,userInfo?.password)

  const userToken =  localStorage.getItem('userToken')
  const  loginHandle = e => {
    e.preventDefault();
    if( email === userInfo?.email && password === userInfo?.password ) {
      dispatch(
        login({
          userToken: userToken , userInfo:userInfo
        })
      )
    } else {
      alert('User Not Found')
      setTimeout(()=>{
  
        navigate('/signup')
      },1000)
    }
  }
  return (
    
      <Grid container sx={{direction:'ltr',display:'flex',justifyContent:'center'}} >
     

        <Grid item xs={12} elevation={6} >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
              onClick={loginHandle}
                type="submit"
                fullWidth
                variant="contained"
                id="addToBasketButton" sx={{ mt: 3, mb: 2,bgcolor:'#000',color:'#fff'}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2"  style={{color:'#1976d2'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2" style={{color:'#1976d2'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
   
  );
}