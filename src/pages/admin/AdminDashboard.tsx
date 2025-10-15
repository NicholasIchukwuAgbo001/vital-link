import React from "react";
import { useDataStore } from "../../store/useDataStore.ts";
import { Hospital, RecordType } from "../../../types.ts";
import RecordsByMonthChart from "../../components/dashboard/RecordsByMonthChart.tsx";
import PieChartCard from "../../components/dashboard/PieChartCard.tsx";
import TopHospitalsList from "../../components/dashboard/TopHospitalsList.tsx";
import StatCard from "../../components/dashboard/StatCard.tsx";

const AdminDashboard = () => {
  const hospitals = useDataStore((state) => state.hospitals);
  const records = useDataStore((state) => state.records);

  const birthRecords = records.filter(
    (r) => r.recordType === RecordType.BIRTH
  ).length;
  const deathRecords = records.filter(
    (r) => r.recordType === RecordType.DEATH
  ).length;

  const totalRecords = records.length;

  const getRecordsByMonth = () => {
    const months = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();

      const monthRecords = records.filter((record) => {
        const recordDate = new Date(record.createdAt);
        return (
          recordDate.getMonth() === date.getMonth() &&
          recordDate.getFullYear() === date.getFullYear()
        );
      });

      const birthCount = monthRecords.filter(
        (r) => r.recordType === RecordType.BIRTH
      ).length;
      const deathCount = monthRecords.filter(
        (r) => r.recordType === RecordType.DEATH
      ).length;

      months.push({
        name: `${monthName} ${year}`,
        births: birthCount,
        deaths: deathCount,
        total: birthCount + deathCount,
      });
    }

    return months;
  };

  const recordsByMonth = getRecordsByMonth();

  const getTopHospitals = () => {
    const hospitalRecordCount: {
      [key: string]: { hospital: Hospital; count: number };
    } = {};

    records.forEach((record) => {
      const hospitalId = record.hospitalId;
      if (hospitalId) {
        if (!hospitalRecordCount[hospitalId]) {
          const hospital = hospitals.find((h) => h.id === hospitalId);
          if (hospital) {
            hospitalRecordCount[hospitalId] = { hospital, count: 0 };
          }
        }
        if (hospitalRecordCount[hospitalId]) {
          hospitalRecordCount[hospitalId].count += 1;
        }
      }
    });

    return Object.values(hospitalRecordCount)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  };

  const topHospitals = getTopHospitals();

  const maleRecords = records.filter((r) => r.gender === "Male").length;
  const femaleRecords = records.filter((r) => r.gender === "Female").length;

  const genderData = [
    { name: "Male", value: maleRecords, fill: "#3498db" },
    { name: "Female", value: femaleRecords, fill: "#e91e63" },
  ];

  const recordTypeData = [
    { name: "Births", value: birthRecords, fill: "#3498db" },
    { name: "Deaths", value: deathRecords, fill: "#e74c3c" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Hospitals" value={hospitals.length} />
        <StatCard title="Total Records" value={totalRecords} />
        <StatCard title="Birth Records" value={birthRecords} />
        <StatCard title="Death Records" value={deathRecords} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecordsByMonthChart data={recordsByMonth} />
        <PieChartCard data={recordTypeData} title="Record Type Distribution" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChartCard data={genderData} title="Gender Distribution" />
        <TopHospitalsList hospitals={topHospitals} />
      </div>
    </div>
  );
};

export default AdminDashboard;
