import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface AlertaMedica {
  idAlerta?: number; // Opcional, ya que se genera en el backend
  nombrePaciente: string;
  tipoAlerta: string;
  nivelAlerta: string;
  fechaAlerta: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertaService {
  private apiUrl = 'http://localhost:8084/api/alertas';

  constructor(private http: HttpClient) { }
  // private getAuthHeaders(): HttpHeaders {
  //  // Asegúrate de que el token se guarda con la clave 'token'
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`,
  //   });
  //   return headers;
  // }
  // obtenerAlertas(): Observable<AlertaMedica[]> {
  //   return this.http.get<AlertaMedica[]>(this.apiUrl);
  // }

  // guardarAlerta(alerta: AlertaMedica): Observable<AlertaMedica> {
  //   return this.http.post<AlertaMedica>(this.apiUrl, alerta);
  // }

  // actualizarAlerta(id: number, alerta: AlertaMedica): Observable<AlertaMedica> {
  //   return this.http.put<AlertaMedica>(`${this.apiUrl}/${id}`, alerta);
  // }

  // eliminarAlerta(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }

  // mostrarPaciente(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/$`);
  // }

}
