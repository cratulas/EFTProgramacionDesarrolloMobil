import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.name && this.email && this.password) {
      console.log('Registro exitoso');
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Por favor, complete todos los campos';

    }
  }
}
