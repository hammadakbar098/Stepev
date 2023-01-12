import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import Navbar from "./../Sidebar/Navbar";
import DashboardStats from "./DashboardStats";
import Users from "./../Users/Users";
import UserProfile from "../Users/UserProfile";
import Campaigns from "../Campaigns/Campaigns";

const Dashboard = () => {
  return (
    <>
      <div className="dashboardContainer">
        <div className="dashboardChild1">
          <Sidebar />
        </div>
        <div className="dashboardChild2">
          <Navbar />
          {/* <DashboardStats /> */}

          {/* <Users /> */}
          {/* <UserProfile /> */}
          <Campaigns />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
