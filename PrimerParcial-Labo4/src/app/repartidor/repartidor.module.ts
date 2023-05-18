import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorRoutingModule } from './repartidor-routing.module';
import { RepartidorAltaComponent } from './repartidor-alta/repartidor-alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from '../components/tabla-paises/tabla-paises.component';


@NgModule({
  declarations: [
    RepartidorAltaComponent,
    TablaPaisesComponent,
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RepartidorModule { }
