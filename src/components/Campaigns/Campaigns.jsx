import React from "react";
import "./Campaigns.css";
import Heading from "./../Reusable/Heading";
import filter from "./../../assets/Images/Dashboard/filter.svg";
import SearchBox from "./../Reusable/SearchBox";
import campaignprofile from "./../../assets/Images/Campaign/campaignprofile.png";
import dot from "./../../assets/Images/Dashboard/dots.svg";
const Campaigns = () => {
  return (
    <>
      <Heading title="Campaigns" />
      <div className="campaignsHeader">
        <div>
          <SearchBox />
        </div>
        <div className="campaignsFilter">
          <img src={filter} alt="" className="filterImg" />
          <a href="/">All Campaigns</a>
        </div>
      </div>
      <div>
        <table className="campaignTable">
          <thead>
            <tr align="left">
              <th className="campaignTh">Name</th>
              <th>Date Created</th>
              <th>Admin</th>
              <th>Email</th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="campaignTh">
                <div>
                  <img src={campaignprofile} alt="User" /> <p>Moto Mobiles</p>
                </div>
              </td>
              <td className="campaignDull campaignDate">20/08/2022</td>
              <td className="campaignAdmin">Shaheer Ahmed</td>
              <td className="campaignDull campaignEmail">Shaheer@gmail.com</td>
              <td>
                <div className="campaign_action_btns">
                  <div className="campaign_action_btn1">
                    <p>View Campaign</p>
                  </div>
                  <div className="campaign_action_btn2">
                    <p>Approved</p>
                  </div>
                  <img src={dot} alt="More options" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Campaigns;
