export enum UserRole {
  ADMIN = "ADMIN",
  HOSPITAL = "HOSPITAL",
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  hospitalId?: string;
}

export interface Hospital {
  id: string;
  name: string;
  email: string;
  location: string;
  phone: string;
  license: string;
  password?: string;
}

export enum RecordType {
  BIRTH = "BIRTH",
  DEATH = "DEATH",
}

export interface RecordData {
  id: string;
  certificateId: string;
  hospitalId: string;
  fullName: string;
  date: string;
  gender: "Male" | "Female";
  parentOrNextOfKin: string;
  address: string;
  recordType: RecordType;
  createdAt: string;
}
