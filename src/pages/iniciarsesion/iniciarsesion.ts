import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
//import {AutenticacionService } from '../servicios/autenticacion.service';
                                                                                                      

@IonicPage()
@Component({
  selector: 'page-iniciarsesion',
  templateUrl: 'iniciarsesion.html',
})
export class IniciarsesionPage {

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams)
  			 // public autenticacionService: AutenticacionService)
  			   {}

  iniciarSesion(formulario: NgForm){

  }

  /*registrarUsuario(formulario : NgForm){
  	this.autenticacionService.registrarUsuario(
  		formulario.value.correo,
  		formulario.value.clave);
  }*/

}
