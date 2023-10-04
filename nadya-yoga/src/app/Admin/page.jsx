'use client'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email',headerName: 'Email', type: 'email', width: 160,},
    { field: 'phone', headerName: 'Phone', type: 'number', width: 160,},
  
  ];
  

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'jon.snow@gmail.com', phone: 12345678 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'jon.snow@gmail.com', phone: 12345678 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'jon.snow@gmail.com', phone: 12345678 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'jon.snow@gmail.com', phone: 12345678 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'jon.snow@gmail.com', phone: 12345678 },
  { id: 6, lastName: 'Melisandre', firstName: null, email: 'jon.snow@gmail.com', phone: 12345678 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'jon.snow@gmail.com', phone: 12345678},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'jon.snow@gmail.com', phone: 12345678 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'jon.snow@gmail.com', phone: 12345678 },
];

export default function Admin() {
    const router = useRouter()
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns}/>      
      <Button variant="outlined" color="success" onClick={() => router.push('/Create')}>Add Client</Button>
      <Button variant="outlined" onClick={() => router.push('/Update')}>Update</Button>
      <Button variant="outlined" color="error" >Delete</Button>

    </div>
  );
}