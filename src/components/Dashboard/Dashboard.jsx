import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import Navbar from "./../Sidebar/Navbar";
import DashboardStats from "./DashboardStats";
import Users from "./../Users/Users";
import UserProfile from "../Users/UserProfile";
import Campaigns from "../Campaigns/Campaigns";
import Wallet from "../Wallet/Wallet";
import FundProcessing from "../Funds Processing/FundProcessing";
import Warnings from "./../Warnings/Warning";
import TeamRemoval from "../Warnings/TeamRemoval";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <BrowserRouter>
        <div className="dashboardContainer">
          <div className="dashboardChild1">
            <Sidebar />
          </div>
          <div className="dashboardChild2">
            <Navbar />

            <Routes>
              <Route path="/" element={<DashboardStats />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/user-profile" element={<UserProfile />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/fund-processing" element={<FundProcessing />} />
              <Route path="/warnings" element={<Warnings />} />
              <Route path="/team-removal" element={<TeamRemoval />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
