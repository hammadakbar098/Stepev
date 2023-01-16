import React, { useState } from "react";
import "./Skill.css";
import Heading from "./../Reusable/Heading";
import Notification from "../Reusable/Notification";
import SearchBox from "./../Reusable/SearchBox";
import AddSkill from "./AddSkill";
import close from "./../../assets/Images/close.png";

const Skill = () => {
  const [skill, setSkill] = useState(false);
  const handleSkill = () => {
    setSkill(!skill);
    console.log(skill);
  };
  return (
    <>
      <div className={skill ? "blur" : null}>
        <div className="skillHeader ">
          <Heading title="Skills" />
          <div onClick={() => handleSkill()} className="skill_add_btn">
            <Notification notification={"Add"} />
          </div>
        </div>
        <div className="skillSearch">
          <SearchBox />
        </div>
        <table className="skillsTable">
          <thead>
            <tr align="center">
              <th align="left">Name</th>
              <th>Created On</th>
              <th>Total Freelancers</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr align="center">
              <td align="left" className="skillName">
                Graphic Designing
              </td>
              <td className="skillDate">12,oct,2022</td>
              <td className="totalFreelancers">2000</td>
              <td className="skillsBtns">
                <div className="skillDeleteBtn">
                  <p>Delete</p>
                </div>
                <div className="skillEditBtn" onClick={() => handleSkill()}>
                  <p>Edit</p>
                </div>
              </td>
            </tr>
            <tr align="center">
              <td align="left" className="skillName">
                <p>Wordpress Development</p>
              </td>
              <td className="skillDate">12,oct,2022</td>
              <td className="totalFreelancers">2000</td>
              <td className="skillsBtns">
                <div className="skillDeleteBtn">
                  <p>Delete</p>
                </div>
                <div className="skillEditBtn" onClick={() => handleSkill()}>
                  <p>Edit</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {skill ? (
        <div className="add_skill">
          <div className="skillClose" onClick={() => setSkill(!skill)}>
            <img align="right" src={close} alt="Close btn" />
          </div>
          <AddSkill />
        </div>
      ) : null}
    </>
  );
};

export default Skill;
