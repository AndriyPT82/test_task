import React from 'react';
import classNames from 'classnames';

import './Input.scss';

export const Input = ({
  inputName,
  inputValue,
  placeholder,
  handleChange,
  handleBlur,
  errorMessage,
  clearField,

}) => {

  return (
    <div
      className="input-container"
      error-message={errorMessage}
    >
      {!!errorMessage && <div
        className="input-cleaner"
        name={inputName}
        onClick={clearField}
      >
        ⤫
      </div>}
      <input
        className={classNames(
          'input',
          { 'input--error': !!errorMessage }
        )}
        type="text"
        name={inputName}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  )
}
