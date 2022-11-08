import style from "./index.module.scss";

const Title = ({ text, isSecondary }) => (
  <h1 className={isSecondary ? style.secondary : style.title}>{text}</h1>
);

export default Title;
