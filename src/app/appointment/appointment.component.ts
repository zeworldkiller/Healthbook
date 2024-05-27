// appointment.component.ts

import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './appointment.service';
import Swal from 'sweetalert2';
import { Consultation } from '../consultation.model';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  searchQuery: string = '';
  selectedDoctor: string = '';
  showAllAppointments = false;
  consultationsToShow: number = 3;
  appointments: any[] = [];
  selectedConsultation: Consultation | null = null;
  newAppointment: any = {}; 
  selectedAppointment: any; 
  consultations: Consultation[] = [];
  filteredConsultations: Consultation[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;

  constructor(private appointmentService: AppointmentService, private localStorageService: LocalStorageService, private router: Router) {}

  isSidebarOpen: boolean = true;

  ngOnInit(): void {
    this.loadConsultations();
    this.applyFilters();
  }

  addAppointment(date: string, time: string, doctor: string) {
    this.appointmentService.addAppointment({ date, time, doctor });
    this.appointments = this.appointmentService.getAppointmentsFromLocalStorage();
  }

  addConsultation(consultation: Consultation): void {
    this.consultations.push(consultation);
  }

  showAlert() {
    Swal.fire({
      title: 'Titre de l\'alerte',
      text: 'Message de l\'alerte',
      icon: 'info'
    });
  }
  openModal(consultation: Consultation): void {
    this.selectedConsultation = consultation;
  }
  
  closeModal(): void {
    this.selectedConsultation = null;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigateToConsultationDetails(id: string): void {
    this.router.navigateByUrl(`/consultation-details/${id}`);
  }

  deleteAppointment(index: number) {
    this.appointmentService.deleteAppointment(index);
    this.appointments = this.appointmentService.getAppointmentsFromLocalStorage();
  }

  showOtherConsultations() {
    this.showAllAppointments = !this.showAllAppointments;
  }

  showAppointmentDetails(appointment: any) {
    this.selectedAppointment = appointment;
  }

  loadConsultations(): void {
    this.consultations = this.localStorageService.getData('consultations') || [];
    this.applyFilters();
  }

  deleteConsultation(consultationId: string): void {
    this.consultations = this.consultations.filter(consultation => consultation.id !== consultationId);
    this.localStorageService.saveData('consultations', this.consultations);
    this.applyFilters();
  }

  get currentConsultations(): Consultation[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredConsultations.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilters();
    }
  }

  nextPage(): void {
    const totalPages = Math.ceil(this.filteredConsultations.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.applyFilters();
    }
  }

  applyFilters(): void {
    this.filteredConsultations = this.consultations.filter(consultation => {
      const matchesQuery = this.searchQuery ? 
        consultation.date.toDateString().includes(this.searchQuery.toLowerCase()) || 
        consultation.doctor.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      const matchesDoctor = this.selectedDoctor ? consultation.doctor === this.selectedDoctor : true;
      return matchesQuery && matchesDoctor;
    });
    this.totalPages = Math.ceil(this.filteredConsultations.length / this.itemsPerPage);
  }
}
