import React from "react";

import styles from "./index.module.scss";
import PopularTargets from "../../assets/icons/popularTargets.svg";
import SmiliesFooter from "components/shared/SmiliesFooter";

import PrimaryParagraph from "components/shared/Paragraph";
import Profile from "components/shared/Profile";
import Description from "components/shared/Description";

const HomeEmptyState = () => (
  <div className={styles.homeEmptyContainer}>
    <Profile />
    <div>
      <PrimaryParagraph text="Create your first target by " />
      <PrimaryParagraph text="clicking wherever on the map." />
    </div>
    <div className={styles.popularTargets}>
      <Description variant="medium">
        Psss!, these are the most popular targets:
      </Description>
      <img
        src={PopularTargets}
        alt="popularTargets"
        className={styles.popularTargetsImg}
      />
    </div>
    <SmiliesFooter />
  </div>
);

export default HomeEmptyState;
