import React from "react";
import TopBar from "../components/TopBar/TopBar";
import SideBar from "../components/SideBar/SideBar";
import DashBody from "../components/DashBody/DashBody";

const Main = () => {
  return (
    <div>
      <TopBar></TopBar>

      <div className="flex">
        <SideBar></SideBar>
        <DashBody></DashBody>
      </div>
    </div>
  );
};

export default Main;
