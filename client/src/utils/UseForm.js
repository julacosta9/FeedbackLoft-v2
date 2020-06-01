import { useState } from 'react';

const UseForm = (initialValues, callback) => {

  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback()
      console.log("Form Submitted")
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value}));
  };

  return {
    handleChange,
    handleSubmit,
    values
  }
};

export default UseForm;