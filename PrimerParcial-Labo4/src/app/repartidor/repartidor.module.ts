import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorRoutingModule } from './repartidor-routing.module';
import { RepartidorAltaComponent } from './repartidor-alta/repartidor-alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from '../components/tabla-paises/tabla-paises.component';
import { RepartidorDetalleComponent } from './repartidor-detalle/repartidor-detalle.component';
import { InfoPaisComponent } from './info-pais/info-pais.component';
import { InfoRepartidorComponent } from './info-repartidor/info-repartidor.component';
import { TablaRepartidoresComponent } from './tabla-repartidores/tabla-repartidores.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    RepartidorAltaComponent,
    TablaPaisesComponent,
    RepartidorDetalleComponent,
    InfoPaisComponent,
    InfoRepartidorComponent,
    TablaRepartidoresComponent,
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class RepartidorModule { }
