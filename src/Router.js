import React from "react";
import { BrowserRouter, Route, Routes, useNavigate,  } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar, { Navbar_User } from "./Navbar/Navbar";
import Login from "./Login_Page/login";
import Sign_up from "./Login_Page/Sign_up";
import { useEffect,useState } from 'react';
import Whishlist from "./Pages/whishlist";
import Profile from "./Pages/profile";
import Dashboard from "./Pages/dashboard";
import MobileCollections from "./Pages/AllElectronicProduct/Mobiles/MobileCollection";
import Iphone from "./Pages/AllElectronicProduct/Mobiles/All_MobileBrands";
import ProductList from "./Navbar/ProductListBar";
// import Mobile_Axios from "./Pages/AllElectronicProduct/Mobiles/Mobile_Axios";
import Mobile_Iphone from "./Pages/AllElectronicProduct/Mobiles/Mobile_Perticular";

const theme = createTheme({
  typography: {
    fontFamily: "'Times New Roman', Times, serif ",
  },
});


const Router=()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setIsLoggedIn(true);
      }
    }, []);
 
    return(
        <>
        
        <ThemeProvider theme={theme}>
        <BrowserRouter>
        {/* {isLoggedIn ? (  <Navbar_User/> ) : (<Navbar/>)} */}
                < Routes >
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/sign_up" element={<Sign_up/>}/>
                        <Route path="/wishlist" element={<Whishlist/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/mobileCollections" element={<MobileCollections/>}/>
                        <Route path="/Brand_collections/:BrandName" element={<Iphone/>}/>
                        <Route path="/:decodedBrandName/:name" element={<Mobile_Iphone/>} />
                </Routes> 
        </BrowserRouter>
        </ThemeProvider>
        </>
    )
}

export default Router