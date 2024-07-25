
import React, { useState } from 'react';
import { Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Link, Alert } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import BadgeIcon from '@mui/icons-material/Badge';
import LockIcon from '@mui/icons-material/Lock';
import "./sign_up.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sign_up = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword_1, setShowPassword_1] = useState(false);

  const [login, setLogin] = useState({
    userName: '',
    userEmailId: '',
    password: '',
  });
  const [pass, setPass] = useState({
    confirm_pass: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword_1 = () => setShowPassword_1((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange_pass = (e) => {
    const { name, value } = e.target;
    setPass((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { confirm_pass } = pass;
    const { password, userEmailId, userName } = login;

    if (!userEmailId.trim() || !userName.trim()) {
      setError('UserName and EmailId cannot be empty');
      setTimeout(() => {
        setError('');
      }, 4000);
      return;
    }

    if (password !== confirm_pass) {
      setError('Password and Confirm Password do not match');
      setTimeout(() => {
        setError('');
      }, 4000);
      return;
    }

    try {
      const response = await axios.post('http://localhost:2030/signUp/postCompare', login);
     
    //   localStorage.setItem('user', JSON.stringify({
    //     userName: login.userName,
    //     userEmailId: login.userEmailId
    //   }));

      setSuccess(response.data);
      setTimeout(() => {
        setSuccess('');
        navi('/login');
      }, 800);
      setError('');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError(error.response.data);
      } else {
        setError('An error occurred while submitting the form');
      }
      setTimeout(() => {
        setError('');
      }, 4000);
    }
  };

  const navi = useNavigate();

  return (
    <>
      <div className="login-background1">
        <div className="main-box1 shadow-lg">
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
          <Box
            component="form"
            sx={{ width: 500, maxWidth: '100%', display: 'flex', alignItems: 'flex-end', mb: 4 }}
          >
            <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.7, fontSize: 40 }} />
            <TextField
              fullWidth
              id="filled-search"
              label="USER NAME"
              placeholder="Enter the User Name"
              onChange={handleChange}
              value={login.userName}
              type="text"
              name="userName"
              variant="filled"
            />
          </Box>
          <Box
            component="form"
            sx={{ width: 500, maxWidth: '100%', display: 'flex', alignItems: 'flex-end', mb: 4 }}
          >
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.7, fontSize: 40 }} />
            <TextField
              fullWidth
              id="filled-search"
              label="EMAIL ID"
              placeholder="Enter your valid email id"
              onChange={handleChange}
              value={login.userEmailId}
              type="email"
              name="userEmailId"
              variant="filled"
            />
          </Box>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockOpenTwoToneIcon sx={{ color: 'action.active', mr: 1, my: 0.7, fontSize: 40, mb: 5 }} />
            <FormControl sx={{ m: 0.4, width: 450, mb: 4 }} variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                onChange={handleChange}
                value={login.password}
                type={showPassword ? 'text' : 'password'}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                placeholder="Enter your password"
              />
            </FormControl>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.7, fontSize: 40 }} />
            <FormControl sx={{ m: 0.4, width: 450 }} variant="outlined">
              <InputLabel>Confirm Password</InputLabel>
              <OutlinedInput
                onChange={handleChange_pass}
                value={pass.confirm_pass}
                type={showPassword_1 ? 'text' : 'password'}
                name="confirm_pass"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword_1}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword_1 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                placeholder="Enter your confirm password"
              />
            </FormControl>
          </div>
          <div style={{ margin: '40px 0px 10px 110px', display: 'flex', flexDirection: 'column' }}>
            <Button variant="contained" color="primary" sx={{ width: '15rem' }} onClick={handleSubmit}>
              Create Account
            </Button>
            <KeyboardDoubleArrowDownIcon style={{ marginLeft: '6.5rem', marginTop: '1rem' }} />
            <div>
              <Link href="/login" style={{ margin: '0px 0px 10px 6rem', cursor: 'pointer' }}>Login</Link>
              <p style={{ margin: '0px 0px 10px 2rem', cursor: 'default' }}>Already have an account!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_up;
