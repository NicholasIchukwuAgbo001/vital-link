import React from "react";
import { RecordData, RecordType } from "../../types";
import Card from "../ui/Card";
import Button from "../ui/Button";
import EmptyRecordsState from "./EmptyRecordsState";

interface RecordsTableProps {
  records: RecordData[];
  showHospital?: boolean;
  getHospitalName?: (hospitalId: string) => string;
  onEdit?: (record: RecordData) => void;
  onDelete?: (recordId: string) => void;
  onQR?: (certificateId: string) => void;
  onAddTestRecord?: () => void;
  onRegisterNewRecord?: () => void;
  isEmpty?: boolean;
  emptyMessage?: string;
  showActions?: boolean;
}

const RecordsTable: React.FC<RecordsTableProps> = ({
  records,
  showHospital = false,
  getHospitalName,
  onEdit,
  onDelete,
  onQR,
  onAddTestRecord,
  onRegisterNewRecord,
  isEmpty = false,
  emptyMessage = "No records found.",
  showActions = true,
}) => {
  if (isEmpty && onAddTestRecord && onRegisterNewRecord) {
    return (
      <Card>
        <EmptyRecordsState
          onAddTestRecord={onAddTestRecord}
          onRegisterNewRecord={onRegisterNewRecord}
        />
      </Card>
    );
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Certificate ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              {showHospital && (
                <th scope="col" className="px-6 py-3">
                  Hospital
                </th>
              )}
              {showActions && (
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr
                key={record.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-mono text-gray-700 dark:text-gray-300">
                  {record.certificateId}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {record.fullName}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      record.recordType === RecordType.BIRTH
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {record.recordType}
                  </span>
                </td>
                <td className="px-6 py-4">{record.date}</td>
                {showHospital && (
                  <td className="px-6 py-4">
                    {getHospitalName && getHospitalName(record.hospitalId)}
                  </td>
                )}
                {showActions && (
                  <td className="px-6 py-4 flex flex-wrap gap-2">
                    {onEdit && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onEdit(record)}
                      >
                        Edit
                      </Button>
                    )}
                    {onDelete && (
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onDelete(record.id)}
                      >
                        Delete
                      </Button>
                    )}
                    {onQR && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onQR(record.certificateId)}
                      >
                        QR
                      </Button>
                    )}
                  </td>
                )}
              </tr>
            ))}
            {isEmpty && !onAddTestRecord && !onRegisterNewRecord && (
              <tr>
                <td
                  colSpan={
                    showActions ? (showHospital ? 6 : 5) : showHospital ? 5 : 4
                  }
                  className="text-center py-4"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default RecordsTable;
