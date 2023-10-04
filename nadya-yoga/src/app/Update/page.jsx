'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation'

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
    const handleSubmit = (event) => {
        event.preventDefault();
        
  };

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <Typography component="h1" variant="h5">
            Update Client Details
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <TextField margin="normal" fullWidth required name="fName" label="First Name" />
            <TextField margin="normal" fullWidth required name="lName" label="Last Name" />
            <TextField margin="normal" fullWidth required name="Email" label="Email" />
            <TextField margin="normal" fullWidth required name="Phone" label="Phone" />
                       
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