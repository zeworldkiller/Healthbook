import { Component, OnInit,EventEmitter,Input,Output, } from '@angular/core';
import { ConsultationService } from '../consultation.service';
import { Consultation } from '../consultation.model';
import { LocalStorageService } from '../local-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultation-list',
  templateUrl: './consultation-list.component.html',
  styleUrls: ['./consultation-list.component.scss']
})
export class ConsultationListComponent implements OnInit {
  @Input() consultations: Consultation[] = [];
  @Output() consultationSelected = new EventEmitter<Consultation>();

  isSidebarOpen:boolean=true;

  constructor(private consultationService: ConsultationService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.consultations = this.localStorageService.getData('consultation') || [];
  }
  selectConsultation(consultation: Consultation): void {
    this.consultationSelected.emit(consultation);
  }
  loadConsultations(): void {
    this.consultations = this.localStorageService.getData('consultation');
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
