import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProfilComponent } from './profil/profil.component';
import { HealthJournalComponent } from './health-journal/health-journal.component';
import { AddConsultationComponent } from './add-consultation/add-consultation.component';
import { ConsultationDetailsComponent } from './consultation-details/consultation-details.component';
import { ConsultationListComponent } from './consultation-list/consultation-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'appointment',component: AppointmentComponent},
  {path: 'profil',component: ProfilComponent},
  {path: 'health-journal',component: HealthJournalComponent},
  {path: 'add-consultation',component: AddConsultationComponent},
  {path: 'consultation-details/:id',component: ConsultationDetailsComponent},
  {path: 'consultation-list',component: ConsultationListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
