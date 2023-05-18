import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-pizza',
  templateUrl: './crear-pizza.component.html',
  styleUrls: ['./crear-pizza.component.css']
})
export class CrearPizzaComponent implements OnInit {

  form!: FormGroup;
  mensajeError: string | undefined;
  mensajeExito: string | undefined;
  @Output() pizzaCreada = new EventEmitter<any>();

  constructor() { }

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

  crearPizza(){
    if(this.evaluarErrorInputs()){
      this.pizzaCreada.emit({
        "nombre": this.nombre?.value,
        "precio": this.precio?.value,
        "peso": this.peso?.value,
        "ingredientes":this.ingredientes?.value
      })
      this.mostrarMensajeExito();
    };
  }

  evaluarErrorInputs() : boolean{

    if(!this.nombre?.valid){
      this.mensajeError = "El campo 'Nombre' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.precio?.valid){
      this.mensajeError = "El campo 'Precio' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.peso?.valid){
      this.mensajeError = "El campo 'Peso' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.ingredientes?.valid){
      this.mensajeError = "El campo 'Ingredientes' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    return true;
  }

  mostrarMensajeExito(){
    this.mensajeExito = "La pizza se creó con éxito.";
    setTimeout(() =>{ this.mensajeExito = undefined }, 2500);
  }

  mostrarMensajeError(){
    setTimeout(() =>{ this.mensajeError = undefined }, 2500);
  }
}
