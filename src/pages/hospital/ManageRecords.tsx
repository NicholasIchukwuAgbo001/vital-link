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
  const { records: allRecords, addRecord } = useDataStore();

  const hospitalRecords = allRecords
    .filter((r) => r.hospitalId === user?.hospitalId)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState<string>("");

  const openModalForCreate = () => {
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
    console.log("Update called but not implemented", recordData);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Records</h1>
        <div className="flex space-x-2">
          <Button onClick={openModalForCreate}>Register New Record</Button>
        </div>
      </div>

      <RecordsTable
        records={hospitalRecords}
        onQR={openQRModal}
        onRegisterNewRecord={openModalForCreate}
        isEmpty={hospitalRecords.length === 0}
        showActions={true}
      />

      <Modal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title="Register New Record"
      >
        <RecordForm
          onSubmit={handleCreateSubmit}
          onUpdate={handleUpdateSubmit}
          initialData={null}
          isEditing={false}
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
