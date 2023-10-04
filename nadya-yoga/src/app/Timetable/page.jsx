'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(name, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Action) {
  return { name, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Action};
}

const rows = [
  createData('9 AM', 'No Classs', 'Vinyasa(Flow)', 'No Class', 'Prenatal', 'Vinyasa', 'Vinyasa', ' Community Class' ),
  createData('4:30 PM', '', 'Vinyasa(Flow)', '', 'Prenatal', 'Vinyasa', 'Vinyasa', ' Community Class'),
 
];

export default function Timetable() {
  const router = useRouter()
  return (
    <div>
        <h2>Weekly Schedule</h2>
        <p>No need to book in advance, just show up and pay at the front. Our lovely receptionist will welcome you</p>
        <p>Please arrive 15 mins before class so as to get settled in</p>
        <p>All our classes are 1 hour</p>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>           
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Sunday</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell>
              <Button
                variant="outlined"
                color="success"
                onClick={() => router.push('/Create')}>
                  Add
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              
              <TableCell align="right">{row.Monday}</TableCell>
              <TableCell align="right">{row.Tuesday}</TableCell>
              <TableCell align="right">{row.Wednesday}</TableCell>              
              <TableCell align="right">{row.Thursday}</TableCell>
              <TableCell align="right">{row.Friday}</TableCell>
              <TableCell align="right">{row.Saturday}</TableCell>
              <TableCell align="right">{row.Sunday}</TableCell>

              <TableCell>
                <Button variant="outlined" color="success" onClick={() => router.push('/Update')}>Update</Button>
                <Button variant="outlined" color="error">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
}