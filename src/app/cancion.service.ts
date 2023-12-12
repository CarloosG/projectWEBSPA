import { CreateCancionComponent } from './create-cancion/create-cancion.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cancion } from './cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  private baseURL = "http://localhost:8080/api/v1/canciones/"
  constructor(private httpClient: HttpClient) { }
  getCancionesList(): Observable <Cancion[]>{
    return this.httpClient.get<Cancion[]>(`${this.baseURL}`);
  }
  createCancion(cancion: Cancion): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cancion);

  }
  getCancionById(id: number): Observable<Cancion>{
    return this.httpClient.get<Cancion>(`${this.baseURL}${id}`);
  }
  updateCancion(id: number, cancion: Cancion): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}${id}`,cancion);
  }
  deleteCancion(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }
  
}
