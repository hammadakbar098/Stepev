import React from "react";
import "./FundProcessing.css";
import Heading from "./../Reusable/Heading";
import SearchBox from "../Reusable/SearchBox";
import filter from "./../../assets/Images/Dashboard/filter.svg";
import gross from "./../../assets/Images/Funding/gross.png";
import picture from "./../../assets/Images/Funding/profile.png";
const FundProcessing = () => {
  return (
    <>
      <div className="fundsTitle">
        <Heading title="Funds Processing" />
        <div className="funds_notification">
          <p>5 New</p>
        </div>
      </div>
      {/* SearchBox */}
      <div className="fundSearchContainer">
        <div>
          <SearchBox />
        </div>
        <div className="fundBtnFilter">
          <img src={filter} alt="" className="fundFilterImg" />
          <a href="/">All Records</a>
        </div>
      </div>
      {/* Search Table */}
      <table className="fundsTable">
        <thead>
          <tr align="center">
            <th align="left">User</th>
            <th>Date</th>
            <th>Gross</th>
            <th>App Earning</th>
            <th>Campaign</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr align="center">
            <td align="left" className="funds_name alignFundProfile">
              <img src={picture} alt="" /> <p>Shaheer Ahmed</p>
            </td>
            <td className="funds_date">17,Oct,2022</td>
            <td className="funds_price fundPriceAlign">
              <img src={gross} alt="" /> <p>2400</p>
            </td>
            <td className="funds_price">$360</td>
            <td className="funds_name">Moto Mobiles</td>
            <td>
              <div className="funds_oneTime">
                <p>One time</p>
              </div>
            </td>
            <td>
              <div className="funds_released">
                <p>Released</p>
              </div>
            </td>
          </tr>
          {/*  */}
          <tr align="center">
            <td align="left" className="funds_name alignFundProfile">
              <img src={picture} alt="" /> <p>Shaheer Ahmed</p>
            </td>
            <td className="funds_date">17,Oct,2022</td>
            <td className="funds_price fundPriceAlign">
              <img src={gross} alt="" /> <p>2400</p>
            </td>
            <td className="funds_price">$360</td>
            <td className="funds_name">Moto Mobiles</td>
            <td>
              <div className="funds_job">
                <p>Job</p>
              </div>
            </td>
            <td>
              <div className="funds_action_btns">
                <div className="funds_action_pause funds_action_btn">
                  <p>Pause</p>
                </div>
                <div className="funds_action_release funds_action_btn">
                  <p>Release</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FundProcessing;
