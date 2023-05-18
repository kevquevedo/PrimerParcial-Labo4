import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OctavioService {

  public datos: Subject<any>;

  constructor(
    private http : HttpClient
  ) {
    this.datos = new Subject();
  }

  obtenerDatos(){
    this.http.get(`https://api.github.com/users/octaviovillegas`
    ).subscribe(respuesta => {
      this.datos.next(respuesta);
    });
  }
}
