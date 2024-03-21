import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import HistorialClinico from '../core/interfaces/historialClinico.interface';
import { HistorialesClinicosService } from '../core/services/historiales-clinicos.service';

@Component({
  selector: 'app-agregar-historial-clinico',
  templateUrl: './agregar-historial-clinico.component.html',
  styleUrl: './agregar-historial-clinico.component.scss'
})

export class AgregarHistorialClinicoComponent implements OnInit {

	title : string = "";
	estados: string[] = [];
  	municipios: string[] = [];
	estadoSeleccionado: string = 'Aguascalientes';
	municipiosSeleccionados: string[] = [];

	hcNombres : string = '';
	hcApellidoPaterno : string = '';
	hcApellidoMaterno : string = '';
	hcSexo : string = 'Masculino';

	@ViewChild('selectEstado') selectEstadoRef !: ElementRef;
	@ViewChild('selectMunicipio') selectMunicipioRef !: ElementRef;

	constructor(
		private historialClinicoService : HistorialesClinicosService,
		private activatedRoute : ActivatedRoute,
		private http : HttpClient,
		private router : Router
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe((data: Data) => this.title = data['titulo']);
		this.cargarDatos();
	}

	async cargarDatos() {
		try {
			const response = await this.http.get('https://raw.githubusercontent.com/martinciscap/json-estados-municipios-mexico/master/estados-municipios.json').toPromise();
			const data = response as any;

			// Obtener estados
			this.estados = Object.keys(data);
			this.estados.forEach(estado => {
				const optionEstado = document.createElement('option');
				optionEstado.value = estado;
				optionEstado.textContent = estado;
				this.selectEstadoRef.nativeElement.appendChild(optionEstado);
			});

			// Mostrar municipios al seleccionar un estado
			this.selectEstadoRef.nativeElement.addEventListener('change', () => {
				const estadoSeleccionado = this.selectEstadoRef.nativeElement.value;
				const municipios = data[estadoSeleccionado];

				// Limpiar select de municipios
				this.selectMunicipioRef.nativeElement.innerHTML = '';

			  	// Llenar select de municipios
				municipios.forEach((municipio: string) => {
					const optionMunicipio = document.createElement('option');
					optionMunicipio.value = municipio;
					optionMunicipio.textContent = municipio;
					this.selectMunicipioRef.nativeElement.appendChild(optionMunicipio);
				});
			});

			// Seleccionar "Aguascalientes" por defecto
			const municipiosAguascalientes = data[this.estadoSeleccionado];
			municipiosAguascalientes.forEach((municipio: string) => {
				const optionMunicipio = document.createElement('option');
				optionMunicipio.value = municipio;
				optionMunicipio.textContent = municipio;
				this.selectMunicipioRef.nativeElement.appendChild(optionMunicipio);
			});

		} catch (error) {
		  	console.error('Error al cargar los datos:', error);
		}
	}

	async onSumbit() : Promise<void> {

		const historialClinico : HistorialClinico = {
			nombres : this.hcNombres,
			apellidoPaterno : this.hcApellidoPaterno,
			apellidoMaterno : this.hcApellidoMaterno,
			sexo : this.hcSexo
		}

		this.historialClinicoService.addHistorialClinico( historialClinico );
		this.router.navigateByUrl('/historialesClinicos');
	}

}