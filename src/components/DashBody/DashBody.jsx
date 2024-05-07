import React from "react";
import { Outlet } from "react-router-dom";

const DashBody = () => {
  
  return (
    <div className="w-full bg-gray-100">
      <Outlet></Outlet>
    </div>
  );
};

export default DashBody;
