import { createBrowserRouter } from "react-router-dom";
import Home from "./src/components/Home";
// import Login from "./src/components/Login";
// import Register from "./src/components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
]);

export default router;
