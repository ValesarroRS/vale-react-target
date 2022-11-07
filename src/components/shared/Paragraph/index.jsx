import styles from "./index.module.scss";

const PrimaryParagraph = ({ text }) => (
  <p className={styles.primaryParagraph}>{text}</p>
);

export default PrimaryParagraph;
