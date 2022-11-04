import React from "react";
import Smilies from "assets/icons/smilies.svg";
import Title from "components/shared/Title";
import PrimaryParagraph from "components/shared/Paragraph";
import Description from "components/shared/Description";
import { useNavigate } from "react-router-dom";

const ConfirmationSent = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation">
      <button onClick={() => navigate("/")}>
        <img src={Smilies} alt="Smilies" />
      </button>
      <Title className="secondTitle" text="Yey!" />
      <PrimaryParagraph text={"Only one more step to start enjoying"} />
      <Title className="title confirm" text="target" />
      <Description text="We've sent an email to confirm your account." />
      <Description text="Please check your inbox." />
    </div>
  );
};

export default ConfirmationSent;
