import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaHomeComponent } from './pizza-home/pizza-home.component';
import { ErrorComponent } from '../components/error/error.component';

const routes: Routes = [
  {path:'', component: PizzaHomeComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
