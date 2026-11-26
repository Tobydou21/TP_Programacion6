import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais.model';
import { PaisesService } from '../../services/paises.service';

@Component({
    selector: 'app-paises',
    templateUrl: './paises.page.html',
    styleUrls: ['./paises.page.scss'],
    standalone: false,
})
export class PaisesPage implements OnInit {
    paises: Pais[] = [];

    constructor(private paisesService: PaisesService) { }

    ngOnInit(): void {
        this.cargarPaises();
    }

    cargarPaises(): void {
        this.paisesService.obtenerPaises().subscribe({
            next: (datos: Pais[]) => {
                this.paises = datos.sort((a, b) =>
                    a.nombre.localeCompare(b.nombre, 'es')
                );
            },
            error: (err) => {
                console.error('Error al cargar los países:', err);
            },
        });
    }
}