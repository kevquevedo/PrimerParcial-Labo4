import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OctavioService } from '../services/octavioService/octavio.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit, OnDestroy {

  subsDatos! : Subscription;
  usuario! : string;
  imagen! : string;
  localidad! : string;

  constructor(
    private datosServ : OctavioService
  ) {
    this.datosServ.obtenerDatos();
  }

  ngOnInit(): void {
    this.subsDatos = this.datosServ.datos.subscribe( respuesta => {
      this.usuario = respuesta.login;
      this.imagen = respuesta.avatar_url;
      this.localidad = respuesta.location;
    });
  }

  ngOnDestroy(){
    this.subsDatos.unsubscribe();
  }

}
