import React from "react";
import Card from "../ui/Card.tsx";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description }) => {
  return (
    <Card>
      <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h3>
      <p className="text-4xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {description}
        </p>
      )}
    </Card>
  );
};

export default StatCard;
