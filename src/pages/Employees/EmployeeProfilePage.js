import React from "react";
import Sidemenus from "../../components/Sidemenus";
import Header from "../../components/Header";
import "../../styles/Employeepage.css";
import "../../styles/tw.css";
import profilephoto from "../../assets/profilepage2.jpg";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { lightBlue } from "@mui/material/colors";

const EmployeeProfilePage = () => {
  const Userinfo = [
    "Noore sabah",
    "Damascus",
    "0962298023",
    "21/5/2021",
    "8am - 5pm",
  ];
  return (
    <div className="flex flex-row bg-gradient-to-bl from-white via-lthird via-80% to-lfourth">
      <Sidemenus />
      <div className="flex flex-col w-full md:h-screen h-fit">
        <Header />
        <div className="MainContents w-full h-full p-5">
          <div className="responsive-row">
            <C1
              photo={profilephoto}
              username={Userinfo[0]}
              city={Userinfo[1]}
              number={Userinfo[2]}
              date={Userinfo[3]}
              shift={Userinfo[4]}
            />
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

export default EmployeeProfilePage;

const C1 = ({ photo, username, city, number, date, shift }) => {
  return (
    <div className=" ECard1 flex flex-row ">
      <div className="ProfileAvatar rounded-custom-circle h-52 w-52 bg-red-500 overflow-hidden ">
        <img src={photo} className="h-full object-cover"></img>
      </div>
      <div className="Userinfo flex flex-col mx-6  ">
        <h2 className="UserinfoText">{username}</h2>
        <h2 className="UserinfoText">{city}</h2>
        <h2 className="UserinfoText">{number}</h2>
        <h2 className="UserinfoText">{date}</h2>
        <h2 className="UserinfoText">{shift}</h2>
      </div>
    </div>
  );
};
const C2 = () => {
  return (
    <div className="ECard2">
      <div className="w-4/5 flex  items-center ">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "score1" },
                { id: 1, value: 15, label: "score2" },
                { id: 2, value: 20, label: "score3" },
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
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};
const C3 = () => {
  const Pointsinfo = [
    ["Total Points", "30,000", "up", "12.5"],
    ["This month", "5900", "up", "2.1"],
    ["Today", "850", "down", "0.2"],
    ["Services", "39", "up", "70"],
  ];

  return (
    // <div className="ECard3">
    //     {Pointsinfo.map((pi)=>{
    //         <PointCard
    //     title={pi[0]}
    //     number={pi[1]}
    //     type={pi[2]}
    //     percentage={pi[3]}
    //   />
    //     })}

    // </div>
    <div className="ECard3">
      {Pointsinfo.map((pi, index) => (
        <PointCard
          key={index}
          title={pi[0]}
          number={pi[1]}
          type={pi[2]}
          percentage={pi[3]}
        />
      ))}
    </div>
  );
};
const C4 = () => {
  const dataMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dataPoints = [
    15400, 7200, 12500, 9800, 11000, 14500, 16300, 8300, 16900, 13000, 20000,
    5400,
  ];
  return (
    <div className=" ECard4">
      <div className="w-full h-fit py-2   flex justify-center items-center">
      <BarChart  

  xAxis={[{   
      scaleType: "band",   
      data: dataMonth,  
      label: "Months",   
      tickCount: 12  , 
      

  
  }]}  
  yAxis={[{   
      scaleType: "linear",   
      domain: [0, 20000],  
      // label: "Values",   
      tickCount: 5   
  }]}  
  series={[{   
      data: dataPoints,   
      fill: "#fcba03",
      name: "Monthly Data"   
  }]}  
  // width={500}  
  height={300}  
  // showLegend={true}  
  // grid={true}  
  animationDuration={500}  
  borderRadius={5}
/>
      </div>
    </div>
  );
};

const PointCard = ({ title, number, type, percentage }) => {
  return (
    <div className="PointCard flex flex-row justify-center items-center   w-1/2 ">
      <div className="pointcardtextContainer h-PCTCh1 w-PCH1 flex flex-col items-center justify-center  ">
        <h1 className="font-Rubik font-bold  pointcard  text-themeDarkblue1">
          {title}
        </h1>
        <h1 className="font-Rubik font-semibold text-themeDarkblue1 pointcard">
          {number}
        </h1>
      </div>
      {type == "up" ? (
        <div className="up  w-PCH1 h-PCTCh1 flex flex-row justify-start items-center  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4vw"
            height="4vh"
            viewBox="0 0 24 24"
          >
            <path
              fill="green"
              d="M2.7 17.625q-.3-.3-.288-.712t.288-.688l5.275-5.35Q8.55 10.3 9.4 10.3t1.425.575l2.575 2.6l5.2-5.15H17q-.425 0-.712-.288T16 7.326t.288-.712t.712-.288h4q.425 0 .713.288t.287.712v4q0 .425-.288.713t-.712.287t-.712-.287t-.288-.713v-1.6L14.825 14.9q-.575.575-1.425.575t-1.425-.575L9.4 12.325l-5.3 5.3q-.275.275-.7.275t-.7-.275"
            ></path>
          </svg>
          <p className="font-Rubik font-medium text-green-700 text-sm">
            %{percentage}
          </p>
        </div>
      ) : (
        <div className="down  w-PCH1 h-PCTCh1 flex flex-row justify-start items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4vw"
            height="4vh"
            viewBox="0 0 24 24"
          >
            <path
              fill="red"
              d="m18.6 16l-5.2-5.15l-2.575 2.575Q10.25 14 9.4 14t-1.425-.575L2.7 8.1q-.275-.275-.288-.687T2.7 6.7q.275-.275.7-.275t.7.275L9.4 12l2.575-2.575q.575-.575 1.425-.575t1.425.575L20 14.6V13q0-.425.288-.712T21 12t.713.288T22 13v4q0 .425-.288.713T21 18h-4q-.425 0-.712-.288T16 17t.288-.712T17 16z"
            ></path>
          </svg>
          <p className="font-Rubik text-sm font-medium text-red-500">
            %{percentage}
          </p>
        </div>
      )}
    </div>
  );
};
