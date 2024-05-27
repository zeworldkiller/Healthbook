// consultation.model.ts

export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    birthPlace: string;
    residence: string;
    address: string;
    sex: string;
    profession: string;
  }
  
  export interface Consultation {
    id: string;
    date: Date;
    time: string;
    doctor: string;
    patient: string;
    weight: number;
    height: number;
    bloodPressure: string;
    symptoms: string;
    treatment: string;
    testsToPerform: string[];
    medicationsPrescribed: string[];
  }
  