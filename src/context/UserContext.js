import { createContext, useContext, useState,useEffect } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("no token");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data);
          // console.log("🚀 ~ fetchUserData ~ data:", data)
          
        } else {
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error(error);
      } finally {
        console.log("loading done");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  return(
    <UserContext.Provider value={{user,setUser,loading}}>
        {children}
    </UserContext.Provider>
  )
};
export const useUser=()=>useContext(UserContext)