import React from 'react';
import clsx from 'clsx';

const variants = {
  primary: 'bg-red-800 text-white',
  secondary: 'bg-gray-100 text-gray-600' ,
  danger: 'text-gray-400' ,
  success: 'text-green-500' ,
  ghost: 'text-gray-400 ',
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
        'rounded-lg transition-colors focus:outline-none ',
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