import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import DataProvider from "./Provider/DataProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </DataProvider>
  </React.StrictMode>
);
