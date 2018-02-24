import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AgregarVentaPage } from './../agregar-venta/agregar-venta';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	agregarVentaPage = AgregarVentaPage;

  constructor(public navCtrl: NavController)
   {

  }

}
