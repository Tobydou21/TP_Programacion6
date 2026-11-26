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
    cargando = true;
    error = false;

    constructor(
        private paisesService: PaisesService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.cargarPaises();
    }

    cargarPaises(): void {
        this.cargando = true;
        this.error = false;
        this.paisesService.obtenerPaises().subscribe({
            next: (datos: Pais[]) => {
                this.paises = datos.sort((a, b) =>
                    a.nombre.localeCompare(b.nombre, 'es')
                );
                this.filtrarPaises();
                this.cargando = false;
            },
            error: () => {
                this.error = true;
                this.cargando = false;
            },
        });
    }

    filtrarPaises(): void {
        const texto = this.normalizar(this.terminoBusqueda.trim());

        if (!texto) {
            this.paisesFiltrados = [...this.paises];
            return;
        }

        this.paisesFiltrados = this.paises.filter(
            (pais) =>
                this.normalizar(pais.nombre).includes(texto) ||
                this.normalizar(pais.capital).includes(texto)
        );
    }

    verDetalle(pais: Pais): void {
        this.router.navigate(['/detalle-pais', pais.codigo]);
    }

    private normalizar(texto: string): string {
        return texto
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
}