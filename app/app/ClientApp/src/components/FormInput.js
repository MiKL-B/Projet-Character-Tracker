import React from "react";

const Input = ({
  type,
  value,
  name,
  label,
  onChange,
  placeholder = "",
  feedback,
  disabled = false,
}) => (
  <div className={"form-floating mb-3"}>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={"form-control"}
      placeholder={placeholder}
      name={name}
      id={name}
      disabled={disabled}
    />
    <label htmlFor={name}>{label}</label>
    {feedback && (
      <span className={"form-text text-danger p-1"}>{feedback}</span>
    )}
  </div>
);

const Checkbox = ({ checked, name, label, onChange }) => (
  <div className={"form-check form-switch mb-3"}>
    <input
      type={"checkbox"}
      onChange={onChange}
      className={"form-check-input"}
      name={name}
      id={name}
      checked={checked}
      role={"switch"}
    />
    <label htmlFor={name} className={"form-check-label"}>
      {label}
    </label>
  </div>
);

const File = ({ name, label, onChange }) => (
  <div className={"mb-3"}>
    <label htmlFor={name}>{label}</label>
    <input
      type={"file"}
      onChange={onChange}
      className={"form-control"}
      name={name}
      id={name}
      accept="image/png, image/jpeg"
    />
  </div>
);

const Select = ({ name, options = [], label, value, onChange }) => (
  <div className="form-floating">
    <select
      className="form-select mb-3"
      value={value}
      onChange={onChange}
      name={name}
    >
      {options.map((opt, key) => (
        <option key={key} value={key}>
          {opt}
        </option>
      ))}
    </select>
    <label htmlFor="floatingSelectGrid">{label}</label>
  </div>
);

const Button = ({ type, value, color = "primary", col }) => (
  <div className={`d-grid mb-3 ${col && "col"}`}>
    <button className={`btn btn-${color} text-uppercase fw-bold`} type={type}>
      {value}
    </button>
  </div>
);

const Range = ({ label, name, value = 5, onChange }) => (
  <>
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <input
      type="range"
      className="form-range"
      min="0"
      max="10"
      value={value}
      name={name}
      onChange={onChange}
    />
  </>
);

export { Input, Checkbox, File, Button, Select, Range };
