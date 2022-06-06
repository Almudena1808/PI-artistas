import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroArtistaComponent } from './auth/registro-artista/registro-artista.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { DetalleEspectaculoComponent } from './espectaculo/detalle-espectaculo/detalle-espectaculo.component';
import { EditarEspectaculoComponent } from './espectaculo/editar-espectaculo/editar-espectaculo.component';
import { ListaEspectaculoComponent } from './espectaculo/lista-espectaculo/lista-espectaculo.component';
import { NuevoEspectaculoComponent } from './espectaculo/nuevo-espectaculo/nuevo-espectaculo.component';
import { EspectaculoGuard } from './guards/espectaculo.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { UsuarioElegirResgistroComponent } from './usuario-elegir-resgistro/usuario-elegir-resgistro.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate:[LoginGuard]},// protejo la ruta para que una vex que estes logueado no puedas accesar otra vez
  {path: 'registro', component: RegistroComponent, canActivate:[LoginGuard]},// protejo la ruta para que una vex que estes logueado no puedas accesar otra vez
  {path: 'registroArtista', component: RegistroArtistaComponent, canActivate:[LoginGuard]},// protejo la ruta para que una vex que estes logueado no puedas accesar otra vez
  {path: 'eligeRol', component: UsuarioElegirResgistroComponent, canActivate:[LoginGuard]},// protejo la ruta para que una vex que estes logueado no puedas accesar otra vez

  {path: 'listaUsuario', component: ListaUsuarioComponent},
  {path: 'usuariodetalle/:id', component: DetalleUsuarioComponent},
  {path: 'usuarioeditar/:id', component: EditarUsuarioComponent},

  {path: 'listaEsp', component: ListaEspectaculoComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista','empresario']}},
  {path: 'espdetalle/:id', component: DetalleEspectaculoComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista','empresario']}},
  {path: 'espnuevo', component: NuevoEspectaculoComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista']}},
  {path: 'espeditar/:id', component: EditarEspectaculoComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista']}},

  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
