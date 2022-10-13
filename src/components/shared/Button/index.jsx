const Button = ({ name, className, text, type }) => (
  <button name={name} className={className} type={type}>
    {text}
  </button>
);

export default Button;
