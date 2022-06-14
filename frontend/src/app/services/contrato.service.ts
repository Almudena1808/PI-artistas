import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrato } from '../models/contrato';
import { Espectaculo } from '../models/espectaculo';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  contratoURL = environment.contratoURL;

  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Contrato[]> {
    return this.httpClient.get<Contrato[]>(`${this.contratoURL}`);
  }

  public detail(id: number): Observable<Contrato> {
    return this.httpClient.get<Contrato>(`${this.contratoURL}${id}`);
  }
  public busca(id:number): Observable<Contrato[]> {
    return this.httpClient.get<Contrato[]>(`${this.contratoURL}busca/${id}`);
  }
  public mirar(idcont: number): Observable<any> {
    return this.httpClient.get<any>(`${this.contratoURL}mirar/${idcont}`);
  }
  public save(contrato: Contrato): Observable<any> {
    return this.httpClient.post<any>(`${this.contratoURL}`, contrato);
  }

  public update(id: number, contrato: Contrato): Observable<any> {
    return this.httpClient.put<any>(`${this.contratoURL}${id}`, contrato);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.contratoURL}${id}`);
  }

}
