import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Income from "../Page/Income/Income";
import Loan from "../Page/Loan/Loan";
import Cost from "../Page/Cost/Cost";
import Report from "../Page/Report/Report";
import Profile from "../Page/Profile/Profile";
import Users from "../Page/Users/Users";
import CreateUser from "../Page/CreateUser/CreateUser";
import LoginUser from "../Page/LoginUser/LoginUser";
import Dashboard from "../Page/Dashboard/Dashboard";
import Home from "../Page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "income",
        element: <Income></Income>,
      },
      {
        path: "loan",
        element: <Loan></Loan>,
      },
      {
        path: "cost",
        element: <Cost></Cost>,
      },
      {
        path: "reports",
        element: <Report></Report>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      },
    ],
  },
  {
    path:"/users",
    element: <Users></Users>
  },
  {
    path:"/create-user",
    element: <CreateUser></CreateUser>
  },
  {
    path:"/login-user",
    element: <LoginUser></LoginUser>
  }
]);

export default router;
