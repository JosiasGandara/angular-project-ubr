import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RouterOutlet } from '@angular/router';
import { HistorialesClinicosComponent } from './historiales-clinicos/historiales-clinicos.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AngularToastifyModule } from 'angular-toastify';
import { NavbarComponent } from './navbar/navbar.component';
import { AgregarHistorialClinicoComponent } from './agregar-historial-clinico/agregar-historial-clinico.component';

@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		HistorialesClinicosComponent,
  		NavbarComponent,
    AgregarHistorialClinicoComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterOutlet,
		FormsModule,
		AngularToastifyModule,
		provideFirebaseApp(() => initializeApp({"projectId":"angular-project-ubr","appId":"1:669431098561:web:e636d1a228291bffeb3840","storageBucket":"angular-project-ubr.appspot.com","apiKey":"AIzaSyBk1Ca1wN6f4UpsvApN5ASCYmm2yeWrxXA","authDomain":"angular-project-ubr.firebaseapp.com","messagingSenderId":"669431098561","measurementId":"G-30DTNLY7E9"})),
		provideAuth(() => getAuth()),
		provideDatabase(() => getDatabase())
	],
	providers: [
		provideClientHydration(),
	],
  	bootstrap: [AppComponent]
})
export class AppModule { }
