import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioURL = environment.usuarioURL;


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.usuarioURL}`);
  }

  public detail(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.usuarioURL}${id}`);
  }

  public save(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(`${this.usuarioURL}`, usuario);
  }

  public update(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(`${this.usuarioURL}${id}`, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.usuarioURL}${id}`);
  }

}