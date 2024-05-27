import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  user = {
    firstName: '',
    lastName: '',
    birthday: '',
    address: '',
    bloodGroup: '',
    weight: 0,
    height: 0,
    emergencyContact: {
      name: '',
      address: '',
      phone: ''
    }
  };

  constructor() {
    const savedUserString = localStorage.getItem('savedUser');
    if (savedUserString !== null) {
      const savedUser = JSON.parse(savedUserString);
      this.user = savedUser;
    }
  }
  isSidebarOpen:boolean= true;

  editProfile() {
    console.log('Profil édité : ', this.user);
    
    localStorage.setItem('savedUser', JSON.stringify(this.user));
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
  showUserData: boolean = false;
  
  showProfile() {
    this.showUserData = true;
  }
  toggleUserData() {
    this.showUserData = !this.showUserData;
  }
}