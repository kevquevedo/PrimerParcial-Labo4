import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizzas } from 'src/app/models/pizzas/pizzas';
import { PizzaService } from 'src/app/services/pizzaService/pizza.service';

@Component({
  selector: 'app-tabla-pizzas',
  templateUrl: './tabla-pizzas.component.html',
  styleUrls: ['./tabla-pizzas.component.css']
})
export class TablaPizzasComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'precio', 'peso', 'ingredientes'];
  dataSource: any;
  pizzas!: Pizzas[];
  @Output() pizzaElegida = new EventEmitter<Pizzas>();

  constructor(
    private pizzasServ : PizzaService
  ) { }

  ngOnInit(): void {
    this.pizzasServ.obtenerPizzas().subscribe( respuesta => {
      this.pizzas = new Array<Pizzas>();
      respuesta.forEach((pizza: any)=> {
        let pizzaAux = new Pizzas(pizza.nombre, pizza.ingredientes, pizza.precio, pizza.peso, pizza.id)
        this.pizzas?.push(pizzaAux);
        this.dataSource = this.pizzas;
      })
    })
  }

  clickLinea(pizza: Pizzas){
    this.pizzaElegida.emit(pizza);
  }
}
