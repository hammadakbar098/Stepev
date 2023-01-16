import React, { useState } from "react";
import dots from "./../../assets/Images/Dashboard/dots.svg";
import lightban from "./../../assets/Images/User Profile/lightban.svg";
import darkban from "./../../assets/Images/User Profile/darkban.svg";
import bin2 from "./../../assets/Images/User Profile/bin2.svg";

import "./PopupMenu.css";
const PopupMenu = ({ ban }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
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
          <a href="">
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
