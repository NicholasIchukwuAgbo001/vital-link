import React, { useState, useMemo } from "react";
import { useDataStore } from "../../store/useDataStore";
import { RecordType } from "../../types";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import { ICONS } from "../../constants";
import RecordsTable from "../../components/records/RecordsTable";

const AdminRecords = () => {
  const { records, hospitals } = useDataStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterHospital, setFilterHospital] = useState("");
  const [filterType, setFilterType] = useState("");

  const getHospitalName = (hospitalId: string) => {
    return (
      hospitals.find((h) => h.id === hospitalId)?.name || "Unknown Hospital"
    );
  };

  const filteredRecords = useMemo(() => {
    return records
      .filter((record) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          record.fullName.toLowerCase().includes(searchLower) ||
          record.certificateId.toLowerCase().includes(searchLower)
        );
      })
      .filter((record) =>
        filterHospital ? record.hospitalId === filterHospital : true
      )
      .filter((record) =>
        filterType ? record.recordType === filterType : true
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }, [records, searchTerm, filterHospital, filterType]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Records</h1>
      <Card className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ICONS.search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <Select
            label=""
            value={filterHospital}
            onChange={(e) => setFilterHospital(e.target.value)}
          >
            <option value="">All Hospitals</option>
            {hospitals.map((h) => (
              <option key={h.id} value={h.id}>
                {h.name}
              </option>
            ))}
          </Select>
          <Select
            label=""
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value={RecordType.BIRTH}>Birth</option>
            <option value={RecordType.DEATH}>Death</option>
          </Select>
        </div>
      </Card>

      <RecordsTable
        records={filteredRecords}
        showHospital={true}
        getHospitalName={getHospitalName}
        isEmpty={filteredRecords.length === 0}
        emptyMessage="No records found."
        showActions={false}
      />
    </div>
  );
};

export default AdminRecords;
