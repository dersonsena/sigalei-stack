import React from 'react';

const FormField = props => {
  const { label } = props;

  return (
    <div className="block">
      <label htmlFor={props.name}>{label} </label>
      <input {...props} />
    </div>
  );
};

export default FormField;