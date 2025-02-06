import React from 'react';
import Header from '../components/Header';
import Sidemenus from '../components/Sidemenus';
import "../styles/tw.css"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@mui/material";
const Leaderboard = () => {
    return (
        <div className="flex flex-row bg-gradient-to-bl from-white via-lthird via-80% to-lfourth">  

        <Sidemenus />  
       <div className="flex flex-col w-full md:h-screen h-fit">  
         <Header />  
         <div className="MainContents w-full h-full p-5">  
           <div className="responsive-row">  
             <C1 />  
             <C2 />  
           </div>  
 
         </div>  
       </div>  
     </div>  
    );
}

export default Leaderboard;

const C2 = () => {
    const rows = [
        { ID: 1, EmployeeName: "Harper Thomas", PointsThisMonth: 1701, TotalPoints: 27676 },
        { ID: 2, EmployeeName: "Liam King", PointsThisMonth: 1430, TotalPoints: 56604 },
        { ID: 3, EmployeeName: "Lucas Allen", PointsThisMonth: 2913, TotalPoints: 126486 },
        { ID: 4, EmployeeName: "John Moore", PointsThisMonth: 2038, TotalPoints: 102221 },
        { ID: 5, EmployeeName: "David Taylor", PointsThisMonth: 2760, TotalPoints: 38338 },
        { ID: 6, EmployeeName: "Lucas Wright", PointsThisMonth: 980, TotalPoints: 116905 },
        { ID: 7, EmployeeName: "David Allen", PointsThisMonth: 970, TotalPoints: 123804 },
        { ID: 8, EmployeeName: "Harper Johnson", PointsThisMonth: 1616, TotalPoints: 145639 },
        { ID: 9, EmployeeName: "Liam Allen", PointsThisMonth: 2460, TotalPoints: 112812 },
        { ID: 10, EmployeeName: "Harper Lee", PointsThisMonth: 2910, TotalPoints: 127794 },
        { ID: 11, EmployeeName: "Isabella Martinez", PointsThisMonth: 1634, TotalPoints: 138841 },
        { ID: 12, EmployeeName: "Mia Wilson", PointsThisMonth: 1554, TotalPoints: 9692 },
        { ID: 13, EmployeeName: "Jane Wright", PointsThisMonth: 788, TotalPoints: 74270 },
        { ID: 14, EmployeeName: "William Clark", PointsThisMonth: 1479, TotalPoints: 91595 },
        { ID: 15, EmployeeName: "Lucas Lewis", PointsThisMonth: 2475, TotalPoints: 46587 },
        { ID: 16, EmployeeName: "Ethan Anderson", PointsThisMonth: 1999, TotalPoints: 34296 },
        { ID: 17, EmployeeName: "Mason Davis", PointsThisMonth: 634, TotalPoints: 105560 },
        { ID: 18, EmployeeName: "Emma Brown", PointsThisMonth: 2891, TotalPoints: 84363 },
        { ID: 19, EmployeeName: "Noah Young", PointsThisMonth: 511, TotalPoints: 63723 },
        { ID: 20, EmployeeName: "Sophia Lewis", PointsThisMonth: 1021, TotalPoints: 79372 },
        { ID: 21, EmployeeName: "Amelia White", PointsThisMonth: 2820, TotalPoints: 89653 },
        { ID: 22, EmployeeName: "John Brown", PointsThisMonth: 1761, TotalPoints: 76421 },
        { ID: 23, EmployeeName: "Ethan White", PointsThisMonth: 1242, TotalPoints: 67894 },
        { ID: 24, EmployeeName: "Emily Wilson", PointsThisMonth: 634, TotalPoints: 105560 },
        { ID: 25, EmployeeName: "Mia Clark", PointsThisMonth: 1225, TotalPoints: 12974 },
        { ID: 26, EmployeeName: "Olivia Lee", PointsThisMonth: 2490, TotalPoints: 143130 },
        { ID: 27, EmployeeName: "Michael Moore", PointsThisMonth: 845, TotalPoints: 116515 },
        { ID: 28, EmployeeName: "David Lewis", PointsThisMonth: 1445, TotalPoints: 32913 },
        { ID: 29, EmployeeName: "Emma Martinez", PointsThisMonth: 779, TotalPoints: 40139 },
        { ID: 30, EmployeeName: "Emily King", PointsThisMonth: 1673, TotalPoints: 116790 },
        { ID: 31, EmployeeName: "William Clark", PointsThisMonth: 521, TotalPoints: 110379 },
        { ID: 32, EmployeeName: "Michael Davis", PointsThisMonth: 805, TotalPoints: 11297 },
        { ID: 33, EmployeeName: "Sophia Allen", PointsThisMonth: 650, TotalPoints: 76805 },
        { ID: 34, EmployeeName: "John Johnson", PointsThisMonth: 2435, TotalPoints: 1100 },
        { ID: 35, EmployeeName: "Emma Brown", PointsThisMonth: 750, TotalPoints: 28874 },
        { ID: 36, EmployeeName: "Olivia Wright", PointsThisMonth: 2449, TotalPoints: 70639 },
        { ID: 37, EmployeeName: "Ava Anderson", PointsThisMonth: 2784, TotalPoints: 115460 },
        { ID: 38, EmployeeName: "Olivia Allen", PointsThisMonth: 1872, TotalPoints: 77541 },
        { ID: 39, EmployeeName: "Olivia Lewis", PointsThisMonth: 2880, TotalPoints: 9840 },
        { ID: 40, EmployeeName: "Sophia Lee", PointsThisMonth: 1042, TotalPoints: 115919 }
      ];
      
    return (
        <div className='w-1/2 h-CH1 mx-1  bg-white rounded-xl shadow-lg mx-1 flex flex-col justify-center items-center'>
             <div
      className="content_cardlarge2 w-full"
      style={{ scrollbarWidth: "none" }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="font-extrabold">
              {/* <TableCell>ID</TableCell> */}
              <TableCell>Employee Name</TableCell>
              <TableCell>Points This Month</TableCell>
              <TableCell>Total Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.ID}>
                {/* // <TableCell component="th" scope="row">
                //   {row.ID}
                // </TableCell> */}
                <TableCell>{row.EmployeeName}</TableCell>
                <TableCell>{row.PointsThisMonth}</TableCell>
                <TableCell>{row.TotalPoints}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
        </div>
    );
}
const C1 = () => {
    return (
        <div className='w-1/2 h-CH1 mx-1  bg-white rounded-xl shadow-lg mx-1 flex flex-col justify-center items-center '>
            
        </div>
    );
}
