import React from "react";
import "./AddSkill.css";
import Heading from "./../Reusable/Heading";
const AddSkill = () => {
  return (
    <div>
      <div className="skill_text">
        <Heading title="Adding Skill" />
      </div>
      <div className="skillAlign">
        <input type="text" className="addSkillBox" />
      </div>
      <div className="skillBtns">
        <div className="cancelSkillBtn skillBtn">Cancel</div>
        <div className="cancelAddBtn skillBtn">
          <p>Add</p>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
