import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceDBService } from 'src/app/services/service-db.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  pais: string = "";
  edadMin!: number;
  edadMax!: number;
  estado!: number;
  detalles: string = "";
  constructor(private router: Router, private db: ServiceDBService, private toastController: ToastController) { }

  ngOnInit() {
  }

  enviarDatos(){
    this.db.insertarVisas(this.pais,this.edadMin,this.edadMax,this.estado,this.detalles);
    this.presentToast("Visa Agregada");
    this.router.navigate(['/listar']);
  }

  async presentToast(msj: string){
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'globe'
    });

    await toast.present();
  }
}
