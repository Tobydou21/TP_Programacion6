import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Pais } from '../models/pais.model';

@Injectable({
    providedIn: 'root',
})
export class PaisesService {
    constructor(private http: HttpClient) { }

    obtenerPaises(): Observable<Pais[]> {
        return this.http.get<Pais[]>(environment.paisesUrl);
    }

    obtenerPaisPorCodigo(codigo: string): Observable<Pais | undefined> {
        return this.obtenerPaises().pipe(
            map((paises) =>
                paises.find((p) => p.codigo.toLowerCase() === codigo.toLowerCase())
            )
        );
    }
}