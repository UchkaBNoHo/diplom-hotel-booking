import { createContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // console.log(Cookies.get("token"));
  // const token = Cookies.get("token");

  const updateUser = (data) => {
    // if (token) {
    setCurrentUser(data);
    // } else {
    //   setCurrentUser(null);
    //   navigate("/login");
    // }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
