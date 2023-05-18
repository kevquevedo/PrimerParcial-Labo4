import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LogueadoGuard implements CanActivate {

  constructor(
    private uServ : UsuarioService
  ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.uServ.estaRegistrado()){
      this.uServ.activarMensaje();
    }
    return this.uServ.estaRegistrado()
  }

}
