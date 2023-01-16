import React from "react";
import "./Setting.css";
import Heading from "./../Reusable/Heading";
import SettingItem from "./SettingItem";
import bank from "./../../assets/Images/Setting/bank.svg";
import edit from "./../../assets/Images/Setting/edit.svg";
import lock from "./../../assets/Images/Setting/lock.svg";
import notif from "./../../assets/Images/Setting/notif.svg";
import user from "./../../assets/Images/Setting/user.svg";
const Setting = () => {
  return (
    <>
      <Heading title="Settings" />
      <hr className="settingLine" />
      <div className="settingSecurity">
        <div className="setting_heading_title">
          <Heading title="Security" />
        </div>
        <hr className="settingLine2" />
        <SettingItem icon={lock} title="Change Password" />
        <hr className="settingLine2" />
        <SettingItem icon={user} title="Change Email/Username" />

        <div className="setting_heading_title">
          <Heading title="General" />
        </div>
        <hr className="settingLine2" />
        <SettingItem icon={notif} title="Notifications" />
        <hr className="settingLine2" />
        <SettingItem icon={edit} title="Change Profile Picture" />

        <div className="setting_heading_title">
          <Heading title="Payments" />
        </div>
        <hr className="settingLine2" />
        <SettingItem icon={bank} title="Bank Accounts" />
      </div>
    </>
  );
};

export default Setting;
