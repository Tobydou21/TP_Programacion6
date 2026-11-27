import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../models/pais.model';
import { PaisesService } from '../../services/paises.service';

@Component({
    selector: 'app-detalle-pais',
    templateUrl: './detalle-pais.page.html',
    styleUrls: ['./detalle-pais.page.scss'],
    standalone: false,
})
export class DetallePaisPage implements OnInit {
    pais?: Pais;
    cargando: boolean = true;
    error = false;

    constructor(
        private route: ActivatedRoute,
        private paisesService: PaisesService
    ) { }

    ngOnInit(): void {
        this.cargarPais();
    }

    cargarPais(): void {
        const codigo = this.route.snapshot.paramMap.get('codigo') ?? '';
        this.cargando = true;
        this.error = false;
        this.paisesService.obtenerPaisPorCodigo(codigo).subscribe({
            next: (encontrado) => {
                this.pais = encontrado;
                this.cargando = false;
            },
            error: () => {
                this.error = true;
                this.cargando = false;
            },
        });
    }
}