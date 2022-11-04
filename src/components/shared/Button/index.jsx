import "./index.scss";

const Button = ({ name, className, text, type, onClick }) => (
  <button name={name} className={className} type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
