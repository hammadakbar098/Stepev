import React from "react";
import "./UserWarning.css";
import WarningCompany from "./WarningCompany";
import Warn from "./Warn";
import company from "./../../assets/Images/User Profile/company.png";

const UserWarning = () => {
  return (
    <>
      <table className="userWarningTable">
        <thead>
          <tr align="center">
            <th align="left" className="userWarningTableChild">
              Name
            </th>
            <th>Warnings</th>
            <th>Last Warning</th>
            <th>Warned By</th>
            <th className="user_warning_btn_title">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr align="center" className="user_Warning_Row">
            <td align="left">
              <WarningCompany
                image={company}
                name="Moto Mobiles"
                email="huz@gmail.com"
              />
            </td>
            <td>
              <Warn warnings={5} />
            </td>
            <td className="user_warning_data">Oct,16,2022</td>
            <td className="user_warning_data">Shaheer Ahmed</td>
            <td>
              <div className="user_warning_action">
                <div className="user_action_btn1">
                  <p>Reason</p>
                </div>
                <div className="user_action_btn2">
                  <p>Suspend</p>
                </div>
              </div>
            </td>
          </tr>
          <tr align="center" className="user_Warning_Row">
            <td align="left">
              <WarningCompany
                image={company}
                name="Moto Mobiles"
                email="huz@gmail.com"
              />
            </td>
            <td>
              <Warn warnings={2} />
            </td>
            <td className="user_warning_data">Oct,16,2022</td>
            <td className="user_warning_data">Shaheer Ahmed</td>
            <td>
              <div className="user_warning_action">
                <div className="user_action_btn1">
                  <p>Reason</p>
                </div>
                <div className="user_action_btn2">
                  <p>Suspend</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UserWarning;
