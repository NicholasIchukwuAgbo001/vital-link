import React from "react";
import { Hospital } from "../../../types.ts";
import Card from "../ui/Card.tsx";
import Button from "../ui/Button.tsx";

interface HospitalTableProps {
  hospitals: Hospital[];
  title: string;
  onEdit: (hospital: Hospital) => void;
  onDelete: (hospitalId: string) => void;
  onApprove?: (hospital: Hospital) => void;
  isEmpty?: boolean;
  emptyMessage?: string;
}

const HospitalTable: React.FC<HospitalTableProps> = ({
  hospitals,
  title,
  onEdit,
  onDelete,
  onApprove,
  isEmpty = false,
  emptyMessage = "No hospitals found.",
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital) => (
                <tr
                  key={hospital.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {hospital.name}
                  </td>
                  <td className="px-6 py-4">{hospital.email}</td>
                  <td className="px-6 py-4">{hospital.location}</td>
                  <td className="px-6 py-4">{hospital.phone}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    {onApprove && (
                      <Button
                        variant="secondary"
                        onClick={() => onApprove(hospital)}
                      >
                        Approve
                      </Button>
                    )}
                    {onEdit && (
                      <Button
                        variant="secondary"
                        onClick={() => onEdit(hospital)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      variant="danger"
                      onClick={() => onDelete(hospital.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
              {isEmpty && (
                <tr>
                  <td colSpan={5} className="text-center py-4">
                    {emptyMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default HospitalTable;