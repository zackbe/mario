import firebase from 'firebase'
import { Injectable } from '@angular/core'

@Injectable()
export class AutenticacionService{
	registrarUsuario(correo:string, clave:string){
		return firebase.auth().createUserWithEmailAndPassword(correo, clave);
	}


}