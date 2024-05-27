import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProfilComponent } from './profil/profil.component';
import { HealthJournalComponent } from './health-journal/health-journal.component';
import { ConsultationListComponent } from './consultation-list/consultation-list.component';
import { AddConsultationComponent } from './add-consultation/add-consultation.component';
import { ConsultationDetailsComponent } from './consultation-details/consultation-details.component';
import{MatStepperModule} from '@angular/material/stepper';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppointmentComponent,
    ProfilComponent,
    HealthJournalComponent,
    ConsultationListComponent,
    AddConsultationComponent,
    ConsultationDetailsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
