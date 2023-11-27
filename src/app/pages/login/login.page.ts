import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; 
  messj: string = 'Bienvenido a GoAndGo';
  hea: string = 'Bienvenido a GoAndGo';
  subhea: string = 'Bienvenido a GoAndGo';

  constructor(private router: Router,  private alertController: AlertController) {}

  login() {
    if (this.username && this.password) {

      console.log('Inicio de sesión exitoso');
      this.presentAlert(this.hea,this.subhea,this.messj);
      this.router.navigate(['/home']);
      localStorage.setItem('email', this.username);
    } else {
      this.errorMessage = 'Por favor, ingrese usuario y contraseña';
    }
  }

  async presentAlert(msj:string, msj2:string, msj3:string) {
    const alert = await this.alertController.create({
      header: msj,
      subHeader: msj2,
      message: msj3,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
