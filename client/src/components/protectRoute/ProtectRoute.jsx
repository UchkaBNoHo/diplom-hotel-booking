// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectRoute = ({ children, redirectTo = "/" }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

export default ProtectRoute;
