import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-historiales-clinicos',
  templateUrl: './historiales-clinicos.component.html',
  styleUrl: './historiales-clinicos.component.scss'
})
export class HistorialesClinicosComponent implements OnInit {

	title : string = "";

	constructor(
		private activatedRoute : ActivatedRoute
	) {}

	ngOnInit() {
		this.activatedRoute.data.subscribe((data: Data) => this.title = data['titulo']);
	}

}
