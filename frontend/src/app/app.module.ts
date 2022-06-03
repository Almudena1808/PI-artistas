import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';


//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    NuevoUsuarioComponent,
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
