import React from "react";

import PrimaryParagraph from "components/shared/Paragraph";
import Profile from "components/shared/Profile";
import PopularTargets from "../../assets/icons/popularTargets.svg";

import styles from "./index.module.scss";
import Description from "components/shared/Description";

const HomeEmptyState = () => (
  <>
    <Profile />
    <div className={styles.paragraph}>
      <PrimaryParagraph text="Create your first target by " />
      <PrimaryParagraph text="clicking wherever on the map." />
    </div>
    <Description variant="medium">
      Psss!, these are the most popular targets:
    </Description>
    <img src={PopularTargets} alt="popularTargets" />
  </>
);

export default HomeEmptyState;
