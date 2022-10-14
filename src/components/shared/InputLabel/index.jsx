const InputLabel = ({
  className,
  name,
  id,
  labelText,
  value,
  placeholder,
  onChange,
  type = "text",
}) => (
  <>
    <label className={className} htmlFor={name}>
      {labelText}
    </label>
    <input
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  </>
);

export default InputLabel;
