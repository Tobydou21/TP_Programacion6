import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Pais } from '../../models/pais.model';
import { PaisesService } from '../../services/paises.service';

@Component({
    selector: 'app-regiones',
    templateUrl: './regiones.page.html',
    styleUrls: ['./regiones.page.scss'],
    standalone: false,
})
export class RegionesPage implements OnInit {
    regiones = ['América', 'Europa', 'Asia', 'África', 'Oceanía'];
    regionSeleccionada = 'América';
    paises: Pais[] = [];
    paisesRegion: Pais[] = [];
    cargando = true;
    error = false;

    constructor(
        private paisesService: PaisesService,
        private ngZone: NgZone,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.cargarPaises();
    }

    cargarPaises(): void {
        this.cargando = true;
        this.error = false;
        this.paisesService.obtenerPaises().subscribe({
            next: (datos: Pais[]) => {
                this.ngZone.run(() => {
                    this.paises = datos.sort((a, b) =>
                        a.nombre.localeCompare(b.nombre, 'es')
                    );
                    this.filtrarPorRegion();
                    this.cargando = false;
                    this.cdr.detectChanges();
                });
            },
            error: () => {
                this.ngZone.run(() => {
                    this.error = true;
                    this.cargando = false;
                    this.cdr.detectChanges();
                });
            },
        });
    }

    cambiarRegion(event: Event): void {
        const customEvent = event as CustomEvent<{ value?: string }>;
        const nuevaRegion = customEvent.detail?.value;
        if (!nuevaRegion || nuevaRegion === this.regionSeleccionada) {
            return;
        }

        this.ngZone.run(() => {
            this.regionSeleccionada = nuevaRegion;
            this.filtrarPorRegion();
            this.cdr.markForCheck();
            this.cdr.detectChanges();
            // Forzar un segundo ciclo de detección para el encabezado
            setTimeout(() => {
                this.cdr.markForCheck();
                this.cdr.detectChanges();
            });
        });
    }

    filtrarPorRegion(): void {
        this.paisesRegion = this.paises.filter(
            (p) => p.region === this.regionSeleccionada
        );
    }
}