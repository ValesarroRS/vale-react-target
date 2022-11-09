import styles from "./index.module.scss";

const Description = ({ text, upperCase }) => (
  <p className={upperCase ? styles.upperCaseDescription : styles.description}>
    {text}
  </p>
);

export default Description;
