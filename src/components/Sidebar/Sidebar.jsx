import React from "react";
import "./Sidebar.css";
import Navbar from "./Navbar";
import campaign from "./../../assets/Images/campaign.svg";
import cash from "./../../assets/Images/cash.svg";
import logo from "./../../assets/Images/logo.png";
import overview from "./../../assets/Images/overview.svg";
import wallet from "./../../assets/Images/wallet.svg";
import warn from "./../../assets/Images/warn.svg";
import user from "./../../assets/Images/User.svg";
import logout from "./../../assets/Images/logout.svg";
import profile from "./../../assets/Images/profile.svg";
import settings from "./../../assets/Images/setting.svg";
import dotted from "./../../assets/Images/dotted.svg";
import SidebarItems from "../Reusable/SidebarItems";
import Heading from "./../Reusable/Heading";
const Sidebar = () => {
  return (
    <>
      <div className="sidebarContainer">
        <img src={logo} alt="logo" className="logo imgCenter" />
        <div>
          <div>
            <SidebarItems
              notification={false}
              icon={overview}
              label="Overview"
              className="sideItem"
              active={true}
            />
          </div>
          <SidebarItems
            notification={true}
            icon={user}
            label="User"
            className="sideItem"
            number={6}
          />
          <SidebarItems
            notification={true}
            icon={campaign}
            label="Campaigns"
            className="sideItem"
            number={6}
          />
          <SidebarItems
            notification={true}
            icon={wallet}
            label="Wallet"
            className="sideItem"
            number={4}
          />
          <SidebarItems
            notification={true}
            icon={cash}
            label="Fund Processing"
            className="sideItem"
            number={9}
          />
          <SidebarItems
            notification={true}
            icon={warn}
            label="Warnings"
            className="sideItem"
            number={9}
          />

          <img className="dottedImg " src={dotted} alt="" />

          <div>
            <SidebarItems
              notification={false}
              icon={settings}
              label="Settings"
            />
          </div>
          <div className="logoutSideBtn">
            <SidebarItems icon={logout} label="Logout" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
