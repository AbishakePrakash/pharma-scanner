import { useState } from 'react';
import { Link, Stack, Box, Paper, IconButton, Input, InputLabel, FormControl, InputAdornment, TextField, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { BorderAllRounded, Password } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// img
import icon from '../assets/icon.png';
import bg from '../assets/background.jpg';

const Loginform = () => {

  const [isLoading, setIsLoading] = useState(false)

  const myStyle = {
    backgroundImage: `url(${bg})`,
    height: '100vh',
    marginTop: '-90px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };


  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    console.log('Submitted');
  }

  return (
    <Box style={myStyle} textAlign={'center'} component='form' sx={{ width: '350px' }}>
      <Box textAlign={'center'} mt={'100px'} paddingTop={'90px'}>
        <img src={icon} alt="icon" height={'100px'} width={'100px'} />
      </Box>
      {/* <Paper> */}
      <Box sx={{ backgroundColor: 'white', opacity: 0.5 }} textAlign={'center'} margin={'25px'} width={'250px'} spacing={2} padding={'20px'} >
        {/* <TextField
          required
          name="email"
          label="Email address"
        onChange={handleChange}
        /> */}

        <Box >
          <Typography>LOGIN</Typography>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Username
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              startAdornment={
                <InputAdornment position="start">
                  <Password />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Link fontSize={'15px'} variant="subtitle3" underline="hover" sx={{ cursor: 'pointer' }}>
            Forgot password?
          </Link>
        </Box>
      </Box>
      <Box width={'300px'} margin={'20px'} >
        <LoadingButton sx={{ mt: '10px' }} onClick={handleClick} loading={isLoading} fullWidth size="large" type="submit" variant="contained">
          Login
        </LoadingButton>
      </Box>
      {/* </Paper> */}

    </Box>
  );
}

export default Loginform;