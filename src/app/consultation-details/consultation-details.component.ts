import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Consultation } from '../consultation.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-consultation-details',
  templateUrl: './consultation-details.component.html',
  styleUrls: ['./consultation-details.component.scss']
})
export class ConsultationDetailsComponent implements OnInit {
  consultationId!: string;
  consultation: Consultation | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

isSidebarOpen:boolean=true;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultationId = params['id'];
      this.loadConsultationDetails(this.consultationId);
    });
  }

  loadConsultationDetails(id: string): void {
    const consultations: Consultation[] = this.localStorageService.getData('consultations') || [];
    this.consultation = consultations.find(consultation => consultation.id === id);
    if (this.consultation !== undefined && this.consultation.patient !== undefined) {
      console.log(this.consultation.date);
    } else {
    }
    this.consultation = this.consultation || { id: '', date: new Date(), patient: '', doctor: '', time: '', weight: 0, height: 0, bloodPressure: '', symptoms: '', treatment: '', testsToPerform: [], medicationsPrescribed: [] };
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
}
