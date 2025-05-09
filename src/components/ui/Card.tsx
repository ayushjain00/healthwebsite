import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'glow';
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseStyles = 'rounded-xl p-5 bg-background-light bg-opacity-80 backdrop-blur-sm';
  
  const variantStyles = {
    default: 'border border-gray-800',
    hover: 'border border-gray-800 transition-all duration-300 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10',
    glow: 'border border-accent-900 shadow-lg shadow-accent-500/10 animate-glow-pulse'
  };
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;