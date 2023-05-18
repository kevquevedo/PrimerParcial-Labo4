import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepartidorAltaComponent } from './repartidor-alta/repartidor-alta.component';
import { ErrorComponent } from '../components/error/error.component';
import { RepartidorDetalleComponent } from './repartidor-detalle/repartidor-detalle.component';

const routes: Routes = [
  {path:'alta', component: RepartidorAltaComponent},
  {path:'detalle', component: RepartidorDetalleComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
