import styles from "./index.module.scss";
import Smilies from "assets/icons/smilies.svg";
import Title from "components/shared/Title";
import PrimaryParagraph from "components/shared/Paragraph";
import Button from "components/shared/Button";
import PointedListElement from "components/shared/PointedListElement";

const HomeWelcome = () => (
  <>
    <img src={Smilies} alt="Smilies" />
    <div className={styles.welcomeTitle}>
      <Title variant="lowerCase" text="Welcome to " />
      <Title text="Target" />
    </div>
    <PrimaryParagraph text="Find people near you & Connect" />
    <div className={styles.pointedList}>
      <PointedListElement text="Create a target by clicking wherever on the map, specify the ratio and and a topic: Travel, Dating, Music, etc." />
      <PointedListElement text="T A R G E T will start a chat whenever you’ve a match. You can always dismiss a conversation if you’re not interested." />
    </div>
    <Button text="ok; got it!" />
  </>
);

export default HomeWelcome;
