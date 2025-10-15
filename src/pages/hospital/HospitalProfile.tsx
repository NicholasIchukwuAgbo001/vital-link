import React, { useState, useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { useDataStore } from "../../store/useDataStore.ts";
import { Hospital } from "../../../types.ts";
import Card from "../../components/ui/Card.tsx";
import Button from "../../components/ui/Button.tsx";
import Input from "../../components/ui/Input.tsx";
import toast from "react-hot-toast";

const HospitalProfile = () => {
  const { user } = useAuthStore();
  const { hospitals } = useDataStore();
  const [hospitalData, setHospitalData] = useState<Hospital | null>(null);

  useEffect(() => {
    if (user?.hospitalId) {
      const hospital = hospitals.find((h) => h.id === user.hospitalId);
      if (hospital) {
        setHospitalData(hospital);
      }
    }
  }, [user, hospitals]);

  if (!hospitalData) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Hospital Profile</h1>
        <Card>
          <p>Loading profile data...</p>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Hospital Profile</h1>

      <Card>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 sm:w-1/3 sm:pr-4 mb-1 sm:mb-0">
              Hospital Name
            </span>
            <div className="sm:w-2/3">
              <p className="text-gray-900 dark:text-white">
                {hospitalData.name}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 sm:w-1/3 sm:pr-4 mb-1 sm:mb-0">
              Email
            </span>
            <div className="sm:w-2/3">
              <p className="text-gray-900 dark:text-white">
                {hospitalData.email}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 sm:w-1/3 sm:pr-4 mb-1 sm:mb-0">
              Location
            </span>
            <div className="sm:w-2/3">
              <p className="text-gray-900 dark:text-white">
                {hospitalData.location}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 sm:w-1/3 sm:pr-4 mb-1 sm:mb-0">
              Phone
            </span>
            <div className="sm:w-2/3">
              <p className="text-gray-900 dark:text-white">
                {hospitalData.phone}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 sm:w-1/3 sm:pr-4 mb-1 sm:mb-0">
              License Number
            </span>
            <div className="sm:w-2/3">
              <p className="text-gray-900 dark:text-white">
                {hospitalData.license}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HospitalProfile;
