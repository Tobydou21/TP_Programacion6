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

    constructor(
        private route: ActivatedRoute,
        private paisesService: PaisesService
    ) { }

    ngOnInit(): void {
        const codigo = this.route.snapshot.paramMap.get('codigo');

        if (codigo) {
            this.paisesService.obtenerPaisPorCodigo(codigo).subscribe({
                next: (encontrado) => {
                    this.pais = encontrado;
                    this.cargando = false;
                },
                error: (err) => {
                    console.error('Error al obtener el detalle del país:', err);
                    this.cargando = false;
                },
            });
        } else {
            this.cargando = false;
        }
    }
}