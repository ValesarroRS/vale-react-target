import React from "react";
import Smilies from "assets/icons/smilies.svg";
import Title from "components/shared/Title";
import PrimaryParagraph from "components/shared/Paragraph";
import Description from "components/shared/Description";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const ConfirmationSent = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.confirmationContainer}>
      <button onClick={() => navigate("/signIn")}>
        <img src={Smilies} alt="Smilies" />
      </button>
      <div className={styles.titleSection}>
        <Title variant="secondary" text="Yey!" />
        <PrimaryParagraph text="Only one more step to start enjoying" />
        <Title text="target" />
      </div>
      <div className={styles.confirmationText}>
        <Description>
          We&apos;ve sent an email to confirm your account. Please check your
          inbox.
        </Description>
      </div>
    </div>
  );
};

export default ConfirmationSent;
