import { inject, Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';

export interface Credential {
	email : string;
	password : string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

	private auth : Auth = inject(Auth);

	readonly authState$ = authState(this.auth);

  	logInWithEmailAndPassword( credential : Credential ) : Promise<UserCredential> {
		return signInWithEmailAndPassword(
			this.auth, credential.email, credential.password
		);
	}
}
