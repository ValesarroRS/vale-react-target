/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Button from "components/shared/Button";
import InputLabel from "components/shared/InputLabel";
import PrimaryParagraph from "components/shared/Paragraph";
import React from "react";
import smilies from "../../assets/icons/smilies.svg";
import styles from "./index.module.scss";
import classnames from "classnames";

const Contact = ({ closeContact, hasSession }) => (
  <div
    className={classnames(styles.backdrop, {
      [styles.smallBackdrop]: hasSession,
    })}
    onClick={closeContact}
  >
    <div
      className={styles.contactContainer}
      onClick={(event) => event.stopPropagation()}
    >
      <img src={smilies} alt="smilies" />
      <PrimaryParagraph text="Don't be shy, drop us a line!" />
      <InputLabel className={styles.emailInput} labelText="Email *" />
      <InputLabel className={styles.messageInput} labelText="Message *" />
      <Button text="Send" />
    </div>
  </div>
);

export default Contact;
