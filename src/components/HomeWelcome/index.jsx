import Smilies from "assets/icons/smilies.svg";
import Description from "components/shared/Description";
import PrimaryParagraph from "components/shared/Paragraph";
import Title from "components/shared/Title";
import styles from "./index.module.scss";
import Dot from "assets/icons/oval.svg";
import Button from "components/shared/Button";

const HomeWelcome = () => {
  return (
    <>
      <img src={Smilies} alt="Smilies" />
      <div className={styles.welcomeTitle}>
        <Title isLowerCase text="Welcome to " />
        <Title text="Target" />
      </div>
      <PrimaryParagraph text="Find people near you & Connect" />
      <div className={styles.pointedList}>
        <div className={styles.pointedListElement}>
          <img className={styles.dot} src={Dot} alt="Dot" />
          <Description text="Create a target by clicking wherever on the map, specify the ratio and and a topic: Travel, Dating, Music, etc." />
        </div>
        <div className={styles.pointedListElement}>
          <img className={styles.dot} src={Dot} alt="Dot" />
          <Description text="T A R G E T will start a chat whenever you’ve a match. You can always dismiss a conversation if you’re not interested." />
        </div>
      </div>
      <Button text="ok; got it!" />
    </>
  );
};

export default HomeWelcome;
