import styles from "./index.module.scss";
import classnames from "classnames";

const Button = ({ name, text, type, variant = "default", onClick }) => {
  const variants = classnames({
    [styles.smallButton]: variant === "small",
    [styles.smallLinkText]: variant === "smallLink",
    [styles.mediumButton]: variant === "medium",
    [styles.largeButton]: variant === "default",
  });
  console.log(variant);
  return (
    <button name={name} className={variants} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
