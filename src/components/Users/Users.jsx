import React from "react";
import "./Users.css";
import Heading from "./../Reusable/Heading";
import filter from "./../../assets/Images/Dashboard/filter.svg";
import FormButton from "./../Reusable/FormButton";
import dots from "./../../assets/Images/Dashboard/dots.svg";
import Strikes from "../Reusable/Strikes";
import SuspendedSign from "../Reusable/SuspendedSign";
const Users = () => {
  return (
    <>
      <div>
        <Heading title={"Users"} />
      </div>
      <div className="userSearchContainer">
        <div>
          <input
            className="searchUserBox"
            type="text"
            placeholder="Search user by name, email..."
          />
        </div>
        <div className="btnFilter">
          <img src={filter} alt="" className="filterImg" />
          <a href="/">All Users</a>
        </div>
      </div>
      <div>
        <table className="userTable">
          <thead>
            <tr className="thead">
              <th align="left">Name</th>
              <th align="left">Phone</th>
              <th align="left" className="emailTd">
                Email
              </th>
              <th align="left">Role</th>
              <th align="left">Campaign</th>
              <th align="center">Action</th>
            </tr>
            {/* <div className="lineTable"></div> */}
          </thead>

          <tbody>
            <tr className="tbody">
              <td className="firstTd">Shaheer Ahmed</td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheerahmed@gmail.com</td>
              <td className="Td">Freelancer</td>
              <td className="Td">Moto</td>
              <td align="center">
                <FormButton title="View profile" />
              </td>
              <td align="center">
                <img src={dots} alt="" className="dots" />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">
                Abdullah Ahmed
                <SuspendedSign />
              </td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">Campaign</td>
              <td className="Td">Nike</td>
              <td align="center">
                <FormButton title="View profile" />
              </td>
              <td align="center">
                <img src={dots} alt="" className="dots" />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">Abdullah Ahmed</td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">N/A</td>
              <td className="Td">N/A</td>
              <td align="center">
                <FormButton title="View profile" />
              </td>
              <td align="center">
                <img src={dots} alt="" className="dots" />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">
                Abdullah Ahmed
                <SuspendedSign />
              </td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">N/A</td>
              <td className="Td">N/A</td>
              <td align="center">
                <FormButton title="View profile" />
              </td>
              <td align="center">
                <img src={dots} alt="" className="dots" />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">Abdullah Ahmed</td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">N/A</td>
              <td className="Td">N/A</td>
              <td align="center">
                <FormButton title="View profile" />
              </td>
              <td align="center">
                <img src={dots} alt="" className="dots" />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">
                Abdullah Ahmed <Strikes strike={2} />
              </td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">Campaign</td>
              <td className="Td">Nike</td>
              <td align="center">
                <FormButton title="View profile" />
              </td>
              <td align="center">
                <img src={dots} alt="" className="dots" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
