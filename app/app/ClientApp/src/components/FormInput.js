const FormInput = ({
  type,
  value,
  name,
  label,
  onChange,
  placeholder = "",
}) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder={placeholder}
        name={name}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default FormInput;
