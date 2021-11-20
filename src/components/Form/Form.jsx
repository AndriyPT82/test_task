import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Form.scss';
import { Input } from '../Input';

export const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    number: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    number: '',
  })

  const history = useHistory();

  const formValidator = (name, value) => {
    const errorsFields = {};
    let isValid = true;

    if (!value.length || (value.match(/\d/) && name === 'name')) {
      isValid = false;
      errorsFields[name] = !value.length
        ? 'This field in required'
        : 'Only letters allowed';
    } else if (name === 'number' && (isNaN(value) || value.length !== 12)) {
      isValid = false;
      const errorMessage = isNaN(+value)
        ? 'Only numbers allowed'
        : 'Should contain 12 characters';

      errorsFields[name] = errorMessage;
    };

    !isValid && setErrors(errors => ({ ...errors, ...errorsFields }));

    return isValid;
  }

  const handleBlur = (event) => {
    const { name, value } = event.target;
    formValidator(name, value.trim())
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    for (const input of Object.entries(inputValue)) {
      const [name, value] = input;
      if (!formValidator(name, value)) {
        isValid = false;
      };
    }

    isValid && history.push('/');
  }

  const clearField = (event) => {
    const name = event.target.getAttribute('name');

    setErrors(errors => ({ ...errors, [name]: '' }))
    setInputValue(state => ({ ...state, [name]: '' }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (errors[name]) {
      setErrors(state => ({ ...state, [name]: '' }))
    };

    setInputValue(state => ({ ...state, [name]: value }))
  };

  const { name, number } = inputValue;

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <Input
        inputName={'name'}
        inputValue={name}
        placeholder={'Name'}
        errorMessage={errors.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        clearField={clearField}
      />

      <Input
        inputName={'number'}
        inputValue={number}
        placeholder={'Number'}
        errorMessage={errors.number}
        handleChange={handleChange}
        handleBlur={handleBlur}
        clearField={clearField}
      />

      <button className="button button--order">
        Order
      </button>
    </form>
  )
}
