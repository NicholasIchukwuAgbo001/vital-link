import { create } from "zustand";
import { Hospital, RecordData } from "../../types.ts";
import { generateCertificateId, generateId } from "../utils/helpers.ts";

interface DataState {
  hospitals: Hospital[];
  records: RecordData[];
  addHospital: (hospitalData: Omit<Hospital, "id">) => Hospital;
  updateHospital: (hospital: Hospital) => void;
  deleteHospital: (hospitalId: string) => void;
  approveHospital: (hospitalId: string, password: string) => void;
  addRecord: (
    recordData: Omit<RecordData, "id" | "certificateId" | "createdAt">
  ) => RecordData;
  updateRecord: (record: RecordData) => void;
  deleteRecord: (recordId: string) => void;
  getRecordByCertId: (certId: string) => RecordData | undefined;
  getHospitalById: (hospitalId: string) => Hospital | undefined;
}

const getInitialState = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    console.log(`Loading ${key} from localStorage:`, item);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage`, error);
    return defaultValue;
  }
};

export const useDataStore = create<DataState>((set, get) => ({
  hospitals: getInitialState<Hospital[]>("vitalLinkHospitals", []),
  records: getInitialState<RecordData[]>("vitalLinkRecords", []),

  addHospital: (hospitalData) => {
    const newHospital: Hospital = {
      ...hospitalData,
      id: generateId(),
    };
    set((state) => {
      const updatedHospitals = [...state.hospitals, newHospital];
      localStorage.setItem(
        "vitalLinkHospitals",
        JSON.stringify(updatedHospitals)
      );
      return { hospitals: updatedHospitals };
    });
    return newHospital;
  },

  updateHospital: (updatedHospital) => {
    set((state) => {
      const updatedHospitals = state.hospitals.map((h) =>
        h.id === updatedHospital.id ? updatedHospital : h
      );
      localStorage.setItem(
        "vitalLinkHospitals",
        JSON.stringify(updatedHospitals)
      );
      return { hospitals: updatedHospitals };
    });
  },

  deleteHospital: (hospitalId) => {
    set((state) => {
      const updatedHospitals = state.hospitals.filter(
        (h) => h.id !== hospitalId
      );
      const updatedRecords = state.records.filter(
        (r) => r.hospitalId !== hospitalId
      );
      localStorage.setItem(
        "vitalLinkHospitals",
        JSON.stringify(updatedHospitals)
      );
      localStorage.setItem("vitalLinkRecords", JSON.stringify(updatedRecords));
      return { hospitals: updatedHospitals, records: updatedRecords };
    });
  },

  approveHospital: (hospitalId, password) => {
    set((state) => {
      const updatedHospitals = state.hospitals.map((h) =>
        h.id === hospitalId ? { ...h, password } : h
      );
      localStorage.setItem(
        "vitalLinkHospitals",
        JSON.stringify(updatedHospitals)
      );
      return { hospitals: updatedHospitals };
    });
  },

  addRecord: (recordData) => {
    const newRecord: RecordData = {
      ...recordData,
      id: generateId(),
      certificateId: generateCertificateId(recordData.recordType),
      createdAt: new Date().toISOString(),
    };
    console.log("Adding new record:", newRecord);
    set((state) => {
      const updatedRecords = [...state.records, newRecord];
      localStorage.setItem("vitalLinkRecords", JSON.stringify(updatedRecords));
      console.log("Updated records in localStorage:", updatedRecords);
      return { records: updatedRecords };
    });
    return newRecord;
  },

  updateRecord: (updatedRecord) => {
    set((state) => {
      const updatedRecords = state.records.map((r) =>
        r.id === updatedRecord.id ? updatedRecord : r
      );
      localStorage.setItem("vitalLinkRecords", JSON.stringify(updatedRecords));
      return { records: updatedRecords };
    });
  },

  deleteRecord: (recordId) => {
    set((state) => {
      const updatedRecords = state.records.filter((r) => r.id !== recordId);
      localStorage.setItem("vitalLinkRecords", JSON.stringify(updatedRecords));
      return { records: updatedRecords };
    });
  },

  getRecordByCertId: (certId: string) => {
    return get().records.find((r) => r.certificateId === certId);
  },

  getHospitalById: (hospitalId: string) => {
    return get().hospitals.find((h) => h.id === hospitalId);
  },
}));
