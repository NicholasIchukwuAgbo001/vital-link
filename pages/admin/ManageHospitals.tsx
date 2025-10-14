import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDataStore } from "../../store/useDataStore";
import { Hospital } from "../../types";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import HospitalForm from "../../components/HospitalForm";
import HospitalTable from "../../components/hospitals/HospitalTable";

const ManageHospitals = () => {
  const {
    hospitals,
    addHospital,
    updateHospital,
    deleteHospital,
    approveHospital,
  } = useDataStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHospital, setEditingHospital] = useState<Hospital | null>(null);
  const [approvalHospital, setApprovalHospital] = useState<Hospital | null>(
    null
  );

  const openModalForCreate = () => {
    setEditingHospital(null);
    setApprovalHospital(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (hospital: Hospital) => {
    setEditingHospital(hospital);
    setApprovalHospital(null);
    setIsModalOpen(true);
  };

  const openModalForApproval = (hospital: Hospital) => {
    setApprovalHospital(hospital);
    setEditingHospital(null);
    setIsModalOpen(true);
  };

  const handleCreateSubmit = (hospitalData: Omit<Hospital, "id">) => {
    addHospital(hospitalData);
    toast.success(
      "Hospital created successfully! Hospital can now log in with provided credentials."
    );
    setIsModalOpen(false);
  };

  const handleUpdateSubmit = (hospitalData: Hospital) => {
    updateHospital(hospitalData);
    toast.success("Hospital updated successfully!");
    setIsModalOpen(false);
  };

  const handleApprovalSubmit = (hospitalData: Omit<Hospital, "id">) => {
    if (approvalHospital) {
      approveHospital(approvalHospital.id, hospitalData.password);
      toast.success("Hospital approved successfully! Hospital can now log in.");
      setIsModalOpen(false);
    }
  };

  const handleDelete = (hospitalId: string) => {
    if (
      window.confirm(
        "Are you sure you want to delete this hospital and all its records?"
      )
    ) {
      deleteHospital(hospitalId);
      toast.success("Hospital deleted successfully.");
    }
  };

  const approvedHospitals = hospitals.filter((h) => h.password);
  const pendingHospitals = hospitals.filter((h) => !h.password);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Hospitals</h1>
        <Button onClick={openModalForCreate}>Add Hospital</Button>
      </div>

      <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <p className="text-blue-800 dark:text-blue-200">
          <strong>Note:</strong> Hospitals created here can log in using the
          email and password provided during creation. Pending hospitals need to
          be approved by setting a password.
        </p>
      </div>

      <HospitalTable
        hospitals={approvedHospitals}
        title="Approved Hospitals"
        onEdit={openModalForEdit}
        onDelete={handleDelete}
        isEmpty={approvedHospitals.length === 0}
        emptyMessage="No approved hospitals found."
      />

      <HospitalTable
        hospitals={pendingHospitals}
        title="Pending Hospitals"
        onApprove={openModalForApproval}
        onDelete={handleDelete}
        isEmpty={pendingHospitals.length === 0}
        emptyMessage="No pending hospitals found."
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          approvalHospital
            ? "Approve Hospital"
            : editingHospital
            ? "Edit Hospital"
            : "Add New Hospital"
        }
      >
        <HospitalForm
          onSubmit={handleCreateSubmit}
          onUpdate={handleUpdateSubmit}
          initialData={editingHospital || approvalHospital}
          isEditing={!!editingHospital}
          isApproval={!!approvalHospital}
        />
      </Modal>
    </div>
  );
};

export default ManageHospitals;
