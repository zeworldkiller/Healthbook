import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { Consultation } from '../consultation.model';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss']
})
export class AddConsultationComponent implements OnInit {
  @Output() consultationAdded = new EventEmitter<Consultation>();
  steps: string[] = ['Prise des constantes', 'Diagnostic provisoire', 'Prescription des médicaments', 'Analyses et soins'];

  // Autres propriétés et méthodes...

  constantesFormGroup!: FormGroup;
  diagnosticFormGroup!: FormGroup;
  prescriptionFormGroup!: FormGroup;
  analysesFormGroup!: FormGroup;

  isSidebarOpen: boolean = true;
  formattedDate: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.constantesFormGroup = this._formBuilder.group({
      date: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      bloodPressure: ['', Validators.required]
    });

    this.diagnosticFormGroup = this._formBuilder.group({
      symptoms: ['', Validators.required]
    });
  
    this.prescriptionFormGroup = this._formBuilder.group({
      medicationsPrescribed: ['', Validators.required]
    });

    this.analysesFormGroup = this._formBuilder.group({
      testsToPerform: ['', Validators.required]
    });
  }


  formatDate(date: Date): string {
    return date.toISOString().substring(0, 10);
  }

  generateId(): string {
    const existingConsultations = this.localStorageService.getData('consultations') || [];
    const maxId = existingConsultations.reduce((max: number, consultation: Consultation) => Math.max(max, +consultation.id), 0);
    return (maxId + 1).toString();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  createSymptom(): FormGroup {
    return this._formBuilder.group({
      symptom: ['', Validators.required]
    });
  }
  

  symptoms(): FormArray {
    return this.diagnosticFormGroup.get('symptoms') as FormArray;
  }
  

  addSymptom() {
    this.symptoms().push(this.createSymptom());
  }


  addConsultation(): void {
    const newConsultation: Consultation = {
      id: this.generateId(),
      date: new Date(this.constantesFormGroup.value.date),
      patient: '',
      doctor: '', 
      time: '',
      weight: this.constantesFormGroup.value.weight,
      height: this.constantesFormGroup.value.height,
      bloodPressure: this.constantesFormGroup.value.bloodPressure,
      symptoms: this.diagnosticFormGroup.value.symptoms,
      treatment: '',
      testsToPerform: this.analysesFormGroup.value.testsToPerform.split(','),
      medicationsPrescribed: this.prescriptionFormGroup.value.medicationsPrescribed.split(',')
    };

    const existingConsultations = this.localStorageService.getData('consultations') || [];
    existingConsultations.push(newConsultation);
    this.localStorageService.saveData('consultations', existingConsultations);

    this.consultationAdded.emit(newConsultation);

    // Reset forms
    this.constantesFormGroup.reset();
    this.diagnosticFormGroup.reset();
    this.prescriptionFormGroup.reset();
    this.analysesFormGroup.reset();
  }
  
  showAlert() {
    Swal.fire({
      title: 'Titre de l\'alerte',
      text: 'Message de l\'alerte',
      icon: 'info'
    });
  }
}
