import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepartidorService } from 'src/app/services/repartidorService/repartidor.service';

@Component({
  selector: 'app-repartidor-alta',
  templateUrl: './repartidor-alta.component.html',
  styleUrls: ['./repartidor-alta.component.css']
})
export class RepartidorAltaComponent implements OnInit {

  formulario!: FormGroup;
  loading! : boolean;
  mensajeError: string | undefined;
  mensajeExito: string | undefined;

  unidadPropia : string | undefined;
  pais : string | undefined;

  constructor(
    private repartidores: RepartidorService
  ) {
    this.loading = true;
    this.unidadPropia = undefined;
    this.pais = undefined;
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
      dni: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required]),
      edad: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.min(18), Validators.max(99), Validators.required]),
      capTransporte: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required]),
    });

    setTimeout(() =>{ this.loading= false; }, 1000)
  }

  get nombre(){
    return this.formulario.get('nombre');
  }
  get dni(){
    return this.formulario.get('dni');
  }
  get edad(){
    return this.formulario.get('edad');
  }
  get capTransporte(){
    return this.formulario.get('capTransporte');
  }

  crearRepartidor(){
    if(this.evaluarErrorInputs()){
      this.repartidores.actualizarRepartidores(this.nombre?.value,this.dni?.value,this.edad?.value,this.capTransporte?.value,this.unidadPropia!, this.pais!);
      this.mostrarMensajeExito();
    };
  }

  verUnidad(evento: any){
    if(evento.srcElement.value != "invalido"){
      this.unidadPropia = evento.srcElement.value;
    }else{
      this.unidadPropia = undefined;
    }
  }

  recibirPaisSelect(nombrePais: string){
    this.pais = nombrePais;
  }

  evaluarErrorInputs() : boolean{

    if(!this.nombre?.valid){
      this.mensajeError = "El campo 'Nombre' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.dni?.valid){
      this.mensajeError = "El campo 'DNI' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.edad?.valid){
      this.mensajeError = "El campo 'Edad' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.capTransporte?.valid){
      this.mensajeError = "El campo 'Capacidad de Transporte' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(this.unidadPropia == undefined){
      this.mensajeError = "Debe seleccionar si posee unidad propia."
      this.mostrarMensajeError();
      return false;
    }
    else if(this.pais == undefined){
      this.mensajeError = "Debe seleccionar un pais."
      this.mostrarMensajeError();
      return false;
    }
    return true;
  }

  mostrarMensajeExito(){
    this.mensajeExito = "El repartidor se creó con éxito.";
    setTimeout(() =>{ this.mensajeExito = undefined }, 2500);
  }

  mostrarMensajeError(){
    setTimeout(() =>{ this.mensajeError = undefined }, 2500);
  }

}
