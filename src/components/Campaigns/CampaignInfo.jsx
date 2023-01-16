import React from "react";
import "./CampaignInfo.css";
import Heading from "./../Reusable/Heading";
import CampaignPoints from "./CampaignPoints";
import CampaignData from "./CampaignData";
import play from "./../../assets/Images/Campaign/play.png";
import TeamMember from "./TeamMember";
import TeamRoles from "./TeamRoles";
import pdf from "./../../assets/Images/Campaign/pdf.svg";
const CampaignInfo = () => {
  return (
    <>
      <Heading title="Campaigns" />
      <CampaignPoints title="Idea" />
      <CampaignData title="Title" info="Moto Mobiles" />
      <CampaignData
        title="Problem Statement"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis, facilisis non pellentesque in, finibus sed nisi. Aliquam felis tortor, posuere eu ligula non, iaculis vestibulum urna. "
      />
      <CampaignData
        title="Impact Statement"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis, facilisis non pellentesque in, finibus sed nisi. Aliquam felis tortor, posuere eu ligula non, iaculis vestibulum urna. "
      />
      <CampaignData
        title="Benchmarking"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis, facilisis non pellentesque in, finibus sed nisi. Aliquam felis tortor, posuere eu ligula non, iaculis vestibulum urna. "
      />
      <CampaignData
        title="Story"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis, facilisis non pellentesque in, finibus sed nisi. Aliquam felis tortor, posuere eu ligula non, iaculis vestibulum urna. "
      />
      <CampaignData
        title="Category"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis, facilisis non pellentesque in, finibus sed nisi. Aliquam felis tortor, posuere eu ligula non, iaculis vestibulum urna. "
      />
      <CampaignData title="Location" info="Florida, USA" />
      <CampaignData title="Budget Needed" info="$25000" type={1} />
      <CampaignData title="Image/Video" />
      <div className="campaignVideo">
        <img src={play} alt="" />
      </div>
      <CampaignPoints title="Team" />
      <div className="campaignTeam">
        <TeamMember name="Mike Dean" position="CEO" />
        <TeamMember name="Micheal" position="Designer" />
      </div>
      <CampaignPoints title="Team Roles" type="bg" />
      <div className="campaingTeamMembersRole">
        <TeamRoles role="Graphic Designer" />
        <TeamRoles role="Project Manager" /> <TeamRoles role="Content Writer" />
      </div>
      <CampaignPoints title="Partnership Terms" type="xl" />
      <CampaignData info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis, facilisis non pellentesque in, finibus sed nisi. Aliquam felis tortor, posuere eu ligula non, iaculis vestibulum urna. dipiscing elit. Sed metus felis, facilisis non pellentesque in, finibus sed nisi. Aliquam felis tortor, posuere eu ligula non, iaculis vestibulum urna. " />
      <CampaignPoints title="Milestone" type="md" />
      <CampaignData
        title="Milestone1"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis"
      />
      <CampaignData
        title="Milestone2"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis"
      />
      <CampaignPoints title="Pitchdeck" type="md" />
      <div className="proposalPdf">
        <img src={pdf} alt="" />
        <p>Download Pitchdeck.pdf</p>
      </div>
      <div className="campaignInfoBtns">
        <div className="infoBtn1">Decline</div>
        <div className="infoBtn2">Approve</div>
      </div>
    </>
  );
};

export default CampaignInfo;
