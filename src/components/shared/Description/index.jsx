import styles from "./index.module.scss";
import classnames from "classnames";

const Description = ({ text, variant = "default" }) => {
  const variants = classnames({
    [styles.upperCaseDescription]: variant === "upperCase",
    [styles.description]: variant === "default",
  });
  return <p className={variants}>{text}</p>;
};

export default Description;
