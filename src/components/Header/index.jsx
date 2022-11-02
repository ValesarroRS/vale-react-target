import React from "react";
import Smilies from "../../smilies.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={Smilies} alt="Smilies" />
      <h1 className="title">Target MVD</h1>
      <p className="primaryParagraph">Find people near you & Connect</p>
      <p className="description">
        Create a target wherever on the map, specify your interest: Travel,
        Dating, Music, etc and start connecting with others who share your
        interests.
      </p>
    </div>
  );
};

export default Header;
