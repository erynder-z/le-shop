import React from "react";
import PropTypes, { shape } from "prop-types";
import "./Dropdown.css";

function Dropdown({ label, value, options, onChange }) {
  return (
    <label htmlFor="categories">
      {label}
      <select id="categories" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value.toString()} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
