import styles from "./index.module.scss";

const Button = ({
  name,
  text,
  type,
  isMedium,
  isSmall,
  isSmallLink,
  onClick,
}) => (
  <button
    name={name}
    className={
      isMedium
        ? styles.mediumButton
        : isSmall
        ? styles.isSmall
        : isSmallLink
        ? styles.smallLinkText
        : styles.largeButton
    }
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
