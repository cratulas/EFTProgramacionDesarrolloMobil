import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; 

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {

      console.log('Inicio de sesión exitoso');
      
      this.router.navigate(['/home']);
      localStorage.setItem('email', this.username);
    } else {
      this.errorMessage = 'Por favor, ingrese usuario y contraseña';
    }
  }
}
