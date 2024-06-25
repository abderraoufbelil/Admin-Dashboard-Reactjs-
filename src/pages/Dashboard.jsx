import React from "react";
import Containerlayout from "../components/Containerlayout";
import Mainlayout from "../components/Mainlayout";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import Summary from "../components/Summary";
const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <Containerlayout>
        <Mainlayout>
          <SideBar />
          <Feed />
          <Summary />
        </Mainlayout>
      </Containerlayout>
    </div>
  );
};

export default Dashboard;
