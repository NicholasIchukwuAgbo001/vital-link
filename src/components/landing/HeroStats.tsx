import React from "react";

interface HeroStatsProps {
  stats: {
    value: string;
    label: string;
    color: string;
  }[];
}

const HeroStats: React.FC<HeroStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg"
        >
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
