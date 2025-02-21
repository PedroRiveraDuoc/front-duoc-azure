import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'paciente',
        loadComponent: () => import('./form-paciente/form-paciente.component').then(c => c.FormPacienteComponent),
    }

];
