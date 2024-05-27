import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly APPOINTMENTS_KEY = 'appointments';
  appointments: any[] = [];

  constructor() {
    this.appointments = this.getAppointmentsFromLocalStorage();
  }

  getAppointmentsFromLocalStorage(): any[] {
    const savedAppointments = localStorage.getItem(this.APPOINTMENTS_KEY);
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment(appointment: any) {
    this.appointments.push(appointment);
    localStorage.setItem(this.APPOINTMENTS_KEY, JSON.stringify(this.appointments));
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem(this.APPOINTMENTS_KEY, JSON.stringify(this.appointments));
  }
}
