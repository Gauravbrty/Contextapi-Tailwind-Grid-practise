import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import "./loginPage.css"
import { useScrollTrigger } from '@mui/material';
import  Axios  from 'axios';

const LoginPage = () => {
    const [userData,setUserData] = useState({
        firstName:"",
        email:"",
        mobile:"",
        company:"",
        position:"",

    });
    console.log(userData,"userData");
    const handleChange = (evt) => {
        const value = evt.target.value;
        setUserData({
            ...userData,
            [evt.target.name]: value
          });
    }
    // const handleSubmit = () => {
    //     return(
    //     Axios.post('http://localhost:5000/signup',{...userData}).then((res)=>{
    //         console.log("response sent");
    //     })
    //     )
    // }

    return(
        <div>
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
      <Typography className='CardContent' variant="h5" component="div">
          SignUp
        </Typography>
        <div className='CardContent'>
        <TextField id="outlined-basic" label="Name" variant="outlined" name='firstName' onChange={handleChange}/>
        </div>
        <div className='CardContent'>
        <TextField id="outlined-basic" label="Email" variant="outlined" name='email' onChange={handleChange} />
        </div>
        <div className='CardContent'>
        <TextField id="outlined-basic" label="Mobile" variant="outlined" name='mobile' onChange={handleChange}/>
        </div>
        <div className='CardContent'>
        <TextField id="outlined-basic" label="Company" variant="outlined" name='company' onChange={handleChange} />
        <div className='CardContent'>
        <TextField id="outlined-basic" label="Position" variant="outlined" name='position' onChange={handleChange} />
        </div>
        </div>
        <div className='CardContent'>
        <Button variant="contained" 
        // onClick={handleSubmit}
        >SignUp</Button>
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
        </div>
    )
}

export default LoginPage;