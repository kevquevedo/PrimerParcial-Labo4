import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private emailLogueado: Subject<string>;
  public emailLogueado$: Observable<string>;
  public estado: boolean = false;
  public acceso: Subject<boolean>;

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {
    this.emailLogueado = new Subject();
    this.emailLogueado$ = this.emailLogueado.asObservable();
    this.acceso = new Subject();
  }

  loguearUsuario(email:string, rol:string){
    this.estado = true;
    this.emailLogueado.next(email)
  }

  logOut(){
    this.estado = false;
    this.emailLogueado.next('')
    this.auth.signOut();
  }

  estaRegistrado():boolean{
    if(this.estado){
      return true
    }else{
      return false
    }
  }

  activarMensaje(){
    this.acceso.next(false)
  }

  obtenerUsuarios(): Observable<[]>{
    const usuarios = collection(this.firestore, 'usuarios')
    return collectionData(usuarios) as Observable<[]>
  }
}
