import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Visas } from './visas';

@Injectable({
  providedIn: 'root'
})
export class ServiceDBService {

  public database!: SQLiteObject;

  tablaVisa: string = "CREATE TABLE IF NOT EXISTS visa(id_visa INTEGER PRIMARY KEY AUTOINCREMENT, pais VARCHAR(40) NOT NULL, edad_min INTEGER, edad_max INTEGER, estado BOOLEAN, detalle TEXT);";
  registroVisa: string = "INSERT or IGNORE INTO visa(id_visa, pais, edad_min, edad_max, estado, detalle) VALUES (1, 'Nueva Zelanda', 18, 35, 1, 'LoremIpsummmmmmmmmmmmmmmm');";
  listaVisas = new BehaviorSubject([]);
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  
  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController ) { 
    this.crearDB();
  }

  async presentToast(msj: string){
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'globe'
    });

    await toast.present();
  }

  async presentAlert(msj: string){
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK']
    });

    await alert.present();
  }

  crearDB(){
    this.platform.ready().then(() => {

      this.sqlite.create({
        name: 'bdvisas.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
      }).catch(e => {
        this.presentToast("Error BD: " + e);
      })
    })
  }

  async crearTablas(){
    try{

      await this.database.executeSql(this.tablaVisa, []);

      await this.database.executeSql(this.registroVisa, []);

      this.buscarVisas();

      this.isDBReady.next(true);
    } catch(e){
      this.presentToast("Error Tablas: " + e);
    }
  }

  buscarVisas(){
    return this.database.executeSql('SELECT * FROM visa', []).then(res => {
      let items: Visas[] = [];

      if(res.rows.length > 0){
        for (var i=0; i< res.rows.length; i++){
          items.push({
            id: res.rows.item(i).id_visa,
            pais: res.rows.item(i).pais,
            ed_min: res.rows.item(i).edad_min,
            ed_max: res.rows.item(i).edad_max,
            est: res.rows.item(i).estado,
            det: res.rows.item(i).detalle
          })
        }
      }
      this.listaVisas.next(items as any)
    })
  }

  dbState(){
    return this.isDBReady.asObservable();
  }

  fetchVisas(): Observable<Visas[]> {
    return this.listaVisas.asObservable();
  }

  insertarVisas(pais: any,edad_min: any,edad_max: any,estado: any,detalle: any){
    let data = [pais,edad_min,edad_max, estado,detalle];
    return this.database.executeSql('INSERT INTO visa(pais,edad_min,edad_max,estado,detalle) VALUES (?,?,?,?,?)',data).then(res=>{
      this.buscarVisas();
    });
  }

  modificarVIsas(id: any,pais: any,edad_min: any,edad_max: any,estado: any,detalle: any){
    let data = [pais,edad_min,edad_max, estado,detalle, id];
    return this.database.executeSql('UPDATE visa SET pais = ?, edad_min = ?, edad_max =?, estado = ?, detalle =? WHERE id_visa = ?',data).then(data2=>{
      this.buscarVisas();
    })
  }

  eliminarVisas(id: any){

    return this.database.executeSql('DELETE FROM visa WHERE id_visa = ?',[id]).then(a=>{
      this.buscarVisas();
    })
  }

}

  