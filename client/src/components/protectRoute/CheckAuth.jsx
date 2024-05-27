import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return !!Cookies.get("token");
};

// eslint-disable-next-line react/prop-types
const CheckAuth = ({ element, path }) => {
  return isAuthenticated() ? [path, element] : <Navigate to="/login" replace />;
};

export default CheckAuth;
