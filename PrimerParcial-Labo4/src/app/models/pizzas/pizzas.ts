export class Pizzas {
  nombre! : string;
  ingredientes! : string;
  precio! : string;
  peso! : string;
  id!:string

  constructor(nombre:string, ingredientes:string, precio: string, peso:string, id:string){
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.peso = peso;
    this.id = id;
  }
}
