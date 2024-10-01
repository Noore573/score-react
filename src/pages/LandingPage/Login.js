import React from "react";
import Scorelogo from "../../assets/scorelogo.png";
import Loginside from "../../assets/loginside.jpg";

const Login = () => {
  return (
    <div className="w-full h-fit flex bg-gradient-to-bl from-white  via-lthird via-80% to-lfourth ">
      <Side1 />
      <Side2 />
    </div>
  );
};

export default Login;

const Side1 = () => {
  return (
    <div className="w-full md:w-1/2 h-screen flex flex-col justify-center md:px-20 px-10  ">
      <img src={Scorelogo} className="object-contain h-40 md:h-70    " />
      <div className="Line flex flex-row justify-center items-center mt-4 ">
        <div className="bg-[#40CCF2] h-1 w-2/6 px-9 mx-3 rounded-l-lg"></div>
        <h1 className="capitalize h-full w-80   font-Rubik text-center text-lg font-bold text-[#40CCF2]">
          Login with email
        </h1>
        <div className="bg-[#40CCF2] h-1 w-2/6 px-9 mx-3 rounded-r-lg "></div>
      </div>
      <div className="TextFields flex justify-center flex-col w-full   ">
        <input
          type="text"
          className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2  "
          placeholder="Email"
        ></input>
        <input
          type="text"
          className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4  my-2  "
          placeholder="Password"
        ></input>
        <div className="Loginbtn flex justify-center items-center  h-1/4 my-2">
          <button className="bg-themeblue2 w-1/2 h-full justify-center text-themeDarkblue1 text-2xl rounded-3xl  hover:bg-themeblue3   ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
const Side2 = () => {
  return (
    <div className="w-1/2 hidden md:block ">
      <img
        src={Loginside}
        className="object-fill rounded-bl-custom-bl h-full shadow-2xl"
      ></img>
    </div>
  );
};
