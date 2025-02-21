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

@Component({
  selector: 'app-senal-vital',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './senal-vital.component.html',
  styleUrl: './senal-vital.component.scss'
})
export class SenalVitalComponent {

    form = new FormGroup({
      temperatura: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      pulso: new FormControl('', [Validators.required, Validators.minLength(6)]),
      ritmoRespiratorio: new FormControl('', [Validators.required]),
      presionArterial: new FormControl('', [Validators.required]),
      comentario: new FormControl('', [Validators.required]),
      pacienteEstado: new FormControl('', [Validators.required]),
    });

    submit() {}
}
