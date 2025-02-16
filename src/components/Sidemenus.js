import React from "react";
import Scorelogo from "../assets/scorelogo.png";
import cameraicon from "../assets/photo-camera.png";
import camerasicon from "../assets/security-camera.png";
import Leaderboardicon from "../assets/ranking.png";
import Employeesicon from "../assets/employees.png";
import Pointsystemicon from "../assets/system.png";
import adminicon from "../assets/admin.png";
import Analyticsicon from "../assets/analytics.png";
import "../styles/tw.css";
import { useNavigate } from "react-router-dom";
const Sidemenus = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("no token");
    }

    try {
      // : make the api request
      const response = await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // 1: handling the response
      const data = await response.json();
      if (!response.ok) {
        console.log(response);
        throw new Error("logout failed");
      } else {
        alert("Logging out...");
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className="display_Sidemenu hover:">
        <img src={Scorelogo} className="object-contain h-24 center flex  " />
        <div className="flex flex-col justify-start">
          <Tab icon={cameraicon} text="Check Employee">
            {" "}
          </Tab>
          <Tab icon={camerasicon} text="Cameras">
            {" "}
          </Tab>
          <Tab icon={Leaderboardicon} text="Leaderboard">
            {" "}
          </Tab>
          <Tab icon={Employeesicon} text="Employees" navigate_to={"/Employees"} navigate={navigate}>
            {" "}
          </Tab>
          <Tab icon={Pointsystemicon} text="Point System">
            {" "}
          </Tab>
          <Tab icon={adminicon} text="Admin">
            {" "}
          </Tab>
          <Tab icon={Analyticsicon} text="Analytics">
            {" "}
          </Tab>
        </div>
        <div className="info absolute bottom-0 flex flex-col justify-start items-start">
          <button className="font-Rubik my-2 display_Sidemenutext2">
            Help
          </button>
          <button className="font-Rubik my-2 display_Sidemenutext2">
            Updated
          </button>
          <button className="font-Rubik my-2 display_Sidemenutext2 "
          onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {/* <div className='display_Sidemenu'>
            <img src={Scorelogo} className="object-contain h-10 center flex   absolute top-0 " />
            <div className='flex flex-col justify-center items-center bg-themeblue2 h-fit rounded-tr-3xl rounded-br-3xl  '>
                <div className='h-fit'>
            <TabIcon icon={cameraicon} text="Check Employee"> </TabIcon>
            <TabIcon icon={camerasicon} text="Cameras"> </TabIcon>
            <TabIcon icon={Leaderboardicon} text="Leaderboard"> </TabIcon>
            <TabIcon icon={Employeesicon} text="Employees"> </TabIcon>
            <TabIcon icon={Pointsystemicon} text="Point System"> </TabIcon>
            <TabIcon icon={adminicon} text="Admin"> </TabIcon>
            <TabIcon icon={Analyticsicon} text="Analytics"> </TabIcon>
                </div>
            </div>

        </div> */}
    </>
  );
};

export default Sidemenus;

const Tab = ({ icon, text,navigate_to,navigate }) => {
  const handleclick=()=>navigate(navigate_to);
  return (
    <div className="display_Sidemenubtn hover:translate-x-3 duration-150 " onClick={handleclick} >
      <img src={icon} className="object-contain h-7 mr-5  " />
      <h2 className="display_Sidemenutext font-Rubik font-semibold text-customsidemenu text-themeDarkblue1 ">
        {text}
      </h2>
    </div>
  );
};
const TabIcon = ({ icon, text }) => {
  return (
    <div className="flex items-center my-14 justify-center bg-red-500  ">
      <img src={icon} className="object-contain h-6  mx-3 " />
    </div>
  );
};
