import React from "react";
import Sidemenus from "../components/Sidemenus";
import Header from "../components/Header";
import SidemenuIcon from "../components/Sidemenusicon";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import dayjs from "dayjs";
import "../styles/tw.css"

// const Homepage = () => {
//   return (
//     <div className="flex flex-row bg-gradient-to-bl from-white  via-lthird via-80% to-lfourth">
//       <Sidemenus />

//       {/* <div>
//       <SidemenuIcon />

//       </div> */}
//       <div className="flex flex-col w-full h-screen ">
//         <Header />
//         <div className="MainContents w-full h-full p-5 ">
//           <div className="Row1 flex flex-row w-full h-CustomeContent mb-2">
//             <C1 />
//             <C2 />
//           </div>
//           <div className="Row2 flex flex-row w-full h-CustomeContent  mb-2">
//             <C3 />
//             <C4 />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Homepage = () => {  
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
          <div className="responsive-row">  
            <C3 />  
            <C4 />  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};

export default Homepage;

const C1 = () => {
  return (
    <div className="content_cardsmall flex flex-col">
      <div className="w-4/5 flex  items-center ">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10 ,label:"score1" },
                { id: 1, value: 15,label:"score2" },
                { id: 2, value: 20 ,label:"score3"},
              ],
              highlightScope: { fade: "global", highlight: "item" },
              faded: {
                innerRadius: 10,
                additionalRadius: -10,
                color: "lightblue",
              },
              arcLabelMinAngle: 100,
            },
          ]}
          width={250}
          height={250}
        />
      </div>
      <div className="content_cardsmall_Text">
        <PieText number="341" text="interaction" />
        <div className="h-14 w-CustomeC1 mx-2  bg-black" />
        <PieText number="341" text="interaction" />
        <div className="h-14 w-CustomeC1 mx-2  bg-black" />
        <PieText number="341" text="interaction" />
      </div>
    </div>
  );
};
const C2 = () => {
  const dataset = [
    { x: "January", y: 5000 },
    { x: "February", y: 7000 },
    { x: "March", y: 8000 },
    { x: "April", y: 6000 },
    { x: "May", y: 9000 },
    { x: "June", y: 12000 },
    { x: "July", y: 10000 },
    { x: "August", y: 15000 },
    { x: "September", y: 13000 },
    { x: "October", y: 11000 },
    { x: "November", y: 14000 },
    { x: "December", y: 16000 },
  ];
  const xAxisData = [
    new Date("2023-1"),
    new Date("2023-2"),
    new Date("2023-3"),
    new Date("2023-4"),
    new Date("2023-5"),
    new Date("2023-6"),
    new Date("2023-7"),
    new Date("2023-8"),
    new Date("2023-9"),
    new Date("2023-10"),
    new Date("2023-11"),
    new Date("2023-12"),
  ];
  const seriesData = [
    [
      2304, 3187, 2456, 2890, 3728, 4023, 1999, 3956,
      2789, 3547, 2104, 3599,
    ],
  ];
  return (
    <div className="content_cardlarge">
      <div className="w-full h-fit py-2   flex justify-center items-center">
      <LineChart
        xAxis={[
          {
            // label: "Date",
            data: xAxisData,
            tickInterval: xAxisData,
            scaleType: "time",
            valueFormatter: (date) => dayjs(date).format("MMM D"),
          },
        ]}
        // yAxis={[{ label: "Profit(thousands)" }]}
        series={[
          { label: "Al-Shaalan2", data: seriesData[0] },
          // { label: "Toronto, ON", data: seriesData[1] },
        ]}
        height={300}
        width={700}
      />
      </div>
     
    </div>
  );
};
const C3 = () => {
  return (
    <div className="content_cardsmall">
      <div className="C1Row1 flex flex-row my-2">
        <Card
          type="Customers"
          date="last month"
          number="259"
          percentage="12.1"
          variant="up"
        />
        <Card
          type="Earnings"
          date="last month"
          number="$170,41"
          percentage="22.6"
          variant="up"
        />
      </div>
      <div className="C2Row2 flex flex-row my-2">
        <Card
          type="Growth"
          date="last month"
          number="+21%"
          percentage="1.2"
          variant="up"
        />
        <Card
          type="Total points"
          date="last month"
          number="19K"
          percentage="3"
          variant="down"
        />
      </div>
    </div>
  );
};
const C4 = () => {
  const rows = [
    {
      ID: 1,
      EmployeeName: "John Doe",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
    {
      ID: 2,
      EmployeeName: "Jane Smith",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
    {
      ID: 3,
      EmployeeName: "Michael Johnson",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
    {
      ID: 4,
      EmployeeName: "Emily Davis",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
    {
      ID: 5,
      EmployeeName: "David Brown",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
    {
      ID: 6,
      EmployeeName: "Emma Wilson",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
    {
      ID: 7,
      EmployeeName: "James Taylor",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
    {
      ID: 8,
      EmployeeName: "Olivia Martinez",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
    {
      ID: 9,
      EmployeeName: "William Anderson",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
    {
      ID: 10,
      EmployeeName: "Sophia Thomas",
      JobTitle: "Salesman",
      Salary: "$1500",
      Points: "12k",
    },
  ];

  return (
    <div
      className="content_cardlarge2"
      style={{ scrollbarWidth: "none" }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="font-extrabold">
              <TableCell>ID</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.ID}>
                <TableCell component="th" scope="row">
                  {row.ID}
                </TableCell>
                <TableCell>{row.EmployeeName}</TableCell>
                <TableCell>{row.JobTitle}</TableCell>
                <TableCell>{row.Salary}</TableCell>
                <TableCell>{row.Points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const Card = ({ type, number, variant, date, percentage }) => {
  return (
    <div
      className="Cards
        "
    >
      <h1 className="font-Rubik font-bold text-themeDarkblue2 capitalize    Cardstext_type   ">
        {type}
      </h1>
      <h1 className="font-Rubik font-extrabold text-themeDarkblue2 capitalize Cardstext_number  tracking-wider">
        {number}
      </h1>
      <div className="font-Rubik font-semibold  capitalize Cardstext_perc ">
        {variant == "down" ? (
          <div className="flex flex-row justify-center items-center text-CustomRed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="mx-1 "
            >
              <path
                fill="currentColor"
                d="m12 22l-7-7l1.4-1.425l4.6 4.6V11h2v7.175l4.6-4.575L19 15zM11 9V6h2v3zm0-5V2h2v2z"
              ></path>
            </svg>
            <p className="mx-1">%{percentage}</p>
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center text-Customegreen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="mx-1"
            >
              <path
                fill="currentColor"
                d="M11 5.825L6.4 10.4L5 9l7-7l7 7l-1.4 1.425l-4.6-4.6V13h-2zM11 18v-3h2v3zm0 4v-2h2v2z"
              ></path>
            </svg>
            <p className="mx-1">%{percentage}</p>
          </div>
        )}
      </div>
      <p className="font-Rubik font-semibold  text-themeGray lowercase  Cardstext_date  ">
        {date}
      </p>
    </div>
  );
};

const PieText = ({ text, number }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <h1 className="pietext1 ">
        {number}
      </h1>
      <h1 className="pietext2">{text}</h1>
    </div>
  );
};
