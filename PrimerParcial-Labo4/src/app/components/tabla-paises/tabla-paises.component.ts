import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Paises } from 'src/app/models/paises/paises';
import { PaisesService } from 'src/app/services/paisesService/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  public paises!: Paises[];
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(
    private listadoPaises: PaisesService
  ) { }

  ngOnInit(): void {
    this.listadoPaises.paises$.subscribe(
      respuesta => {
        this.paises = new Array<Paises>();
        (respuesta as any).forEach((pais: any) => {
          let paisAux = new Paises(pais.alpha3Code, pais.translations.es, pais.flag);
          this.paises?.push(paisAux)
        });
        this.paises = this.paises.sort(this.compare)
    });
  }

  compare(paisA: Paises, paisB: Paises) {
    if (paisA.nombre < paisB.nombre) {
      return -1;
    }
    if (paisA.nombre > paisB.nombre) {
      return 1;
    }
    return 0;
  }

  seleccionarPais(nombrePais: string){
    this.paisSeleccionado.emit(nombrePais);
  }

}
