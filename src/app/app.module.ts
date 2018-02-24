import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { AgmCoreModule } from '@agm/core';
//import { AgmCoreModule } from'angular2-google-maps/core'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VentaPage } from '../pages/venta/venta';
import { AgregarVentaPage } from '../pages/agregar-venta/agregar-venta';
import { IniciarsesionPage} from'../pages/iniciarSesion/iniciarSesion';
//import { Geolocation } from '@ionic-native/geolocation';
//import {AutenticacionService } from '../servicios/servicios/autenticacion.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VentaPage,
    AgregarVentaPage,
    IniciarsesionPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //AgmCoreModule.forRoot({
      //apiKey: 'AIzaSyCsfNSeHWa8kLq01NIUCNawo94jnf5qFAM'
   // })
    
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VentaPage,
    AgregarVentaPage,
    IniciarsesionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
