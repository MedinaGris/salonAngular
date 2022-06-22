import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './vistas/login/login.component';
import {BienvenidoComponent} from './vistas/bienvenido/bienvenido.component';
import {NuevoComponent}from './vistas/nuevo/nuevo.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'bienvenido',component:BienvenidoComponent},
  {path:'registrar',component:NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,BienvenidoComponent,NuevoComponent]