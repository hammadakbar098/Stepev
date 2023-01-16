import React, { useState } from "react";
import "./TeamRoles.css";
import check from "./../../assets/Images/Campaign/check.svg";
import arrow from "./../../assets/Images/Campaign/arrow.svg";
const TeamRoles = ({ role }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="team_role_data">
        <div
          className="teamRolesTitle"
          onClick={() => {
            setShow(!show);
          }}
        >
          <div className="alignTeamRoles">
            <img src={check} alt="" className="checkImg" />
            <p>{role}</p>
          </div>
          <img src={arrow} alt="" className="arrow" />
        </div>
        {show ? (
          <p className="roleInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            venenatis sit amet risus a bibendum. Integer a nibh feugiat, congue
            nunc ac, auctor tortor. Nam luctus libero sed tortor luctus, sit
            amet porttitor ex dignissim. Nam vitae sem tortor. Etiam in risus
            egestas, ultricies dui nec, tempor ante. Vestibulum eu imperdiet
            velit, Etiam venenatis sit amet risus a bibendum. Integer a nibh
            feugiat, congue nunc ac, auctor tortor. Nam luctus libero sed tortor
            luctus, sit amet porttitor
          </p>
        ) : null}
      </div>
    </>
  );
};

export default TeamRoles;
