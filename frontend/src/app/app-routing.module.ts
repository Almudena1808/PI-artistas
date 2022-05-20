import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';

const routes: Routes = [
  {path: '', component: ListaUsuarioComponent},
  {path: 'detalle/:id', component: DetalleUsuarioComponent},
  {path: 'nuevo', component: NuevoUsuarioComponent},
  {path: 'editar/:id', component: EditarUsuarioComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
