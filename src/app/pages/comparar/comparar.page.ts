import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais.model';
import { PaisesService } from '../../services/paises.service';

@Component({
    selector: 'app-comparar',
    templateUrl: './comparar.page.html',
    styleUrls: ['./comparar.page.scss'],
    standalone: false,
})
export class CompararPage implements OnInit {
    paises: Pais[] = [];
    codigoPais1: string = 'PRY';
    codigoPais2: string = 'ARG';
    pais1?: Pais;
    pais2?: Pais;
    cargando = true;
    error = false;

    constructor(private paisesService: PaisesService) { }

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
                this.actualizarComparacion();
                this.cargando = false;
            },
            error: () => {
                this.error = true;
                this.cargando = false;
            },
        });
    }

    actualizarComparacion(): void {
        this.pais1 = this.paises.find((p) => p.codigo === this.codigoPais1);
        this.pais2 = this.paises.find((p) => p.codigo === this.codigoPais2);
    }

    intercambiar(): void {
        const temp = this.codigoPais1;
        this.codigoPais1 = this.codigoPais2;
        this.codigoPais2 = temp;
        this.actualizarComparacion();
    }

    obtenerDiferenciaArea(): number {
        if (!this.pais1 || !this.pais2) {
            return 0;
        }
        return Math.abs(this.pais1.area - this.pais2.area);
    }
}