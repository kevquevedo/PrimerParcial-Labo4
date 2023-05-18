import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidores } from 'src/app/models/repartidores/repartidores';
import { RepartidorService } from 'src/app/services/repartidorService/repartidor.service';

@Component({
  selector: 'app-tabla-repartidores',
  templateUrl: './tabla-repartidores.component.html',
  styleUrls: ['./tabla-repartidores.component.css']
})
export class TablaRepartidoresComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'dni'];
  dataSource: any;
  repartidores!: Repartidores[];
  @Output() repartidorElegido = new EventEmitter<Repartidores>();

  constructor(
    private repartidoresServ : RepartidorService
  ) { }

  ngOnInit(): void {
    this.repartidoresServ.obtenerRepartidores().subscribe( respuesta => {
      this.repartidores = new Array<Repartidores>();
      respuesta.forEach((actor: any)=> {
        let repartidorAux = new Repartidores(actor.nombre, actor.dni, actor.edad, actor.capTransporte, actor.unidadPropia, actor.pais)
        this.repartidores?.push(repartidorAux);
        this.dataSource = this.repartidores;
      })
    })
  }

  clickLinea(repartidor: Repartidores){
    this.repartidorElegido.emit(repartidor);
  }

}
