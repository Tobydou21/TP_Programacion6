import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    paisesFiltrados: Pais[] = [];
    terminoBusqueda: string = '';

    constructor(
        private paisesService: PaisesService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.cargarPaises();
    }

    cargarPaises(): void {
        this.paisesService.obtenerPaises().subscribe({
            next: (datos: Pais[]) => {
                this.paises = datos.sort((a, b) =>
                    a.nombre.localeCompare(b.nombre, 'es')
                );
                this.paisesFiltrados = [...this.paises];
            },
            error: (err) => {
                console.error('Error al cargar los países:', err);
            },
        });
    }

    filtrarPaises(): void {
        const texto = this.terminoBusqueda.trim().toLowerCase();

        if (!texto) {
            this.paisesFiltrados = [...this.paises];
            return;
        }

        this.paisesFiltrados = this.paises.filter(
            (pais) =>
                pais.nombre.toLowerCase().includes(texto) ||
                pais.capital.toLowerCase().includes(texto)
        );
    }

    verDetalle(pais: Pais): void {
        this.router.navigate(['/detalle-pais', pais.codigo]);
    }
}