import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ServiceDBService } from 'src/app/services/service-db.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  arregloVisas: any = [
    {
      id: '',
      pais: '',
      ed_min: '',
      ed_max: '',
      est: '',
      det: ''
    }
  ]
  
  constructor(private router: Router, private serviceBD: ServiceDBService){

  }

  ngOnInit() {
    this.serviceBD.dbState().subscribe(res => {
      if(res){
        this.serviceBD.fetchVisas().subscribe(item => {
          this.arregloVisas = item;
        })
      }
    })
  }

  modificar(x: any){
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id,
        paisEnviado: x.pais,
        edadMinEnviado: x.ed_min,
        edadMaxEnviado: x.ed_max,
        estadoEnviado: x.est,
        detallesEnviado: x.det
      }
    }
    this.router.navigate(['/modificar'], navigationExtras)
  }

  eliminar(x: any){
    this.serviceBD.eliminarVisas(x.id);
    this.serviceBD.presentToast("Noticia Eliminada")
  }



}
