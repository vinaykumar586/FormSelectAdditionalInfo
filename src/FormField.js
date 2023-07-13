import React from 'react';

function FormField({ field, value, onChange }) {
  switch (field.type) {
    case 'text':
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case 'number':
      return (
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      );
    case 'checkbox':
      return (
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
      );
    case 'select':
      return (
        <FormSelect
          options={field.options}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    default:
      return null;
  }
}
