import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDataStore } from "../store/useDataStore.ts";
import Card from "../components/ui/Card.tsx";
import { ICONS } from "../components/constants.tsx";

const VerificationPage = () => {
  const { certificateId } = useParams<{ certificateId: string }>();
  const getRecordByCertId = useDataStore((state) => state.getRecordByCertId);
  const getHospitalById = useDataStore((state) => state.getHospitalById);

  const record = certificateId ? getRecordByCertId(certificateId) : undefined;
  const hospital = record ? getHospitalById(record.hospitalId) : undefined;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Link
          to="/"
          className="flex justify-center items-center mb-6 text-gray-700 dark:text-gray-200 hover:text-primary"
        >
          <ICONS.logo className="h-8 w-8 text-primary" />
          <span className="ml-3 text-2xl font-bold">VitalLink</span>
        </Link>
        <Card className="w-full">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              Certificate Verification
            </h2>
            {record && hospital ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="font-semibold">Certificate Valid</span>
                </div>
                <div className="border-t dark:border-gray-700 pt-4">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Full Name
                      </dt>
                      <dd className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {record.fullName}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Certificate ID
                      </dt>
                      <dd className="mt-1 text-gray-900 dark:text-white">
                        {record.certificateId}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Record Type
                      </dt>
                      <dd className="mt-1 text-gray-900 dark:text-white capitalize">
                        {record.recordType.toLowerCase()}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Date
                      </dt>
                      <dd className="mt-1 text-gray-900 dark:text-white">
                        {record.date}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Registered By
                      </dt>
                      <dd className="mt-1 text-gray-900 dark:text-white">
                        {hospital.name}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center p-3 rounded-lg bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="font-semibold">Certificate Not Found</span>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VerificationPage;
