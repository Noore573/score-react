import React from "react";
import Scorelogo from "../../assets/scorelogo.png";
import p1 from "../../assets/p11.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import bluebg from "../../assets/bluebg.jpg";
import "../../styles/welcome.css"
import "../../styles/tw.css";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useInView from "../../hooks/useInView.js"

const Landingpage = () => {
  return (
    <div className="flex flex-col overflow-hidden scrollbar-hide welcome-container "
    
    >
      <Header />
      <Welcome ></Welcome>
      <Preview
        title="Welcome to SCORE"
        description="An AI powerd store management system to track and improve employees
          peformence and actions"
        logo={false}
        image={p1}
      />
      <Preview
        title="Facial Recognation"
        description="Using the newest facial recognation technologies to detect and verify the emplyees at the store "
        logo={false}
        image={p2}
      />
      <Preview
        title="Object detction"
        description="With the help of YOLO we can detect people currently at the store "
        logo={false}
        image={p3}
      />
      <Preview
        title="Activity Detection"
        description="we can detect certain activities at the store and report them back to the system "
        logo={false}
        image={p4}
      />
      <Preview
        title="Points system"
        description="Using the previous technolgies we can assign the approbiate points to the correct employees"
        logo={false}
        image={p5}
      />
    </div>
  );
};

export default Landingpage;

const Header = () => {
  const navigate = useNavigate(); // Instantiate navigate

  const handleLoginnav = () => {
    console.log("login");
    navigate("/login"); // Navigate to the /login path
  };
  return (
    <div className=" flex flex-row h-12 w-full justify-between">
      {/* <img className=" h-full w-14 object-fit" ></img> */}
      <div></div>
      <div className="links flex flex-row  items-center  h-full ">
        <p
          className="ml-5 mr-5 cursor-pointer underline  underline-offset-4 text-[#132t3D] font-semibold hover:text-[#13293db2] hover:underline-offset-8  duration-200 "
          onClick={handleLoginnav}
        >
          Login
        </p>
        <p className="ml-5 mr-5 cursor-pointer underline  underline-offset-4  text-[#132t3D] font-semibold  hover:text-[#13293db2] hover:underline-offset-8 duration-200">
          Contact
        </p>
      </div>
    </div>
  );
};

const Preview = ({ title, description, logo, image }) => {
  const [setRef,inView]=useInView();

  return (
    <div
      className="h-CH2 md:h-CH1 w-full   bg-cover flex flex-col justify-end transition cursor-default  "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.9) ), url(${image}) `,
        backgroundSize:`cover`
      }}
    >
      <motion.div
      ref={setRef}
      initial={{x:"-50%"}}
      animate={inView?{x:0}:{}}
      transition={{type:"easeIn",duration:1}}
      >
      <div className="Underpart h-1/2 w-full ">
        <div className="title h-1/2  uppercase flex flex-row justify-start items-center bg-red font-Bebas_Neue  text-6xl ">
          <h1 className="text-white px-8 sm: w-fit tracking-widest md:text-7xl text-3xl  hover:translate-x-3 duration-200 ">
            {title}
          </h1>
          {logo == true && (
            <img
              className=" h-full w-1/5  md:w-2/4 object-cover    "
              src={Scorelogo}
            ></img>
          )}
        </div>
        <div className="description  flex flex-col h-1/2 px-8 text-white/80  md:text-xl sd:text-lg text-base justify-center uppercase tracking-wider hover:translate-x-3 duration-200    ">
          <h2>{description}</h2>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

const Welcome = () => {
  return (
    <div className=" flex justify-center flex-col items-center w-full h-full mt-8  "
    // style={{
    //   // backgroundImage: ` url(${bluebg}) `,
    //   // backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.9) ), url(${image}) `,
    //   backgroundSize:`cover`
    // }}
    >
        <img className="  flex items-center justify-center w-1/3 h-1/6  " src={Scorelogo}></img>
        <h1 className="font-Bebas_Neue font-extrabold text-6xl pb-14 tracking-widest ">Modernizing Workspace</h1>
        <h1 className="font-Bebas_Neue font-extrabold text-2xl pb-14 animate-bounce ">Explore our app</h1>
    </div>
  );
}


