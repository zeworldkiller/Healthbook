// patient.service.ts

import { Injectable } from '@angular/core';
import { Consultation } from './consultation.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Consultation[] = []; // Tableau pour stocker les patients

  constructor() { }

  // Méthode pour ajouter un nouveau patient
  addPatient(patient: Consultation): void {
    // Générez un identifiant unique pour le nouveau patient (par exemple en utilisant la longueur du tableau + 1)
    patient.id = this.patients.length + 1;
    // Ajoutez le patient à la liste des patients
    this.patients.push(patient);
    // Enregistrez les patients dans le stockage local ou la base de données
    this.savePatientsToLocalStorage();
  }

  // Méthode pour récupérer tous les patients
  getPatients(): Consultation[] {
    // Récupérez les patients depuis le stockage local ou la base de données
    this.patients = this.getPatientsFromLocalStorage();
    // Retournez les patients récupérés
    return this.patients;
  }

  // Méthode pour sauvegarder les patients dans le stockage local
  private savePatientsToLocalStorage(): void {
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }

  // Méthode pour récupérer les patients depuis le stockage local
  private getPatientsFromLocalStorage(): Consultation[] {
    const patientsString = localStorage.getItem('patients');
    return patientsString ? JSON.parse(patientsString) : [];
  }
}
