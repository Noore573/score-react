import React, { useState } from "react";
import Scorelogo from "../../assets/scorelogo.png";
import Loginside from "../../assets/loginside.jpg";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
// import { json } from "react-router-dom";

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
  const navigate=useNavigate()
  const[email,setEmail]=useState("");
  const[Password,setPassword]=useState("");
  const[error,setError]=useState(""); //for storing error messages

  const handleLogin=async()=>{
    setError("") //this will clear previous error message
    // 1: valida input
    if (!email||!Password){
      setError("Please enter email and password")
      return
    }
    console.log(email,Password);
    try {
      // 2: make the api request
      const response=await fetch("http://127.0.0.1:8000/api/login",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: Password
        })
      });

      // 3: handling the response 
      const data=await response.json();
      if(!response.ok){
        console.log(response);
        throw new Error("login failed")
      }

      // 4:store the tokes
      localStorage.setItem("token",data.token)
      console.log(data);
      // alert("Login successful")
      navigate("/home")


    } catch (error) {
      setError(error.message)
      alert(error.message)
      
    }

  }
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
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4  my-2  "
          placeholder="Password"
          value={Password}
          onChange={(e)=>setPassword(e.target.value)}
        ></input>
        {error && <p className="text-red-500">{error}</p>}
        <div className="Loginbtn flex justify-center items-center  h-1/4 my-2">
          <button className="bg-themeblue2 w-1/2 h-full justify-center text-themeDarkblue1 text-2xl rounded-3xl  hover:bg-themeblue3   "
          onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
// const Side2 = () => {
//   return (
//     <div className="w-1/2 hidden  md:block ">
//       <img
//         src={Loginside}
//         className="object-fill rounded-bl-custom-bl h-full shadow-2xl"
//       ></img>
//     </div>
//   );
// };
const Side2 = () => {
  return (
    <motion.div
      className="w-1/2 hidden md:block"
      initial={{ x: "50%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Slide in to the original position
      transition={{ type: "easeIn", duration: 1 }} // Animation duration and easing
    >
      <img
        src={Loginside}
        className="object-fill rounded-bl-custom-bl h-full shadow-2xl"
        alt="Login Side"
      />
    </motion.div>
  );
};
