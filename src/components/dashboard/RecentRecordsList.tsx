import React from "react";
import Card from "../ui/Card.tsx";
import { RecordData } from "../../../types.ts";

interface RecentRecordsListProps {
  records: RecordData[];
  title?: string;
  limit?: number;
}

const RecentRecordsList: React.FC<RecentRecordsListProps> = ({
  records,
  title = "Recent Records",
  limit = 5,
}) => {
  const recentRecords = records
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, limit);

  return (
    <Card title={title}>
      <div className="space-y-4 mt-4">
        {recentRecords.length > 0 ? (
          recentRecords.map((record) => (
            <div
              key={record.id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {record.fullName}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(record.createdAt).toLocaleDateString()} •{" "}
                  {record.recordType}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {record.gender}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">
            No records found
          </p>
        )}
      </div>
    </Card>
  );
};

export default RecentRecordsList;
