import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Income from "../Page/Income/Income";
import Loan from "../Page/Loan/Loan";
import Cost from "../Page/Cost/Cost";
import Report from "../Page/Report/Report";
import Profile from "../Page/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
    ],
  },
]);

export default router;
