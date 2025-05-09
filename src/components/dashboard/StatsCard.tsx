import React from 'react';
import Card from '../ui/Card';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon,
  variant = 'primary',
}) => {
  const variantStyles = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
    accent: 'text-accent-500',
    success: 'text-success-500',
    warning: 'text-warning-500',
    error: 'text-error-500',
  };

  const backgroundStyles = {
    primary: 'bg-primary-500/10',
    secondary: 'bg-secondary-500/10',
    accent: 'bg-accent-500/10',
    success: 'bg-success-500/10',
    warning: 'bg-warning-500/10',
    error: 'bg-error-500/10',
  };

  return (
    <Card className="overflow-hidden">
      <div className="flex items-start">
        <div className="flex-grow">
          <h3 className="text-sm font-medium text-gray-400">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-white">{value}</p>
            {change && (
              <p
                className={`ml-2 text-sm font-medium ${
                  change.isPositive ? 'text-success-400' : 'text-error-400'
                }`}
              >
                {change.isPositive ? '+' : ''}
                {change.value}%
              </p>
            )}
          </div>
        </div>
        <div className={`p-3 rounded-full ${backgroundStyles[variant]}`}>
          <span className={variantStyles[variant]}>{icon}</span>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;