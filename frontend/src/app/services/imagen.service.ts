import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  imagenURL = environment.imagenURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Imagen[]> {
    return this.httpClient.get<Imagen[]>(`${this.imagenURL}`);
  }

  public detail(id: number): Observable<Imagen> {
    return this.httpClient.get<Imagen>(`${this.imagenURL}${id}`);
  }

  public save(imagen: Imagen): Observable<any> {
    return this.httpClient.post<any>(`${this.imagenURL}`, imagen);
  }

  public update(id: number, imagen: Imagen): Observable<any> {
    return this.httpClient.put<any>(`${this.imagenURL}${id}`, imagen);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.imagenURL}${id}`);
  }
}
