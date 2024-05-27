import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-health-journal',
  templateUrl: './health-journal.component.html',
  styleUrls: ['./health-journal.component.scss']
})
export class HealthJournalComponent {
  healthEntries: any[] = []; 
  entryDate: string = '';
  symptoms: string = '';
  treatment: string = '';
  diet: string = '';
  importantEvents: string = '';
  showEntries: boolean = false;
  deletionMode: boolean = false;

  constructor() {
    // Charger les données du local storage si existant
    const savedEntries = localStorage.getItem('healthEntries');
    if (savedEntries) {
      this.healthEntries = JSON.parse(savedEntries);
    }
  }
isSidebarOpen:boolean=true;
  addEntry() {
    const newEntry = {
      id: Date.now(), 
      date: this.entryDate,
      symptoms: this.symptoms,
      treatment: this.treatment,
      diet: this.diet,
      importantEvents: this.importantEvents
    };

    this.healthEntries.push(newEntry);

    localStorage.setItem('healthEntries', JSON.stringify(this.healthEntries));

    this.entryDate = '';
    this.symptoms = '';
    this.treatment = '';
    this.diet = '';
    this.importantEvents = '';
  }
  toggleEntries() {
    this.showEntries = !this.showEntries;
  }
  deleteEntry(id: number) {
    this.healthEntries = this.healthEntries.filter(entry => entry.id !== id);
    localStorage.setItem('healthEntries', JSON.stringify(this.healthEntries));
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  showAlert() {
    Swal.fire({
      title: 'Titre de l\'alerte',
      text: 'Message de l\'alerte',
      icon: 'info'
    });
  }
  toggleDeletionMode() {
    this.deletionMode = !this.deletionMode;
  }
}
