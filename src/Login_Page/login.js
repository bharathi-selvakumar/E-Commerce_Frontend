import React, { useState,useEffect } from 'react';
import { Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Link ,Alert} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import "./login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const [showPassword, setShowPassword] = useState(false);
  const [succ, setSucc] = useState('');
  const [error, setError] = useState('');
//   const history = useHistory();

    const[login,setLogin]=useState({
        "emailId":"",
        "password":""
    })

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

//   useEffect(()=>{
//     navi("/login_user")
//   },[])


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field ${name} changed to: ${value}`);
    setLogin(prev => ({
        ...prev,
        [name]: value
    }));
};

const navi=useNavigate();

    const handleSubmit=async()=>{

        const{emailId,password}=login;
        if (!emailId.trim() || !password.trim()) {
            setError('EmailId and Password cannot be empty');
            setTimeout(() => {
              setError('');
            }, 3000);
            return;
          }
          localStorage.setItem('user', JSON.stringify(login));
       try{
        const res= await axios.post('http://localhost:2030/login/post', login)
        setSucc(res.data)
        console.log(res.data)
        navi('/'); 
        window.location.reload();
       }
       catch(error){
        // setError(error)
        if (error.response && error.response.status === 404) {
            setError(error.response.data);
            setTimeout(() => {
                setError('');
              }, 3000);
        } else {
            setError('An error occurred logging in');
            setTimeout(() => {
                setError('');
              }, 3000);
        }
         }
    }


    return(
        <>
        <div className="login-background">
        <div className="main-box  shadow-lg ">
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Box
              component="form"
              sx={{
              width: 500,
              maxWidth: '100%',display: 'flex', alignItems: 'flex-end' ,
              mb: 4
            
              }}
               >  
                <AccountCircle sx={{ color: 'action.active',
                                    mr: 1, my: 0.7,
                                    fontSize: 40, 
                                    width: '40px',
                                    height: '40px'}} />
                    <TextField
                         fullWidth
                         id="filled-search"
                         label="EMAIL ID"
                         placeholder="Enter you valid email id"
                        onChange={handleChange}
                        value={login.emailId}
                         type="email"
                         name='emailId'
                         variant="filled"
                    />
        </Box>
        <div style={{display:"flex",alignItems:"flex-end"}}>
        <LockOpenTwoToneIcon sx={{ color: 'action.active',
                                    mr: 1, my: 0.7,
                                    fontSize: 40, 
                                    width: '40px',
                                    height: '40px'}} />
                    <FormControl sx={{ m: 0.4,  width: 450,}} variant="outlined">
                        <InputLabel >Password</InputLabel>
                            <OutlinedInput
                                    onChange={handleChange}
                                    value={login.password}
                                    type={showPassword ? 'text' : 'password'}
                                     variant="filled"
                                     name='password'
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
        <div style={{margin:"70px 0px 10px 110px",display:"flex" ,flexDirection:"column"}}>
                <Button variant="contained" color="primary" sx={{width:"15rem"}} onClick={handleSubmit}>
                LOGIN
                </Button>
                <KeyboardDoubleArrowDownIcon style={{marginLeft:"6.5rem",marginTop:"1rem"}}/>
                <div > 
                   
                   <a href='/sign_up'> <Link   style={{margin:"0px 0px 10px 5.6rem",cursor:"pointer"}}>Sign Up</Link></a>
                    <p style={{margin:"0px 0px 10px 2rem",cursor:"default "}}>You don't have a account</p>
                </div>
        </div>
       
        
        </div>
        </div>
        </>
    )
}

export default Login