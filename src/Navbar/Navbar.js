import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';
import logo from "../images/FLogo.png"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import cart from "../images/cart.png"
import Button from '@mui/material/Button';
import profile from '../images/profile_.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Dashboard from '../Pages/dashboard';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Tooltip } from 'antd';


function Navbar() {

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <>
    <Container maxWidth={false}>
      
    
    <nav className="navbar card shadow-lg ">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/">
            <img src={logo} alt="Logo" className="navbar-logo"  style={{height:"60px"}}/>
          </a>
        </div>
        <form onSubmit={handleSubmit} className="navbar-search">
           <Box
              component="form"
              sx={{
              width: 500,
              maxWidth: '100%',
              borderRadius: 8,
              
              }}
               >  
                    <TextField
                         fullWidth
                         id="filled-search"
                         label="Search"
                         type="search"
                         variant="filled"
                         sx={{
                          borderRadius: 8, 
                          '& .MuiFilledInput-root': {
                            borderRadius: 8,
                          },
                        }}
                    />
            </Box>
                <button type="submit" className="navbar-search-btn">
                  <FaSearch />
                </button>
        </form>
        <div className='nav-left' >
          <img src={cart} style={{cursor:"pointer",position:"relative",left:"13rem"}}className='cart'/>
          <Button variant="contained" href="login" style={{position:"relative",left:"15rem"}}>
                LOGIN
          </Button>
          {/* <img src={profile} style={{height:"45px",width:"45px",cursor:"pointer",position:"relative",left:"17rem "}}/> */}
        </div>
      </div>
    </nav>
    </Container>
    {/* <Dashboard/> */}
   </>
  );
}

export default Navbar;

export const Navbar_User=()=>{
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search with searchTerm value
  };

  return (
    <>
    
    <nav className="navbar card shadow-lg ">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/">
            <img src={logo} alt="Logo" className="navbar-logo"  style={{height:"50px"}}/>
          </a>
        </div>
        <Paper
      component="form"
      className=''
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 450 ,backgroundColor:"#edebeb",gap:"5px"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, backgroundColor:"#D3D3D3" ,borderRadius:"10px",padding:"4px"}}
        placeholder="Search the Product"
        inputProps={{ 'aria-label': 'search' }}
      />
     <Tooltip title="Search🔎" color='#72a2d6' placement="right">
      <IconButton type="button" sx={{ p: '10px',bgcolor:"#3a79b0", }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Tooltip>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
        <div className='nav-left' style={{position:"relative",right:"-10rem" ,  justifyContent: "space-between" }}>
          <img src={cart} style={{cursor:"pointer",position:"relative",}}className='cart'/>
          <Button variant="contained" href="/wishlist" style={{position:"relative",backgroundColor:"tomato",gap:"4px",marginLeft:"30px"}}>
                <FavoriteBorderIcon />
                Wishlist
          </Button>
         <a href='/profile'> <img src={profile}  style={{height:"45px",width:"45px",cursor:"pointer",position:"relative",marginLeft:"30px"}}/></a>
        </div>
      </div>
    </nav>
    {/* <Dashboard/> */}
    </>
  );
}

