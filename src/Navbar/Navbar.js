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
        <div className='nav-left'>
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
                          borderRadius: 8, // Adjust the border radius for the TextField
                          '& .MuiFilledInput-root': {
                            borderRadius: 8, // Border radius for the input field when using variant filled
                          },
                        }}
                    />
            </Box>
                <button type="submit" className="navbar-search-btn">
                  <FaSearch />
                </button>
        </form>
        <div className='nav-left'>
          <img src={cart} style={{cursor:"pointer",position:"relative",left:"13rem"}}className='cart'/>
          <Button variant="contained" href="/wishlist" style={{position:"relative",left:"15rem",backgroundColor:"tomato",gap:"4px"}}>
                <FavoriteBorderIcon />
                Wishlist
          </Button>
         <a href='/profile'> <img src={profile}  style={{height:"45px",width:"45px",cursor:"pointer",position:"relative",left:"17rem "}}/></a>
        </div>
      </div>
    </nav>
    {/* <Dashboard/> */}
    </>
  );
}

