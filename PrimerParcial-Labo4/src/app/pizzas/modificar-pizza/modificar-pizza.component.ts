import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizzas } from 'src/app/models/pizzas/pizzas';
import { PizzaService } from 'src/app/services/pizzaService/pizza.service';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css']
})
export class ModificarPizzaComponent implements OnInit {

  form!: FormGroup;
  @Input() pizzaElegida : Pizzas | undefined;

  mensajeError: string | undefined;
  mensajeExito: string | undefined;

  constructor(
    private pizzasServ : PizzaService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      ingredientes: new FormControl('', Validators.required),
    });
  }

  get nombre(){
    return this.form.get('nombre');
  }
  get precio(){
    return this.form.get('precio');
  }
  get peso(){
    return this.form.get('peso');
  }
  get ingredientes(){
    return this.form.get('ingredientes');
  }

  ngOnChanges(changes: SimpleChanges) {

    if(changes['pizzaElegida'].firstChange == false){
      this.form.controls['nombre'].disable();
      this.form.controls['nombre'].setValue(this.pizzaElegida!.nombre);
      this.form.controls['precio'].setValue(this.pizzaElegida!.precio);
      this.form.controls['peso'].setValue(this.pizzaElegida!.peso);
      this.form.controls['ingredientes'].setValue(this.pizzaElegida!.ingredientes);
    }
  }

  modificarPizza(){
    this.pizzasServ.modificarPizza(this.pizzaElegida?.id!, this.precio?.value, this.peso?.value, this.ingredientes?.value);
    this.nombre?.reset();
    this.precio?.reset();
    this.peso?.reset();
    this.ingredientes?.reset();
  }

}
