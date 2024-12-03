import React from 'react';
import clsx from 'clsx';

const variants = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
  danger: 'text-gray-400 hover:text-red-500',
  success: 'text-green-500 hover:text-green-600',
  ghost: 'text-gray-400 hover:text-blue-500',
};

const sizes = {
  sm: 'p-1',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
};

export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  className,
  ...props 
}) {
  return (
    <button
      className={clsx(
        'rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}