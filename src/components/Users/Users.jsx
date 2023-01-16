import React, { useState } from "react";
import "./Users.css";
import Heading from "./../Reusable/Heading";
import filter from "./../../assets/Images/Dashboard/filter.svg";
import FormButton from "./../Reusable/FormButton";
import dots from "./../../assets/Images/Dashboard/dots.svg";
import Strikes from "../Reusable/Strikes";
import SuspendedSign from "../Reusable/SuspendedSign";
import SearchBox from "../Reusable/SearchBox";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import PopupMenu from "./PopupMenu";

const Users = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/users/user-profile");
  };
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div>
        <Heading title={"Users"} />
      </div>
      <div className="userSearchContainer">
        <div>
          <SearchBox />
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
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu ban={true} />
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
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">Abdullah Ahmed</td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">N/A</td>
              <td className="Td">N/A</td>
              <td align="center">
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
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
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">Abdullah Ahmed</td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">N/A</td>
              <td className="Td">N/A</td>
              <td align="center">
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
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
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
