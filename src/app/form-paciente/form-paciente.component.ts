import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EndpointsService } from '../services/endpoints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-paciente',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  standalone: true,
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.scss',
})
export class FormPacienteComponent {
  form = new FormGroup({
    paciente_rut: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    sexo: new FormControl(''),
  });
  constructor(private service: EndpointsService,private router: Router) {}
  submit() {
    const fechaISO:any = this.form.value.fechaNacimiento; // Obtiene la fecha en formato yyyy-MM-dd
    let fechaBackend = new Date(fechaISO).toISOString();
    this.form.patchValue({ fechaNacimiento: fechaBackend });
    console.log(fechaBackend)
    console.log(this.form.value);
    this.service.crearPaciente(this.form.value).subscribe({
      next: (response) => {
        alert('Paciente creado');
        this.router.navigate(['/dashboard']);

        console.log('Paciente creado', response);
      },
    });
  }
  volver() {
    this.router.navigate(['/dashboard']);
  }
}
