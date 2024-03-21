import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HistorialesClinicosComponent } from './historiales-clinicos/historiales-clinicos.component';
import { AgregarHistorialClinicoComponent } from './agregar-historial-clinico/agregar-historial-clinico.component';

const routes: Routes = [
	{
		path : 'authentication',
		component : AuthComponent
	},
	{
		path : 'historialesClinicos',
		component : HistorialesClinicosComponent,
		data : { titulo : 'Historiales clínicos' }
	},
	{
		path : 'agregarHistorialClinico',
		component : AgregarHistorialClinicoComponent,
		data : { titulo : 'Agregar historial clínico' }
	},
	{
		path : '**',
		redirectTo : 'authentication'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
