import { Injectable } from '@angular/core';

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

  logOut():void{
    localStorage.clear();
  }
}
