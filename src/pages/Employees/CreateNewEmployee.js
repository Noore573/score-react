import React, { useState, useEffect } from "react";
import Sidemenus from "../../components/Sidemenus";
import Header from "../../components/Header";
import SidemenuIcon from "../../components/Sidemenusicon";
import Loading from "../../components/loading";
import "../../styles/tw.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import scoreLogo from "../../assets/scorelogo.png";

const CreateNewEmployee = () => {
  const { user, loading } = useUser();
  const [panel_window, setpanelwindow] = useState(0);
  const [image, setImage] = useState(null);
  const [EmployeeInfo, setEmployeeInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    birthdate: "",
    salary: "",
    position: "",
    phone_number: "",
    shift_starts: "",
    shift_ends: "",
    department: "",
    info_description:"idk",
    
  });

  if (loading) return <Loading />;
  const handleActivePanelWindow = (active) => {
    setpanelwindow(active);
    console.log("🚀 ~ handleActivePanelWindow ~ panel_window:", panel_window);
  };
  const handleChange=(event)=>{
    const {name,value}=event.target
    // console.log("hh",name," - ",value);
    setEmployeeInfo((prevState)=>({
      ...prevState,
      [name]:value, 
    }))
  }
  return (
    <div className="flex flex-row bg-gradient-to-bl from-white via-lthird via-80% to-lfourth">
      <Sidemenus />

      <div className="flex flex-col w-full md:h-screen h-fit">
        <Header profilephoto={user?.profile_photo} />
        <div className="MainContents w-full h-full p-16 ">
          <div className=" h-full w-full rounded-lg  bg-white flex flex-col items-center ">
            <img
              className="  flex items-center justify-center w-1/12 h-1/6 "
              src={scoreLogo}
            ></img>
            <div className="panel w-11/12 h-2/12   bg-themeblue2   rounded-xl flex flex-row items-center justify-between">
              <div
                className={`basic_employee_info w-1/3 h-full flex flex-row items-center justify-center font-bold text-lg cursor-pointer px-3 ${
                  panel_window === 0 ? "text-white " : "text-themeDarkblue2"
                }`}
                onClick={() => handleActivePanelWindow(0)}
              >
                Basic info
              </div>
              <div
                className={`employee_work_info w-1/3 h-full flex flex-row items-center justify-center font-bold text-lg cursor-pointer px-3 ${
                  panel_window === 1 ? "text-white " : "text-themeDarkblue2"
                }`}
                onClick={() => handleActivePanelWindow(1)}
              >
                Work details
              </div>
              <div
                className={`employee_pic w-1/3 h-full flex flex-row items-center justify-center font-bold text-lg cursor-pointer px-3 ${
                  panel_window === 2 ? "text-white " : "text-themeDarkblue2"
                }`}
                onClick={() => handleActivePanelWindow(2)}
              >
                Profile picture
              </div>
            </div>
            <div>
              {panel_window == 0 ? (
                <BasicInfo EmployeeInfo={EmployeeInfo} handleChange={handleChange} />
              ) : panel_window == 1 ? (
                <Workdetails EmployeeInfo={EmployeeInfo} handleChange={handleChange} />
              ) : (
                <ProfilePic image={image} setImage={setImage} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewEmployee;

const BasicInfo = ({EmployeeInfo,handleChange}) => {
  return (
    <div className="Emp_inputs p-9 ">
      <div className="name flex flex-row justify-between">
        <input
          type="text"
          className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2 mr-2"
          placeholder="first name"
          name="first_name" 
          value={EmployeeInfo.first_name}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2 ml-2"
          placeholder="last name"
          name="last_name" 
          value={EmployeeInfo.last_name}
          onChange={handleChange}
        ></input>
      </div>
      <input
        type="text"
        className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2  "
        placeholder="email"
        name="email" 
        value={EmployeeInfo.email}
        onChange={handleChange}
      ></input>

      <input
        type="text"
        className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2  "
        placeholder="password"
        name="password" 
        value={EmployeeInfo.password}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2  "
        placeholder="address"
        name="address" 
        value={EmployeeInfo.address}
        onChange={handleChange}
      ></input>
      <input
        type="date"
        className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2  "
        placeholder="Birthdate"
        name="birthdate" 
        value={EmployeeInfo.birthdate}
        onChange={handleChange}
      ></input>
    </div>
  );
};

const Workdetails = ({EmployeeInfo,handleChange}) => {
  return (
    <div className="Emp_inputs p-9 ">
 
      <input
        type="text"
        className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2  "
        placeholder="salary"
        name="salary" 
        value={EmployeeInfo.salary}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2  "
        placeholder="position"
        name="position" 
        value={EmployeeInfo.position}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2  "
        placeholder="Phonenumber"
        name="phone_number" 
        value={EmployeeInfo.phone_number}
        onChange={handleChange}
      ></input>
      <div className="shift flex flex-row justify-between">
        <input
          type="text"
          className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2 mr-2"
          placeholder="shift start "
          name="shift_starts" 
          value={EmployeeInfo.shift_starts}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2 ml-2"
          placeholder="shift end"
          name="shift_ends" 
          value={EmployeeInfo.shift_ends}
          onChange={handleChange}
        ></input>
      </div>
      <input
        type="text"
        className="w-full h-14 outline-none border-2 border-themeblue1 rounded-3xl text-[#4E5F6E] pl-4 my-2  "
        placeholder="Department"
        name="department" 
        value={EmployeeInfo.department}
        onChange={handleChange}
      ></input>
    </div>
  );
};
const ProfilePic = ({ image, setImage }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Convert file to URL
      setImage(imageUrl);
    }
  };

  return (
    <div className="flex items-center justify-center h-[300px]">
      <label className="w-48 h-48 flex items-center justify-center border-2 border-gray-300 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition">
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-600">Click to upload</span>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};
