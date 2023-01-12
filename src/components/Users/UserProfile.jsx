import React, { useState } from "react";
import "./UserProfile.css";
// Reusable Components
import Heading from "./../Reusable/Heading";
import InfoTab from "../Reusable/InfoTab";
import UserCampaigns from "./UserCampaigns";
import UserEarnings from "./UserEarnings";

// Icons & Images
import profile from "./../../assets/Images/User Profile/profilepicture.png";
import bag from "./../../assets/Images/User Profile/bag.svg";
import calender from "./../../assets/Images/User Profile/calender.svg";
import location from "./../../assets/Images/User Profile/location.svg";
import call from "./../../assets/Images/User Profile/call.svg";
import gender from "./../../assets/Images/User Profile/user.svg";
import email from "./../../assets/Images/User Profile/email.svg";
import bin from "./../../assets/Images/User Profile/bin.svg";
import disable from "./../../assets/Images/User Profile/disable.svg";
import pack from "./../../assets/Images/User Profile/package.svg";
import earn from "./../../assets/Images/User Profile/earning.svg";
import warnblack from "./../../assets/Images/User Profile/warnblack.svg";
import suspendwhite from "./../../assets/Images/User Profile/suspendwhite.png";
import UserWarning from "./UserWarning";

const UserProfile = () => {
  const [earning, setEarning] = useState(false);
  const [warning, setWarning] = useState(false);
  const [campaigns, setCampaigns] = useState(true);
  const [suspend, setSuspend] = useState(false);
  const handleCampaign = () => {
    setCampaigns(true);
    setEarning(false);
    setWarning(false);
  };
  const handleEarning = () => {
    setCampaigns(false);
    setEarning(true);
    setWarning(false);
  };
  const handleWarning = () => {
    setCampaigns(false);
    setEarning(false);
    setWarning(true);
  };
  const handleSuspend = () => {
    setSuspend(!suspend);
  };
  return (
    <>
      <Heading title="Freelancer Profile" />
      <div className="userProfileContainer">
        <div className="userProfilePicture">
          <img src={profile} alt="profile" />
        </div>
        <div className="dataUser">
          <div className="alignUserProfile">
            <div className="userName">
              <p className="userProfileName">Huzayfah Hanif</p>
              <div className="activeIcon">
                <p>Active</p>
              </div>
            </div>
            <div className="userActionBtns">
              {suspend ? (
                <div
                  className="userActionBtn unsuspend"
                  onClick={handleSuspend}
                >
                  <img
                    className="disableIcon"
                    src={suspendwhite}
                    alt="Disable"
                  />
                  <p className="unsuspend_p">Unsuspend</p>
                </div>
              ) : (
                <div className="userActionBtn" onClick={handleSuspend}>
                  <img className="disableIcon" src={disable} alt="Disable" />
                  <p>Suspend</p>
                </div>
              )}
              <div className="userActionBtn">
                <img className="binIcon" src={bin} alt="Delete" /> <p>Delete</p>
              </div>
            </div>
          </div>
          <div className="infoTabPadding">
            <InfoTab
              icon1={email}
              text1="huzi@gmail.com"
              icon2={gender}
              text2="Male"
            />
            <InfoTab
              icon1={call}
              text1="033343539"
              icon2={bag}
              text2="Designer"
            />
            <div className="infoTabDate">
              <InfoTab
                icon1={location}
                text1="New Jersey"
                icon2={calender}
                text2="21/Aug/2000"
              />

              <p>Joined 20 Oct 2022</p>
            </div>
          </div>
        </div>
      </div>
      <Heading title="More Options" />
      {/* Profile options */}
      <div className="moreOptionsAlign">
        <div onClick={handleCampaign} className="parentContainer">
          <div className={campaigns ? "moreOptions activee" : "moreOptions"}>
            <img src={pack} alt="campaigns" />
          </div>
          <p>Campaigns</p>
        </div>
        <div onClick={handleEarning} className="parentContainer">
          <div className={earning ? "moreOptions activee" : "moreOptions"}>
            <img src={earn} alt="Earnings" />
          </div>
          <p>Earnings</p>
        </div>
        <div onClick={handleWarning} className="parentContainer">
          <div className={warning ? "moreOptions activee" : "moreOptions"}>
            <img src={warnblack} alt="Warnings" />
          </div>
          <p>Warnings</p>
        </div>
      </div>
      <div className="campaignsContainer">
        {campaigns ? (
          <UserCampaigns />
        ) : earning ? (
          <UserEarnings />
        ) : (
          <UserWarning />
        )}
      </div>
    </>
  );
};

export default UserProfile;
