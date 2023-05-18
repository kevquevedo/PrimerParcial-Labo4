import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../services/usuarioService/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  subUsuarios! : Subscription;

  loading! : boolean;
  spinner! : boolean;
  mensajeError: string | undefined;
  rol: string | undefined;

  constructor(
    private auth: Auth,
    private uServ: UsuarioService,
    private router: Router,
  ) {
    this.loading = true;
    this.spinner = false;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      mail: new FormControl('', Validators.email),
      clave: new FormControl('', Validators.minLength(6)),
    });

    setTimeout(() =>{ this.loading= false; }, 1000)
  }

  get mail(){
    return this.form.get('mail');
  }

  get clave(){
    return this.form.get('clave');
  }

  loguearUsuario(){
    this.spinner= true;
    signInWithEmailAndPassword(this.auth, this.mail?.value, this.clave?.value)
    .then(respuesta => {
      this.spinner= false;
      this.uServ.loguearUsuario(respuesta.user.email!, this.rol!);
      this.router.navigateByUrl('');
    })
    .catch(error => {
      this.evaluarErrorLogin(error.code);
    })
  }

  obtenerDatosUsuario(email: string){
    this.spinner= true;
    this.subUsuarios = this.uServ.obtenerUsuarios().subscribe((mensaje) =>{
      this.spinner= false;
      mensaje.forEach(usuario => {
        if((usuario as any).email == email){
          this.form.controls['mail'].setValue((usuario as any).email);
          this.form.controls['clave'].setValue((usuario as any).pass);
          this.rol = (usuario as any).rol;
        }
      })
    })
  }

  log(usuario: string){

    switch(usuario){
      case 'Kevin':
        this.obtenerDatosUsuario('quevedo.kevin1994@gmail.com')
        setTimeout(() =>{ this.loguearUsuario() }, 2000)
      break;

      case 'Augusto':
        this.obtenerDatosUsuario('afernandez@gmail.com')
        setTimeout(() =>{ this.loguearUsuario() }, 2000)
      break;

      default:
        this.mail?.reset();
        this.clave?.reset();
      break;
    }
  }

  evaluarErrorLogin(error : string){
    switch(error){

      case 'auth/invalid-email':
        this.mensajeError = "El email no se encuentra registrado."
        this.ocultarMensaje();
      break;

      case 'auth/wrong-password':
        this.mensajeError = "La contraseña es incorrecta."
        this.ocultarMensaje();
      break;

      case 'auth/missing-password':
        this.mensajeError = "Debe ingresar una contraseña."
        this.ocultarMensaje();
      break;

      default:
        this.mensajeError = "Ocurrió un error inesperado.";
        this.ocultarMensaje();
      break;
    }
  }

  ocultarMensaje(){
    setTimeout(() =>{ this.mensajeError = undefined },3000)
  }

}
