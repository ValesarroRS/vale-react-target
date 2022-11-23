import styles from "./index.module.scss";
import classnames from "classnames";

const Description = ({ children, variant = "default" }) => {
  const variants = classnames({
    [styles.leftDescription]: variant === "left",
    [styles.description]: variant === "default",
    [styles.medium]: variant === "medium",
  });
  return <p className={variants}>{children}</p>;
};

export default Description;
