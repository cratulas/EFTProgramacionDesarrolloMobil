import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDBService } from 'src/app/services/service-db.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  pais: string = "";
  edadMin!: number;
  edadMax!: number;
  estado!: number;
  detalles: string = "";
  id: number = 0;

  constructor(private router: Router,private activedRouter: ActivatedRoute, private servicio: ServiceDBService,) { 
    this.activedRouter.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.id = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.pais = this.router.getCurrentNavigation()?.extras?.state?.['paisEnviado'];
        this.edadMin = this.router.getCurrentNavigation()?.extras?.state?.['edadMinEnviado'];
        this.edadMax = this.router.getCurrentNavigation()?.extras?.state?.['edadMaxEnviado'];
        this.estado = this.router.getCurrentNavigation()?.extras?.state?.['estadoEnviado'];
        this.detalles = this.router.getCurrentNavigation()?.extras?.state?.['detallesEnviado'];
      }
    })
  }

  ngOnInit() {
  }

  enviarDatos(){
    this.servicio.modificarVIsas(this.id,this.pais,this.edadMin,this.edadMax,this.estado,this.detalles);
    this.servicio.presentToast("Visa Actulkizada");
    this.router.navigate(['/listar']);
  }
}
