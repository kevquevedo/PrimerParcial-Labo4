import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(
    private firestore: Firestore
  ) { }

  obtenerPizzas(): Observable<[]>{
    const pizzas = collection(this.firestore, 'pizzas')
    return collectionData(pizzas , {idField:'id'}) as Observable<[]>
  }

  crearPizza(nombre:string, precio:string, peso:string, ingredientes:string){
    let pizzaNueva = {"nombre":nombre, "precio":precio, "peso":peso, "ingredientes":ingredientes}
    let pizzasRef = collection(this.firestore, 'pizzas');
    addDoc(pizzasRef, pizzaNueva);
  }

  modificarPizza(id:string, precio:string, peso:string, ingredientes:string){
    let pizzaRef = doc(this.firestore, 'pizzas', id);
    updateDoc(pizzaRef, {
      precio: precio,
      peso: peso,
      ingredientes: ingredientes
    })
  }

  eliminarPizza(id:string){
    let pizzaRef = doc(this.firestore, 'pizzas', id);
    deleteDoc(pizzaRef);
  }
}
