import React from "react";

const Input = ({ type, value, name, label, onChange, placeholder = "" }) => {
  return (
    <div className={"form-floating mb-3"}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={"form-control"}
        placeholder={placeholder}
        name={name}
        id={name}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

const Checkbox = ({ checked, name, label, onChange }) => {
  return (
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
};

const File = ({ name, label, onChange }) => {
  return (
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
};

const Select = ({ name, options = [], label, value, onChange }) => {
  return (
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
};

const Button = ({ type, value }) => {
  return (
    <div className="d-grid mb-3">
      <button
        className="btn btn-primary btn-login text-uppercase fw-bold"
        type={type}
      >
        {value}
      </button>
    </div>
  );
};

export { Input, Checkbox, File, Button, Select };
