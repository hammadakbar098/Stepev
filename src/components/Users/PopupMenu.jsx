import React, { useState } from "react";
import dots from "./../../assets/Images/Dashboard/dots.svg";
import lightban from "./../../assets/Images/User Profile/lightban.svg";
import darkban from "./../../assets/Images/User Profile/darkban.svg";
import bin2 from "./../../assets/Images/User Profile/bin2.svg";
import { deleteUser } from "../../api/axios";
import "./PopupMenu.css";

const PopupMenu = ({ ban, userId }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const apiCall = (id, e) => {
    e.preventDefault();
    deleteUser(id);
    setMenu(!menu);
    console.log(userId);
  };

  return (
    <>
      <img
        src={dots}
        alt=""
        className="dots"
        onClick={() => {
          handleMenu();
        }}
      />
      {menu ? (
        <div className="menuPopup">
          <a
            href=""
            onClick={(e) => {
              apiCall(userId, e);
            }}
          >
            <p>Delete User</p> <img src={bin2} alt="" />
          </a>
          <hr className="popupLine" />
          {ban ? (
            <a href="">
              <p>Unsuspend</p> <img src={darkban} alt="" />
            </a>
          ) : (
            <a href="">
              <p>Suspend</p> <img src={lightban} alt="" />
            </a>
          )}
        </div>
      ) : null}
    </>
  );
};

export default PopupMenu;
