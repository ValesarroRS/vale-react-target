import React from "react";
import Smilies from "assets/icons/smilies.svg";
import Title from "components/shared/Title";
import PrimaryParagraph from "components/shared/Paragraph";
import "./index.scss";
import Description from "components/shared/Description";

const Header = () => {
  return (
    <div className="header">
      <img src={Smilies} alt="Smilies" />
      <Title className="title" text="Target MVD" />
      <PrimaryParagraph text={"Find people near you & Connect"} />
      <Description
        text={
          "Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and start connecting with others who share your interests."
        }
      />
    </div>
  );
};

export default Header;
