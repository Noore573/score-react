import React, { useState } from "react";
import notificationicon from "../assets/notification.png";
import settingicon from "../assets/setting.png";
import profilephoto from "../assets/profilephoto1.jpg";
import defultavatart from "../assets/user-gear.png";
import "../styles/Header.css";

const Header = (profilephoto) => {
  // console.log("🚀 ~ Header ~ profilephoto:", profilephoto);
  return (
    <div className="h-12  w-full flex flex-row px-5 mt-2  justify-center">
      <div className="w-5/6 px-1 py-2 ">
        <Searchbar />
      </div>
      <div className="py-1 flex flex-row  justify-around ">
        <Icon icon={notificationicon} />
        <Icon icon={settingicon} />
        <Profile photo={profilephoto} username={"nooresadon"} />
      </div>
    </div>
  );
};

export default Header;
const Icon = ({ icon }) => {
  return (
    <div>
      <img
        src={icon}
        className="h-9 object-contain pt-1 mx-5 cursor-pointer hover:rotate-45  transition duration-200"
      ></img>
    </div>
  );
};
const Searchbar = (icon) => {
  return (
    <input type="text" className="searchbar" placeholder="Search.."></input>
  );
};
const Profile = ({ photo, username }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleImageLoad = () => {
    setLoading(false);
  };
  const handleImageError = () => {
    setError(true);
    setLoading(false);
  };  
  const photopath = `http://localhost:8000/storage/${photo.profilephoto}`;
  return (
    <div className="flex flex-row items-center">
      {/* Username */}
      {/* <h2 className='font-Rubik text-themeDarkblue1 text-Customusername font-semibold mx-1'>@{username}</h2> */}

      <div className="ProfileAvatar rounded-custom-circle h-14 w-14  bg-gray-300 overflow-hidden border-2 border-themeblue2 flex items-center justify-center">
        {loading && (
          <div className="animate-pulse bg-gray-400 h-full w-full"></div>
        )}

        {!error ? (
          <img
            src={photopath}
            alt="User Profile"
            className={`h-full w-full object-cover cursor-pointer  ${
              loading ? "hidden" : ""
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <img
            src={defultavatart}
            alt="Default Avatar"
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};
