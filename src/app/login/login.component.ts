import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) { }

  signIn(username: string, password: string) {
    if (username === 'jeff' && password === 'jeff') {
      console.log('Connexion réussie !');
      this.router.navigate(['/appointment']);
      this.showSuccessAlert();
    } else {
      console.log('Nom d\'utilisateur ou mot de passe incorrect.');
      this.showErrorAlert();
    }
  }

  private showSuccessAlert() {
    Swal.fire({
      title: 'Connexion réussie',
      text: 'Bienvenue Jeff !',
      icon: 'success'
    });
  }

  private showErrorAlert() {
    Swal.fire({
      title: 'Erreur de connexion',
      text: 'Nom d\'utilisateur ou mot de passe incorrect.',
      icon: 'error'
    });
  }
}
