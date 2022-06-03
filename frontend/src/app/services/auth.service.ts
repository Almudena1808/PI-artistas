import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUsuarioDto } from '../models/login-usuario.dto';
import { NuevoUsuarioDto } from '../models/nuevo-usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = environment.authURL;

  constructor(private httpClient: HttpClient) { }

  login(dto: LoginUsuarioDto): Observable<any>{
    return this.httpClient.post<any>(this.authURL+ 'login',dto);
  }

  registro(dto: NuevoUsuarioDto): Observable<any>{
    return this.httpClient.post<any>(this.authURL+ 'nuevo',dto);
  }
}
