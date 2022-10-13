const DropDown = ({
  option,
  id,
  labelText,
  value,
  placeholder,
  onChange,
  OPTIONS,
}) => (
  <label htmlFor={option}>
    {labelText}
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
  </label>
);

export default DropDown;
