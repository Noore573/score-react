import React from 'react';
import Scorelogo from "../assets/scorelogo.png";
import cameraicon from "../assets/photo-camera.png";
import camerasicon from "../assets/security-camera.png";
import Leaderboardicon from "../assets/ranking.png";
import Employeesicon from "../assets/employees.png";
import Pointsystemicon from "../assets/system.png";
import adminicon from "../assets/admin.png";
import Analyticsicon from "../assets/analytics.png";


const SidemenuIcon = () => {
    return (
        <div className='h-screen w-fit flex flex-col  justify-center  '>
            <img src={Scorelogo} className="object-contain h-10 center flex   absolute top-0 " />
            <div className='flex flex-col justify-center items-center bg-themeblue2 h-fit rounded-tr-3xl rounded-br-3xl  '>
                <div className='h-fit'>
            <Tab icon={cameraicon} text="Check Employee"> </Tab>
            <Tab icon={camerasicon} text="Cameras"> </Tab>
            <Tab icon={Leaderboardicon} text="Leaderboard"> </Tab>
            <Tab icon={Employeesicon} text="Employees"> </Tab>
            <Tab icon={Pointsystemicon} text="Point System"> </Tab>
            <Tab icon={adminicon} text="Admin"> </Tab>
            <Tab icon={Analyticsicon} text="Analytics"> </Tab>
                </div>
            </div>

        </div>
    );
}

export default SidemenuIcon;

const Tab = ({icon,text}) => {
    return (
        <div className='flex flex-row items-center my-14 justify-center  '>
            <img src={icon} className="object-contain h-7 mx-3 " />
            
        </div>
    );
}

