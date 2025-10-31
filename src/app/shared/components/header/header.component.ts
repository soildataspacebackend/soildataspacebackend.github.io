import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: false
})
export class HeaderComponent {
	menuAbierto = false;

	toggleMenu() {
		this.menuAbierto = !this.menuAbierto;
	}

	cerrarMenu() {
		this.menuAbierto = false;
	}
}
