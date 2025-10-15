import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDataStore } from "../../store/useDataStore.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { RecordData, RecordType } from "../../../types.ts";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import RecordForm from "../../components/RecordForm";
import QRDisplay from "../../components/QRDisplay";
import RecordsTable from "../../components/records/RecordsTable";

const ManageRecords = () => {
  const { user } = useAuthStore();
  const {
    records: allRecords,
    addRecord,
    updateRecord,
    deleteRecord,
  } = useDataStore();

  const hospitalRecords = allRecords
    .filter((r) => r.hospitalId === user?.hospitalId)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<RecordData | null>(null);
  const [selectedCertId, setSelectedCertId] = useState<string>("");

  const openModalForCreate = () => {
    setEditingRecord(null);
    setIsFormModalOpen(true);
  };

  const openModalForEdit = (record: RecordData) => {
    setEditingRecord(record);
    setIsFormModalOpen(true);
  };

  const openQRModal = (certificateId: string) => {
    setSelectedCertId(certificateId);
    setIsQRModalOpen(true);
  };

  const handleCreateSubmit = (
    recordData: Omit<
      RecordData,
      "id" | "certificateId" | "createdAt" | "hospitalId"
    >
  ) => {
    if (!user?.hospitalId) {
      toast.error("User not properly authenticated");
      return;
    }
    addRecord({ ...recordData, hospitalId: user.hospitalId });
    toast.success("Record created successfully!");
    setIsFormModalOpen(false);
  };

  const handleUpdateSubmit = (recordData: RecordData) => {
    updateRecord(recordData);
    toast.success("Record updated successfully!");
    setIsFormModalOpen(false);
  };

  const handleDelete = (recordId: string) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      deleteRecord(recordId);
      toast.success("Record deleted successfully.");
    }
  };

  const addTestRecord = () => {
    if (!user?.hospitalId) {
      toast.error("User not properly authenticated");
      return;
    }

    const testRecord = {
      fullName: "John Doe",
      date: new Date().toISOString().split("T")[0],
      gender: "Male" as const,
      parentOrNextOfKin: "Jane Doe",
      address: "123 Main St, City",
      recordType: RecordType.BIRTH,
    };

    addRecord({ ...testRecord, hospitalId: user.hospitalId });
    toast.success("Test record added successfully!");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Records</h1>
        <div className="flex space-x-2">
          <Button onClick={addTestRecord} variant="secondary">
            Add Test Record
          </Button>
          <Button onClick={openModalForCreate}>Register New Record</Button>
        </div>
      </div>

      <RecordsTable
        records={hospitalRecords}
        onEdit={openModalForEdit}
        onDelete={handleDelete}
        onQR={openQRModal}
        onAddTestRecord={addTestRecord}
        onRegisterNewRecord={openModalForCreate}
        isEmpty={hospitalRecords.length === 0}
      />

      <Modal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title={editingRecord ? "Edit Record" : "Register New Record"}
      >
        <RecordForm
          onSubmit={handleCreateSubmit}
          onUpdate={handleUpdateSubmit}
          initialData={editingRecord}
          isEditing={!!editingRecord}
        />
      </Modal>

      <Modal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        title="Certificate QR Code"
      >
        {selectedCertId && <QRDisplay certificateId={selectedCertId} />}
      </Modal>
    </div>
  );
};

export default ManageRecords;
