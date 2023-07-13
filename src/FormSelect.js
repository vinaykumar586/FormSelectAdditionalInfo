import React from 'react';

function FormSelect({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default FormSelect;
