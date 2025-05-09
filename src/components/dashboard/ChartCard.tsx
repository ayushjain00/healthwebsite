import React from 'react';
import Card from '../ui/Card';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ 
  title, 
  subtitle, 
  children, 
  footer 
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="px-1 pb-4">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
          )}
        </div>

        <div className="flex-grow">{children}</div>

        {footer && (
          <div className="pt-4 mt-auto border-t border-gray-800">
            {footer}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ChartCard;