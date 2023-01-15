import React from "react";
import "./SidebarItems.css";
import { Link } from "react-router-dom";
const SidebarItems = ({ icon, label, active, notification, number }) => {
  return (
    <>
      <div className={active ? "sidebarItem active" : "sidebarItem "}>
        <div className="purpleDot"></div>
        <img src={icon} alt="Menu icon" />
        <p>{label}</p>
        {notification ? <div className="alert">{number}</div> : null}
      </div>
    </>
  );
};

export default SidebarItems;
