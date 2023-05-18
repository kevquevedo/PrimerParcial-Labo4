import { Component, Input, OnInit } from '@angular/core';
import { Repartidores } from 'src/app/models/repartidores/repartidores';

@Component({
  selector: 'app-info-repartidor',
  templateUrl: './info-repartidor.component.html',
  styleUrls: ['./info-repartidor.component.css']
})
export class InfoRepartidorComponent implements OnInit {

  @Input() repartidorDetalle : Repartidores | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
