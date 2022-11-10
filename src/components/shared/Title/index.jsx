import styles from "./index.module.scss";
import classnames from "classnames";

const Title = ({ text, variant = "default" }) => {
  const variants = classnames({
    [styles.secondTitle]: variant === "secondary",
    [styles.lowerCase]: variant === "lowerCase",
    [styles.title]: variant === "default",
  });
  return <h1 className={variants}>{text}</h1>;
};
export default Title;
