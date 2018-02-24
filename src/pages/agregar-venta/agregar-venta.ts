//import { NgModule  } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import { Geolocation } from 'ionic-native';
//import { AgmCoreModule } from '@agm/core';

@IonicPage()
@Component({
  selector: 'page-agregar-venta',
  templateUrl: 'agregar-venta.html',
})
export class AgregarVentaPage {
	
	ubicacion ={
		lat: 0,
		lng: 0
	}
 
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarVentaPage');
  }

 /* localizar(){
  	Geolocation.getCurrentPosition({timeout:3000})
  				.then( info => {
  					this.ubicacion.lat = info.coords.latitude;
  					this.ubicacion.lng = info.coords.longitude;
  				})
  				.catch(error =>{
  					let toast = this.toastCtrl.create({
  						message: 'No se pudo encontrar la ubicacion',
  						duration: 2000
  					});
  					toast.present();
  				})
  }*/

}
