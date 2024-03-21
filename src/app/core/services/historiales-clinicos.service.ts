import { inject, Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import HistorialClinico from '../interfaces/historialClinico.interface';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HistorialesClinicosService {

  	constructor(
		private firestore : Firestore
	) { }

	addHistorialClinico( historialClinico : HistorialClinico ) {
		const historialClinicoRef = collection(this.firestore, 'historialesClinicos');
		return addDoc(historialClinicoRef, historialClinico);
	}

}
