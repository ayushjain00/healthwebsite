import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const inputClasses = `bg-background-lighter text-gray-200 border ${
    error ? 'border-error-500 focus:border-error-500' : 'border-gray-700 focus:border-primary-500'
  } px-4 py-2 rounded-lg focus:outline-none focus:ring-1 ${
    error ? 'focus:ring-error-500' : 'focus:ring-primary-500'
  } transition-colors ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  return (
    <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input className={inputClasses} {...props} />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-error-500">{error}</p>
      )}
    </div>
  );
};

export default Input;