import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Espectaculo } from '../models/espectaculo';

@Injectable({
  providedIn: 'root'
})
export class EspectaculoService {
  espectaculoURL = environment.espectaculoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Espectaculo[]> {
    return this.httpClient.get<Espectaculo[]>(`${this.espectaculoURL}`);
  }

  public detail(id: number): Observable<Espectaculo> {
    return this.httpClient.get<Espectaculo>(`${this.espectaculoURL}${id}`);
  }

  public save(espectaculo: Espectaculo): Observable<any> {
    return this.httpClient.post<any>(`${this.espectaculoURL}`, espectaculo);
  }

  public update(id: number, usuario: Espectaculo): Observable<any> {
    return this.httpClient.put<any>(`${this.espectaculoURL}${id}`, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.espectaculoURL}${id}`);
  }
}
