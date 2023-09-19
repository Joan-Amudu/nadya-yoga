import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, Tuesday,Thursday, Friday, Saturday, Sunday) {
  return { name, Tuesday, Thursday, Friday, Saturday, Sunday };
}

const rows = [
  createData('9 AM', 'Vinyasa(Flow)', 'Prenatal', 'Vinyasa', 'Vinyasa', ' Community Class' ),
  createData('4:30 PM', 'Vinyasa(Flow)', 'Prenatal', 'Vinyasa', 'Vinyasa', ' Community Class'),
 
];

export default function Timetable() {
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
            
            <TableCell align="right">Tuesday</TableCell>
           
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Sunday</TableCell>
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
              
              <TableCell align="right">{row.Tuesday}</TableCell>
              
              <TableCell align="right">{row.Thursday}</TableCell>
              <TableCell align="right">{row.Friday}</TableCell>
              <TableCell align="right">{row.Saturday}</TableCell>
              <TableCell align="right">{row.Sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
}