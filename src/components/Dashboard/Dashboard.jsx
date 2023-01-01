import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import Navbar from "./../Sidebar/Navbar";
import DashboardStats from "./DashboardStats";
const Dashboard = () => {
  return (
    <>
      <div className="dashboardContainer">
        <div className="dashboardChild1">
          <Sidebar />
        </div>
        <div className="dashboardChild2">
          <Navbar />
          <DashboardStats />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
