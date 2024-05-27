// consultation.service.ts

import { Injectable } from '@angular/core';
import { Consultation } from './consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private consultations: Consultation[] = []; // Tableau pour stocker les consultations

  constructor() { }
  addConsultation(consultation: Consultation): void {
   // consultation.id = this.consultations.length + 1;
    // Ajoutez la consultation à la liste des consultations
    this.consultations.push(consultation);
    // Enregistrez les consultations dans le stockage local ou la base de données
    this.saveConsultationsToLocalStorage();
  }

  // Méthode pour récupérer toutes les consultations
  getConsultations(): Consultation[] {
    // Récupérez les consultations depuis le stockage local ou la base de données
    this.consultations = this.getConsultationsFromLocalStorage();
    // Retournez les consultations récupérées
    return this.consultations;
  }

  // Méthode pour sauvegarder les consultations dans le stockage local
  private saveConsultationsToLocalStorage(): void {
    localStorage.setItem('consultations', JSON.stringify(this.consultations));
  }

  // Méthode pour récupérer les consultations depuis le stockage local
  private getConsultationsFromLocalStorage(): Consultation[] {
    const consultationsString = localStorage.getItem('consultations');
    return consultationsString ? JSON.parse(consultationsString) : [];
  }
}
