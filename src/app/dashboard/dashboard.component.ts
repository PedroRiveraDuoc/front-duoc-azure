import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { AlertaService, AlertaMedica } from '../services/alerta.service';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { SenalVitalComponent } from '../senal-vital/senal-vital.component';
import { EndpointsService } from '../services/endpoints.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  // Variables de control
  escaneando: boolean = false;
  intervaloID: any;
  readonly dialog = inject(MatDialog);
  paciente: any;
  alerta:any

  constructor(
    private msalService: MsalService,
    private router: Router,
    private alertaService: AlertaService,
    private httpClient: HttpClient,
    private service: EndpointsService
  ) {}

  ngOnInit(): void {
    this.mostrarPaciente();
  }

  // Iniciar generación de alertas
  iniciarEscaner(): void {
    this.router.navigate(['/paciente']);
  }

  mostrarPaciente(): void {
    this.service.mostrarPaciente().subscribe({
      next: (response) => {
        this.paciente = response;
        console.log(response);
      },
    });
  }

  // Editar una alerta (puedes abrir un formulario modal)
  editarAlerta(): void {
    console.log('first');
    const dialogRef = this.dialog.open(SenalVitalComponent, {
      width: '50%', // Establece el ancho del modal
      height: '100%',
    });
  }
  eliminarAlerta(index: number): void {
    this.service.eliminarPaciente(index).subscribe({
      next: (response) => {
        console.log(response);
      },
      complete: () => {
        window.location.reload();
      }
    });
  }
  mostrarAlerta: boolean = false;
  logout(): void {
    this.msalService.logoutPopup().subscribe({
      next: () => {
        console.log('Logout successful');
        this.router.navigate(['/login']); // Redirige al login
      },
      error: (error) => console.error('Logout error:', error),
    });
  }
  consultarEstado(): void {
    const signo = {
      id_servicio: 70,
      temperatura: 39.5,
      pulso: 140,
      ritmoRespiratorio: 13,
      presionArterial: '120/80',
      comentario: 'Sin complicacioness',
      pacienteEstado: 'Crítico',
    };
    this.service.crearEstado(1, signo).subscribe({
      next: (response) => {
        this.alerta = response;
        console.log(response);
        this.mostrarAlerta = true;
        console.log(response);
      },
    });
  }
}
