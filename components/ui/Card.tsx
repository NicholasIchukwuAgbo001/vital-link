
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden ${className}`}>
        {title && <h2 className="text-xl font-bold p-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100">{title}</h2>}
        <div className="p-4 md:p-6">
            {children}
        </div>
    </div>
  );
};

export default Card;
