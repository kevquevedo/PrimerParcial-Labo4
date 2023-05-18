import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Paises } from 'src/app/models/paises/paises';
import { PaisesService } from 'src/app/services/paisesService/paises.service';

@Component({
  selector: 'app-info-pais',
  templateUrl: './info-pais.component.html',
  styleUrls: ['./info-pais.component.css']
})
export class InfoPaisComponent implements OnInit, OnChanges, OnDestroy {

  subsPaises! : Subscription;
  @Input() paisDetalle : string | undefined;
  paises!: Paises[];
  paisElegido! : Paises;

  constructor(
    private listadoPaises: PaisesService
  ) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['paisDetalle'].firstChange == false){
      if(this.paises != undefined){
        this.paises.forEach( (pais)=>{
          if(pais.nombre == this.paisDetalle){
            this.paisElegido = pais;
          }
        })
      }
    }
  }

  ngOnDestroy(){
    this.subsPaises.unsubscribe();
  }

  cargarPaises(){
    this.subsPaises = this.listadoPaises.paises$.subscribe(
      respuesta => {
        this.paises = new Array<Paises>();
        (respuesta as any).forEach((pais: any) => {
          let paisAux = new Paises(pais.alpha3Code, pais.translations.es, pais.flag);
          this.paises?.push(paisAux)
        });
    });
  }



}
