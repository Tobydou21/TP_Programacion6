import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}