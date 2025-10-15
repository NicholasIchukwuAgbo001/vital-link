import React from "react";
import Card from "../ui/Card.tsx";
import { Hospital } from "../../../types.ts";

interface TopHospitalsListProps {
  hospitals: { hospital: Hospital; count: number }[];
  title?: string;
}

const TopHospitalsList: React.FC<TopHospitalsListProps> = ({
  hospitals,
  title = "Top Hospitals by Record Count",
}) => {
  return (
    <Card title={title}>
      <div className="space-y-4 mt-4">
        {hospitals.length > 0 ? (
          hospitals.map((item, index) => (
            <div
              key={item.hospital.id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold mr-3">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {item.hospital.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.hospital.location}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900 dark:text-white">
                  {item.count}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  records
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">
            No hospital data available
          </p>
        )}
      </div>
    </Card>
  );
};

export default TopHospitalsList;
