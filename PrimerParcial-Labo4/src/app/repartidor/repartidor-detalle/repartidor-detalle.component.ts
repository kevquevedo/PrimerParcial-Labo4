import { Component, OnInit } from '@angular/core';
import { Repartidores } from 'src/app/models/repartidores/repartidores';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

  repartidor!: Repartidores;
  pais!:any;

  constructor() { }

  ngOnInit(): void {
  }

  repartidorSeleccionado(repartidor:any){
    this.repartidor = repartidor;
    this.pais = repartidor.pais;
  }

}
