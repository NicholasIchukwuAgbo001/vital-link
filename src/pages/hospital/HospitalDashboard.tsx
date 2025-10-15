import React from "react";
import { useDataStore } from "../../store/useDataStore.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import Card from "../../components/ui/Card.tsx";
import { RecordType } from "../../../types.ts";
import RecordsByMonthChart from "../../components/dashboard/RecordsByMonthChart.tsx";
import PieChartCard from "../../components/dashboard/PieChartCard.tsx";
import RecentRecordsList from "../../components/dashboard/RecentRecordsList.tsx";
import StatCard from "../../components/dashboard/StatCard.tsx";

const HospitalDashboard = () => {
  const { user } = useAuthStore();
  const { records, getHospitalById } = useDataStore();

  const hospital = user?.hospitalId ? getHospitalById(user.hospitalId) : null;
  const hospitalRecords = records.filter(
    (r) => r.hospitalId === user?.hospitalId
  );

  const birthRecords = hospitalRecords.filter(
    (r) => r.recordType === RecordType.BIRTH
  ).length;
  const deathRecords = hospitalRecords.filter(
    (r) => r.recordType === RecordType.DEATH
  ).length;

  const getRecordsByMonth = () => {
    const months = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();

      const monthRecords = hospitalRecords.filter((record) => {
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

  const maleRecords = hospitalRecords.filter((r) => r.gender === "Male").length;
  const femaleRecords = hospitalRecords.filter(
    (r) => r.gender === "Female"
  ).length;

  const genderData = [
    { name: "Male", value: maleRecords, fill: "#3498db" },
    { name: "Female", value: femaleRecords, fill: "#e91e63" },
  ];

  const chartData = [
    { name: "Births", value: birthRecords, fill: "#3498db" },
    { name: "Deaths", value: deathRecords, fill: "#9b59b6" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome, {hospital?.name || "User"}!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Here's a summary of your hospital's activity.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Records" value={hospitalRecords.length} />
        <StatCard title="Birth Records" value={birthRecords} />
        <StatCard title="Death Records" value={deathRecords} />
        <StatCard
          title="This Month"
          value={
            recordsByMonth.length > 0
              ? recordsByMonth[recordsByMonth.length - 1].total
              : 0
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecordsByMonthChart data={recordsByMonth} />
        <PieChartCard
          data={chartData}
          title="Record Distribution"
          showLabelLine={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChartCard data={genderData} title="Gender Distribution" />
        <RecentRecordsList records={hospitalRecords} />
      </div>
    </div>
  );
};

export default HospitalDashboard;
