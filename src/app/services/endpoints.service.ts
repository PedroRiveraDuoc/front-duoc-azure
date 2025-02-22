import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  url: string = 'http://localhost:8084';
  tokens: string | null = localStorage.getItem('token');
  constructor(private http: HttpClient) {}

  
  mostrarPaciente() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokens}`,
    });
    const endpoint = `${this.url}/mostrarPaciente`;
    return this.http.get(endpoint, { headers });
  }
  eliminarPaciente(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokens}`,
    });
    const endpoint = `${this.url}/eliminarPaciente(${id})`;
    return this.http.delete(endpoint, { headers });
  }
  crearPaciente(paciente: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokens}`,
    });
    const endpoint = `${this.url}/crearPaciente`;
    return this.http.post(endpoint, paciente, { headers });
  }
  crearEstado(id: number,signo:any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokens}`,
    });
    const endpoint = `${this.url}/crear/${id}`;
    return this.http.post(endpoint, signo, { headers });
  }
}
