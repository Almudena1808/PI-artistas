import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroArtistaComponent } from './auth/registro-artista/registro-artista.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { EditarContratoComponent } from './contrato/editar-contrato/editar-contrato.component';
import { EmpMisContratosComponent } from './contrato/emp-mis-contratos/emp-mis-contratos.component';
import { EspectaculoContratosComponent } from './contrato/espectaculo-contratos/espectaculo-contratos.component';
import { NuevoContratosComponent } from './contrato/nuevo-contratos/nuevo-contratos.component';
import { DetalleEspectaculoComponent } from './espectaculo/detalle-espectaculo/detalle-espectaculo.component';
import { EditarEspectaculoComponent } from './espectaculo/editar-espectaculo/editar-espectaculo.component';
import { ListaEspectaculoComponent } from './espectaculo/lista-espectaculo/lista-espectaculo.component';
import { MisEspectaculosComponent } from './espectaculo/mis-espectaculos/mis-espectaculos.component';
import { NuevoEspectaculoComponent } from './espectaculo/nuevo-espectaculo/nuevo-espectaculo.component';
import { ResumenEspComponent } from './espectaculo/resumen-esp/resumen-esp.component';
import { EspectaculoGuard } from './guards/espectaculo.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { UsuarioElegirResgistroComponent } from './usuario-elegir-resgistro/usuario-elegir-resgistro.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { EditArtComponent } from './usuario/edit-art/edit-art.component';
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
  {path: 'arteditar/:id', component: EditArtComponent},


  {path: 'perfil/:id', component:PerfilUsuarioComponent},
  {path: 'resumen/:idcont', component:ResumenEspComponent},


  {path: 'listaEsp', component: ListaEspectaculoComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista','empresario']}},
  {path: 'espdetalle/:id', component: DetalleEspectaculoComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista','empresario']}},
  {path: 'espnuevo', component: NuevoEspectaculoComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista']}},
  {path: 'espeditar/:id', component: EditarEspectaculoComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista']}},
  {path: 'misespectaculos/:id', component: MisEspectaculosComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista']}},

  {path: 'nuevocontrato/:id', component: NuevoContratosComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['empresario']}},
  {path: 'empmiscontratos/:id', component: EmpMisContratosComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['empresario']}},
  {path: 'editcontrato/:id', component: EditarContratoComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista','empresario']}},
  {path: 'espContrato/:id', component: EspectaculoContratosComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista']}},

  {path: 'error', component: NotFoundPageComponent, canActivate:[EspectaculoGuard], data: {expectedRol: ['artista']}},


  {path: '**', redirectTo: 'error', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
