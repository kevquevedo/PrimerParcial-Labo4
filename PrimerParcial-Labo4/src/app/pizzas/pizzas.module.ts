import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzaHomeComponent } from './pizza-home/pizza-home.component';
import { CrearPizzaComponent } from './crear-pizza/crear-pizza.component';
import { ModificarPizzaComponent } from './modificar-pizza/modificar-pizza.component';
import { BorrarPizzaComponent } from './borrar-pizza/borrar-pizza.component';
import { TablaPizzasComponent } from './tabla-pizzas/tabla-pizzas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PizzaHomeComponent,
    CrearPizzaComponent,
    ModificarPizzaComponent,
    BorrarPizzaComponent,
    TablaPizzasComponent
  ],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class PizzasModule { }
