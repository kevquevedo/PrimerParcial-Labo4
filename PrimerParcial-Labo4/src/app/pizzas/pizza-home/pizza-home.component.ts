import { Component, OnInit } from '@angular/core';
import { Pizzas } from 'src/app/models/pizzas/pizzas';
import { PizzaService } from 'src/app/services/pizzaService/pizza.service';

@Component({
  selector: 'app-pizza-home',
  templateUrl: './pizza-home.component.html',
  styleUrls: ['./pizza-home.component.css']
})
export class PizzaHomeComponent implements OnInit {

  pizza!: Pizzas;

  constructor(
    private pizzas: PizzaService
  ) { }

  ngOnInit(): void {
  }

  pizzaSeleccionada(pizza:any){
    this.pizza = pizza;
  }

  crearPizza(pizzaACrear:any){
    this.pizzas.crearPizza(pizzaACrear.nombre,pizzaACrear.precio,pizzaACrear.peso,pizzaACrear.ingredientes)
  }

}
