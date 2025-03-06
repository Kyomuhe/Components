import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormInput = ({
  label,
  placeholder,
  required = false,
  helpText,
  errorMessage,
  isValid = true,
  type = 'text',
  id,
  name,
  value,
  onChange,
  className = '',
  rows = 3,
  min,
  max,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || `input-${name || Math.random().toString(36).substr(2, 9)}`;
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const baseInputStyles = "w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  const validationStyles = isValid 
    ? "border-gray-300" 
    : "border-red-500 bg-red-50";
  
  const inputStyles = `${baseInputStyles} ${validationStyles} ${className}`;

  const renderInputElement = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={inputId}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={inputStyles}
            rows={rows}
            required={required}
            {...props}
          />
        );
      case 'password':
        return (
          <div className="relative">
            <input
              id={inputId}
              name={name}
              type={showPassword ? 'text' : 'password'}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={inputStyles}
              required={required}
              {...props}
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        );
      case 'date':
      case 'datetime-local':
      case 'number':
      case 'email':
      case 'text':
      default:
        return (
          <input
            id={inputId}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={inputStyles}
            required={required}
            min={min}
            max={max}
            {...props}
          />
        );
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={inputId} className="block text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      
      {renderInputElement()}
      
      {helpText && !errorMessage && (
        <p className="mt-1 text-sm text-gray-500">{helpText}</p>
      )}
      
      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;