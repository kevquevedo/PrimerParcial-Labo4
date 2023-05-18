import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Paises } from 'src/app/models/paises/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public paises$!: Observable<Paises[]>;
  public paises!: Subject<Paises[]>;

  constructor(
    private httpClient: HttpClient
  ) {
    this.paises = new Subject();
    this.paises$ = this.paises.asObservable();

    this.httpClient.get(`https://restcountries.com/v2/all`
    ).subscribe(respuesta =>{
      this.paises.next(respuesta as any);
    });
  }
}
