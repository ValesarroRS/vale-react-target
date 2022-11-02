import React from "react";
import Smilies from "../../smilies.svg";

const ConfirmationSent = () => {
  return (
    <div className="confirmation">
      <img src={Smilies} alt="Smilies" />
      <p className="secondaryTitle">Yey!</p>
      <p className="primaryParagraph">Only one more step to start enjoying</p>
      <p className="title confirmation">Target</p>
      <p className="description">
        We&apos;ve sent an email to confirm your account.
      </p>
      <p className="description">Please check your inbox.</p>
    </div>
  );
};

export default ConfirmationSent;
