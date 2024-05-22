import { createBrowserRouter } from "react-router-dom";
import Home from "./src/components/Home";
import Hotel_List from "./src/components/Hotel_List";
import Single_hotel from "./src/components/Single_hotel";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import { listPageLoader } from "./src/lib/dataLoader";
import Profile from "./src/components/Profile/Profile";
import ProtectRoute from "./src/components/protectRoute/ProtectRoute";
// import Login from "./src/components/Login";
// import Register from "./src/components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hotel_list",
    element: <Hotel_List />,
    loader: listPageLoader,
  },
  {
    path: "/single_hotel",
    element: <Single_hotel />,
  },
  {
    path: "/login",
    element: (
      <ProtectRoute>
        <Login />
      </ProtectRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectRoute>
        <Register />
      </ProtectRoute>
    ),
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default router;
