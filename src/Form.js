import React, { useState } from 'react';
import FormField from './FormField';

function Form() {
  const initialFormFields = [
    { name: 'name', type: 'text', value: '' },
    { name: 'age', type: 'number', value: 0 },
    { name: 'agree', type: 'checkbox', value: false },
    {
      name: 'category',
      type: 'select',
      value: '',
      options: [
        { name: 'option1', label: 'Option 1', additionalInfo: [] },
        {
          name: 'option2',
          label: 'Option 2',
          additionalInfo: [
            { name: 'subOption1', label: 'Sub Option 1', additionalInfo: [] },
            {
              name: 'subOption2',
              label: 'Sub Option 2',
              additionalInfo: [
                {
                  name: 'subSubOption1',
                  label: 'Sub Sub Option 1',
                  additionalInfo: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const [formFields, setFormFields] = useState(initialFormFields);

  const handleChange = (fieldName, fieldValue) => {
    setFormFields((prevFormFields) =>
      prevFormFields.map((field) =>
        field.name === fieldName ? { ...field, value: fieldValue } : field
      )
    );
  };

  const renderFormFields = (fields) => {
    return fields.map((field) => (
      <div key={field.name}>
        <label>{field.name}</label>
        <FormField
          field={field}
          value={field.value}
          onChange={(value) => handleChange(field.name, value)}
        />
        {field.type === 'select' &&
          field.value &&
          field.additionalInfo &&
          renderFormFields(field.additionalInfo)}
      </div>
    ));
  };

  return <div>{renderFormFields(formFields)}</div>;
}
export default Form;
