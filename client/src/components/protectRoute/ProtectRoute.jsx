// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectRoute = ({ children, redirectTo = "/" }) => {
  const token = Cookies.get("token");

  if (token) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

export default ProtectRoute;
