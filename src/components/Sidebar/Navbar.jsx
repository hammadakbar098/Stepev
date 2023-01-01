import React from "react";
import "./Navbar.css";
import bell from "./../../assets/Images/Navbar/bell.svg";
import date from "./../../assets/Images/Navbar/date.svg";
import profile from "./../../assets/Images/Navbar/profile.svg";

const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <div className="alighNavData">
          <div className="alighNavData">
            <img className="date" src={date} alt="Today's date" />
            <p className="dateDay">01 Jan</p>
          </div>
          <div className="vl"></div>
          <div className="adminText">
            <p>Hi, Admin!</p>
          </div>
          <div className="vl"></div>
          <div>
            <input
              type="text"
              placeholder="Search campaigns, users..."
              className="searchBar"
            />
          </div>
        </div>
        <div className="alighNavData">
          <div className="bellIcon">
            <img src={bell} alt="Notification icons" />
            {/* <div className="notif"></div> */}
          </div>
          <img src={profile} alt="Profile picture" className="profilePicture" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
