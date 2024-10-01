import React from 'react';
import notificationicon from "../assets/bell.png";
import settingicon from "../assets/setting.png";
import profilephoto from "../assets/profilephoto1.jpg";
import "../styles/Header.css"
const Header = () => {
    return (
        <div className='h-12  w-full flex flex-row px-5  justify-center'>
        <div className='w-5/6 px-1 py-2 '>
        <Searchbar/>
        </div>
        <div className='py-1 flex flex-row  justify-around '>
        <Icon icon={notificationicon}/>
        <Icon icon={settingicon}/>
        <Profile photo={profilephoto} username={"nooresadon"}/>
        </div>
        </div>
    );
}

export default Header;
const Icon = ({icon}) => {
    return (
        <div>
            <img src={icon} className='h-9 object-contain pt-1'></img>
        </div>
    );
}
const Searchbar = (icon) => {
    return (
        <input type='text'  className='searchbar' placeholder='Search..' >
        
        </input>
    );
}
const Profile = ({photo,username}) => {
    return (
        <div className='flex flex-row items-center '>
            {/* <h2 className='font-Rubik text-themeDarkblue1 text-Customusername font-semibold mx-1'>@{username}</h2> */}
            <div className='ProfileAvatar rounded-custom-circle h-full w-full bg-red-500 overflow-hidden border-2 border-themeDarkblue1'> 
            <img src={photo} className='h-full object-cover'></img>
            </div>
        </div>
    );
}





