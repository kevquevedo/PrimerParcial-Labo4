import { Component, Input, OnInit } from '@angular/core';
import { Pizzas } from 'src/app/models/pizzas/pizzas';
import { PizzaService } from 'src/app/services/pizzaService/pizza.service';

@Component({
  selector: 'app-borrar-pizza',
  templateUrl: './borrar-pizza.component.html',
  styleUrls: ['./borrar-pizza.component.css']
})
export class BorrarPizzaComponent implements OnInit {

  @Input() pizzaElegida : Pizzas | undefined;

  constructor(
    private pizzasServ : PizzaService
  ) { }

  ngOnInit(): void {
  }

  borrarPizza(){
    this.pizzasServ.eliminarPizza(this.pizzaElegida?.id!);
    this.pizzaElegida = undefined;
  }

}
