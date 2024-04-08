import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // ruta raiz implicita /
  { path: 'libros', component:LibrosComponent } ,   //ruta de /libros
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
