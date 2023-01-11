import React from "react";
import FormButton from "../Reusable/FormButton";
import "./UserCampaigns.css";

const UserCampaigns = () => {
  return (
    <>
      {/* <tbody className="xyz">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Created</th>
            <th>Admin</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Moto Mobiles</td>
            <td>20/08/2022</td>
            <td>Shaheer Ahmed</td>
            <td>Designer</td>
            <td>view Campaign</td>
          </tr>
        </tbody>
      </tbody> */}
      <table className="userCampaignTable">
        <thead>
          <tr className="campaignsThead">
            <th align="left">Name</th>
            <th align="center">Date Created</th>
            <th align="center" className="emailTd">
              Admin
            </th>
            <th align="center">Role</th>
            <th align="center">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="user_name">Moto Mobiles</td>
            <td className="user_light" align="center">
              20/11/2022
            </td>
            <td className="user_bold" align="center">
              Shaheer Ahmed
            </td>
            <td className="user_light" align="center">
              Freelancer
            </td>
            <td align="center">
              <div className="viewCampaignsBtn">
                <a href="/">View Campaigns</a>
              </div>
            </td>
          </tr>
          <tr>
            <td className="user_name">Moto Mobiles</td>
            <td className="user_light" align="center">
              20/11/2022
            </td>
            <td className="user_bold" align="center">
              Shaheer Ahmed
            </td>
            <td className="user_light" align="center">
              Freelancer
            </td>
            <td align="center">
              <div className="viewCampaignsBtn">
                <a href="/">View Campaigns</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UserCampaigns;
