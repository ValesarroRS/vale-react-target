const DropDown = ({
  className,
  id,
  labelText,
  value,
  name,
  placeholder,
  onChange,
  options,
  isLoading,
}) => (
  <>
    <label htmlFor={name} className={className}>
      {labelText}
    </label>
    <select
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    >
      {isLoading ? (
        <option>loading</option>
      ) : (
        options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))
      )}
    </select>
  </>
);

export default DropDown;
