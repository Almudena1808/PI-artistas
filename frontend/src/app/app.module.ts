import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';

import { interceptorProvider } from './interceptors/espectaculo.interceptor';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'; 

import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ListaEspectaculoComponent } from './espectaculo/lista-espectaculo/lista-espectaculo.component';
import { NuevoEspectaculoComponent } from './espectaculo/nuevo-espectaculo/nuevo-espectaculo.component';
import { EditarEspectaculoComponent } from './espectaculo/editar-espectaculo/editar-espectaculo.component';
import { DetalleEspectaculoComponent } from './espectaculo/detalle-espectaculo/detalle-espectaculo.component';
import { LoginComponent } from './auth/login/login.component';

//external

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsuarioElegirResgistroComponent } from './usuario-elegir-resgistro/usuario-elegir-resgistro.component';
import { RegistroArtistaComponent } from './auth/registro-artista/registro-artista.component';
import { PieComponent } from './pie/pie.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { EditArtComponent } from './usuario/edit-art/edit-art.component';
import { ListaEspArtComponent } from './espectaculo/lista-esp-art/lista-esp-art.component';
import { MisEspectaculosComponent } from './espectaculo/mis-espectaculos/mis-espectaculos.component';
import { EmpMisContratosComponent } from './contrato/emp-mis-contratos/emp-mis-contratos.component';
import { NuevoContratosComponent } from './contrato/nuevo-contratos/nuevo-contratos.component';
import { EditarContratoComponent } from './contrato/editar-contrato/editar-contrato.component';
import { ResumenEspComponent } from './espectaculo/resumen-esp/resumen-esp.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    EditarUsuarioComponent, 
    DetalleUsuarioComponent, 
    HomeComponent, 
    MenuComponent, 
    LoginComponent,
    RegistroComponent, 
    ListaEspectaculoComponent, 
    NuevoEspectaculoComponent, 
    EditarEspectaculoComponent, 
    DetalleEspectaculoComponent, 
    UsuarioElegirResgistroComponent, 
    RegistroArtistaComponent, 
    PieComponent, 
    PerfilUsuarioComponent, 
    EditArtComponent, 
    ListaEspArtComponent, 
    MisEspectaculosComponent, 
    EmpMisContratosComponent, 
    NuevoContratosComponent, 
    EditarContratoComponent, ResumenEspComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
