import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

	@Input() windowTitle : string = "";
	showLeftArrow = false;

	constructor(
		private router : Router
	) {}

	ngOnInit() {
		this.showLeftArrow = this.router.url !== '/historialesClinicos';
	}

}
