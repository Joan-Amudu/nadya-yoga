'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation'
import {useState} from 'react';
import axios from 'axios'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//https://github.com/mui/material-ui/blob/v5.14.10/docs/data/material/getting-started/templates/sign-in/SignIn.js

const defaultTheme = createTheme();

export default function Create() {
    const router = useRouter()
    const [fname, setfName] = useState()
    const [lname, setlName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/Create", {fname, lname, email, phone})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        
  };

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Typography component="h1" variant="h5">
            Add New Client
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <TextField 
              margin="normal" 
              fullWidth required 
              name="fName" 
              label="First Name" 
              onChange={(e)  => setfName(e.target.value)}/>
            <TextField 
              margin="normal" 
              fullWidth required 
              name="lName" 
              label="Last Name"
              onChange={(e)  => setlName(e.target.value)} />
            <TextField 
              margin="normal" 
              fullWidth required 
              name="Email" 
              label="Email" 
              onChange={(e)  => setEmail(e.target.value)}/>
            <TextField 
              margin="normal" 
              fullWidth required 
              name="Phone" 
              label="Phone" 
              onChange={(e)  => setPhone(e.target.value)}/>
                       
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
              onClick={() => router.push('/Admin')}>
              Add
            </Button>           
          </Box>
        </Box>      
      </Container>
    </ThemeProvider>
  );
}