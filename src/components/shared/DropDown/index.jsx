const DropDown = ({
  className,
  option,
  id,
  labelText,
  value,
  placeholder,
  onChange,
  OPTIONS,
}) => (
  <>
    <label htmlFor={option} className={className}>
      {labelText}
    </label>
    <select
      name={option}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    >
      {OPTIONS.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </>
);

export default DropDown;
