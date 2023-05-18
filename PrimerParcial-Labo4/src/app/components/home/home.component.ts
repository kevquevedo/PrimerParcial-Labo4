import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';

declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toast :any;
  modal :any;

  constructor(
    private uServ : UsuarioService
  ) { }

  ngOnInit(): void {
    this.uServ.acceso.subscribe(resp => {
      this.mensaje()
    })
    this.uServ.rol.subscribe(resp => {
      this.mensajeModal()
    })
  }

  mensaje(){
    this.toast = document.getElementById('toast');
    const toastBootstrap = window.bootstrap.Toast.getOrCreateInstance(this.toast)
    toastBootstrap.show();
  }

  mensajeModal(){
    this.modal = document.getElementById('mensajeAdminModal');
    const modalBootstrap = window.bootstrap.Modal.getOrCreateInstance(this.modal)
    modalBootstrap.show();
    setTimeout(() =>{ modalBootstrap.hide(); },2000)
  }

}
