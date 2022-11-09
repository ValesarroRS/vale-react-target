import style from "./index.module.scss";

const Title = ({ text, isSecondary, isLowerCase }) => (
  <h1
    className={
      isSecondary
        ? style.secondary
        : isLowerCase
        ? style.lowerCase
        : style.title
    }
  >
    {text}
  </h1>
);

export default Title;
