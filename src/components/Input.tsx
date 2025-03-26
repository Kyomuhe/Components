import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  className, 
  ...props 
}) => {
  return (
    <div className="relative w-full mb-4">
      {label && (
        <label 
          htmlFor={props.id || props.name} 
          className="absolute z-10 left-3 -top-2 bg-white px-1 text-xs text-blue-600"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full 
          h-[59px] 
          border-[1.5px] 
          border-custom-blue
          rounded-[10px] 
          text-custom-blue 
          pl-4 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500
          ${className || ''}
        `}
      />
    </div>
  );
};

export default Input;