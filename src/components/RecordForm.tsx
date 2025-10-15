import React, { useState, useEffect } from "react";
import { RecordData, RecordType } from "../../types.ts";
import Input from "./ui/Input.tsx";
import Select from "./ui/Select.tsx";
import Button from "./ui/Button.tsx";

interface RecordFormProps {
  onSubmit: (
    data: Omit<RecordData, "id" | "certificateId" | "createdAt" | "hospitalId">
  ) => void;
  onUpdate: (data: RecordData) => void;
  initialData?: RecordData | null;
  isEditing: boolean;
}

const RecordForm: React.FC<RecordFormProps> = ({
  onSubmit,
  onUpdate,
  initialData,
  isEditing,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    date: "",
    gender: "Male" as "Male" | "Female",
    parentOrNextOfKin: "",
    address: "",
    recordType: RecordType.BIRTH,
  });

  useEffect(() => {
    if (isEditing && initialData) {
      setFormData({
        fullName: initialData.fullName,
        date: initialData.date,
        gender: initialData.gender,
        parentOrNextOfKin: initialData.parentOrNextOfKin,
        address: initialData.address,
        recordType: initialData.recordType,
      });
    } else {
      setFormData({
        fullName: "",
        date: "",
        gender: "Male",
        parentOrNextOfKin: "",
        address: "",
        recordType: RecordType.BIRTH,
      });
    }
  }, [initialData, isEditing]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && initialData) {
      onUpdate({ ...initialData, ...formData });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        label="Record Type"
        name="recordType"
        value={formData.recordType}
        onChange={handleChange}
        required
      >
        <option value={RecordType.BIRTH}>Birth</option>
        <option value={RecordType.DEATH}>Death</option>
      </Select>
      <Input
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <Input
        label={
          formData.recordType === RecordType.BIRTH
            ? "Date of Birth"
            : "Date of Death"
        }
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <Select
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Input
        label={
          formData.recordType === RecordType.BIRTH
            ? "Parent's Name"
            : "Next of Kin"
        }
        name="parentOrNextOfKin"
        value={formData.parentOrNextOfKin}
        onChange={handleChange}
        required
      />
      <Input
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <Button type="submit" fullWidth>
        {isEditing ? "Update Record" : "Register Record"}
      </Button>
    </form>
  );
};

export default RecordForm;
