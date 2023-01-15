import React from "react";
import "./Warning.css";
import Heading from "./../Reusable/Heading";
import Notification from "./../Reusable/Notification";
import SearchBox from "../Reusable/SearchBox";
import filter from "./../../assets/Images/Dashboard/filter.svg";
import warn from "./../../assets/Images/Warning/warning.svg";
import profile from "./../../assets/Images/Warning/profile.png";
import dots from "./../../assets/Images/Warning/dots.svg";
import { useNavigate } from "react-router-dom";

const Warnings = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/team-removal");
  };
  return (
    <>
      <div className="warningHeader">
        <div className="warningTitle">
          <Heading title="Warnings" /> <Notification notification={5} />
        </div>
        <div className="removalRequest" onClick={handleNavigation}>
          <p>Removal Request</p>
        </div>
      </div>
      {/* Search Bar */}
      <div className="warningSearchContainer">
        <div>
          <SearchBox />
        </div>
        <div className="warningBtnFilter">
          <img src={filter} alt="" className="warningFilterImg" />
          <a href="/">All Users</a>
        </div>
      </div>
      {/* Warning Table */}
      <table className="warningTable">
        <thead>
          <tr align="center">
            <th align="left">Name</th>
            <th>Admin</th>
            <th>Campaign</th>
            <th>Last Warning</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr align="center">
            <td align="left">
              <div className="warningUser">
                <img className="warningProfile" src={profile} alt="User" />
                <p className="warnUserName">Shaheer Ahmed</p>
                <div className="warningAlign">
                  <img src={warn} alt="Warning" className="warningWarn" />
                  <p className="warnAmount">2</p>
                </div>
              </div>
            </td>
            <td className="warningAdmin">Huzayfah Hanif</td>
            <td className="warningDetails">Moto</td>
            <td className="warningDetails">12,Oct,2022</td>
            <td>
              <div className="warningBtns">
                <div className="warning_btns_align">
                  <div className="warningBtn warningBtn1">
                    <p>View Profile</p>
                  </div>
                  <div className="warningBtn warningBtn2">
                    <p>Reason</p>
                  </div>
                </div>
                <img src={dots} alt="" className="warningMore" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Warnings;
