import { RecordType } from "../../types.ts";

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 10);
};

export const generateCertificateId = (type: RecordType): string => {
  const prefix = type === RecordType.BIRTH ? "BTH" : "DTH";
  const randomNumber = Math.floor(10000 + Math.random() * 90000);
  return `${prefix}-${randomNumber}`;
};
