import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import Sidemenus from "../../components/Sidemenus";
import Header from "../../components/Header";
import "../../styles/Employeepage.css";
import avatar from "../../assets/output-onlinegiftools.gif";
import defultavatart from "../../assets/empavatar.png";
import saleicon from "../../assets/colorsale.png";
import { useNavigate } from "react-router-dom";
const EmployeesPage = () => {
  const { user, loading } = useUser();
  const token = localStorage.getItem("token");
  const [error, setError] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState("something");
  const [employees_list, setEmployeeList] = useState([]);
  const [employeeLoading,setemployeeLoading]=useState(true)
  useEffect(() => {
    const fetchEmployeeList = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/employees", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        
        if(!response.ok){
          console.log("error in response ",response)
          throw new Error("error in response")
        }
        
        const result=await response.json()
        setEmployeeList(result.data)
        console.log("🚀 ~ fetchEmployeeList ~ result.data:", result.data)
        
      } catch (error) {
        console.log("🚀 ~ fetchEmployeeList ~ error:", error)
        setError(true)
      }finally{
        setemployeeLoading(false)
      }
    };
    fetchEmployeeList()
  },[]);
  return (
    <div className="flex flex-row bg-gradient-to-bl from-white via-lthird via-80% to-lfourth">
      <Sidemenus />
      <div className="flex flex-col w-full md:h-screen h-fit">
        <Header profilephoto={user?.profile_photo} />
        {loading ? (
          <p>Loading data..</p>
        ) : error ? (
          <p>error</p>
        ) : employeeInfo ? (
          <div className="EmployeesContents  grid grid-cols-1 sm:grid-cols2 lg:grid-cols-4 w-full h-full   gap-5 p-5 overflow-scroll ">
            {/* <EmployeeCard2 /> */}
            {employees_list.map((employee)=>(
              <EmployeeCard2 key={employee.id} employee={employee}/>
            ))}
          </div>
        ) : (
          <p>Nothing to show</p>
        )}
      </div>
    </div>
  );
};

export default EmployeesPage;

const EmployeeCard = () => {
  return (
    <div className="EmployeeCard">
      <div className="avatar flex w-1/2 h-full items-center justify-center">
        <img
          src={avatar}
          className="flex w-2/3 h-2/3 bg-contain  items-center justify-center  "
        ></img>
      </div>
      <div className="emp_info flex flex-col w-1/2 h-full  items-center justify-between py-10">
        <p className="UserinfoText font-extrabold">Noore sadon</p>
        <p className="UserinfoText font-bold">8:00 - 4:00</p>
        <p className="UserinfoText font-bold">Damascus</p>
      </div>
    </div>
  );
};
const EmployeeCard2 = ({employee}) => {
// console.log("🚀 ~ EmployeeCard2 ~ employee:", employee)
// to get the shift
const shift_starts=employee.shift_starts.split(":").slice(0,2).join(":")
const shift_ends=employee.shift_ends.split(":").slice(0,2).join(":")
const navigate=useNavigate()
const handleNavigateToEmpPage=(employee_id)=>{
  console.log(employee_id);
  navigate(`/Employee/${employee_id}`)
}
  return (
    <div className="EmployeeCard2 p-2 cursor-pointer" >
      <div className="first-row flex flex-row justify-between">
        <div className="av bg-green-400 rounded-3xl text-white flex justify-center items-center text-sm p-2 w-4/12 ">
          available
        </div>
        <div className="Emp-id text-themeDarkblue1 flex justify-center items-center text-sm font-bold text-CustomeCard1number pr-1 hover:scale-105">
          #{employee.id}
        </div>
      </div>
      <div className="profile image flex items-center justify-center w-full hover:-translate-y-1 duration-100 " onClick={()=>handleNavigateToEmpPage(employee.id)}>
        {employee.photos[0].includes('via.placeholder')?
        <img
        src={defultavatart}
        alt="Default Avatar"
        className=" h-32 w-32 object-cover  border-themeblue2 border-2 rounded-full"
      />:
        <img
          src={`http://localhost:8000/storage/${employee.photos[0].replace('public/',"")}`}
          alt="Default Avatar"
          className=" h-32 w-32 object-cover  border-themeblue2 border-2 rounded-full"
        />}
      </div>
      <div className="Emp-info flex flex-col items-center justify-center">
        <p className="UserinfoText font-bold">{employee.first_name} {employee.last_name}</p>
        <div className="flex flex-row items-center justify-center ">
          {/* <img src={saleicon} className="bg-cover w-6 h-6 "></img> */}
          <p className="UserinfoText text-green-400 font-light lowercase">
            {employee.department}
          </p>
        </div>
        <p className="UserinfoText font-medium">{shift_starts} - {shift_ends}</p>
      </div>
    </div>
  );
};
