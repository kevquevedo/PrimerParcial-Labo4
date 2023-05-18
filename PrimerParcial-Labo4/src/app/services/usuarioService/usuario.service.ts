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
  public admin: boolean = false;
  public rol: Subject<boolean>;

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {
    this.emailLogueado = new Subject();
    this.emailLogueado$ = this.emailLogueado.asObservable();
    this.acceso = new Subject();
    this.rol = new Subject();
  }

  loguearUsuario(email:string, rol:string){
    console.log(rol)
    if(rol == "admin"){
      this.admin = true;
    }else{
      this.admin = false;
    }
    this.estado = true;
    this.emailLogueado.next(email)
  }

  logOut(){
    this.estado = false;
    this.admin = false;
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

  esAdmin():boolean{
    if(this.admin){
      return true
    }else{
      return false
    }
  }

  activarMensaje(){
    this.acceso.next(false)
  }

  activarMensajeAdmin(){
    this.rol.next(false)
  }

  obtenerUsuarios(): Observable<[]>{
    const usuarios = collection(this.firestore, 'usuarios')
    return collectionData(usuarios) as Observable<[]>
  }
}
