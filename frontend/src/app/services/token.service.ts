import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isLogged(): boolean {
    if (this.getToken()) { return true; }
    return false;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): any { //deberia ser string
    return localStorage.getItem('token');
  }

  getNombreUser(): string {
    if (!this.isLogged) return "null";
    //el token está compuesto por 3 partes separadas por puntos: cabecera.contenido.final,
    //necesitamos la segunda parte que es donde se concentran los datos de nombre de usuario, email y contraseña
    //convertimos la cadena a un array y obtenemos [1]
    const token = this.getToken();
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const user = valuesJson.user;
    return user;
  }



  getIdUsuario(): number {
    if (!this.isLogged) return 0;
    //el token está compuesto por 3 partes separadas por puntos: cabecera.contenido.final,
    //necesitamos la segunda parte que es donde se concentran los datos de nombre de usuario, email y contraseña
    //convertimos la cadena a un array y obtenemos [1]
    const token = this.getToken();
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const user = valuesJson.id;
    return user;
  }

  isArtista(): boolean {
    if (!this.isLogged) console.log('isArtista es null');

    const token = this.getToken();
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const roles = valuesJson.roles;
    // console.log(roles);
    if (roles.indexOf('artista') < 0) return false;
    return true;

  }

  logOut(): void {
    localStorage.clear();
  }
}
