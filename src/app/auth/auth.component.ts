import { Component } from '@angular/core';
import { AuthService, Credential } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})

export class AuthComponent {

	isHidden : boolean = true;

	userEmail : string = '';
	userPassword : string = '';

	constructor(
		private _authService : AuthService,
		private _router : Router
	) { }

	async logIn() : Promise<void> {

		if( this.userEmail == '' || this.userPassword == '' ) return ;

		const credential : Credential = {
			email : this.userEmail,
			password : this.userPassword
		};

		try {
			await this._authService.logInWithEmailAndPassword( credential );
			this._router.navigateByUrl('/historialesClinicos');
		} catch (error) {
			console.error('Usuario o contraseña incorrectos', error);
		}

	}

	mostrarModal() {
		this.isHidden = !this.isHidden;
	}

}
