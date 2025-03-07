import React from 'react';

const AppButton = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  type = 'button',
  disabled = false,
  onClick,
  fullWidth = false,
  leftIcon,
  rightIcon,
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2";
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const variantStyles = {
    primary: 'bg-custom-blue hover:bg-custom-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    pending: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    info: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    outline: 'bg-white border border-gray-300 text-blue-600 hover:bg-gray-50'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${widthStyles} ${disabledStyles} ${className}`;

  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <span className="w-4 h-4">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="w-4 h-4">{rightIcon}</span>}
    </button>
  );
};

export default AppButton;