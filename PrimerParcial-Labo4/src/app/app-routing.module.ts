import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LogueadoGuard } from './guards/logueadoGuard/logueado.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent,
  children:
  [
    {path: '', component: BienvenidaComponent},
    {path:'login', component: LoginComponent},
    {path:'repartidor', loadChildren: () => import('./repartidor/repartidor.module').then((m) => m.RepartidorModule),
      canActivate:[LogueadoGuard]
    },
  ]},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
