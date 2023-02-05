import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FiltrosOfertasLaborales } from '../models/filtros-ofertas-laborales.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasLaboralesService {

  constructor(private http: HttpClient) {}

  obtenerOfertas(data: any): Observable<any> {
    const body = JSON.parse(JSON.stringify(data));
    const params = new HttpParams({ fromObject: body });

    return this.http.get<any>(`${environment.apiUrl}oferta-laboral`, { params }).pipe(
      map(response => response)
    );
  }


  obtenerFiltros(): Observable<FiltrosOfertasLaborales> {
    return this.http.get<FiltrosOfertasLaborales>(`${environment.apiUrl}oferta-laboral/filtros`,).pipe(
      map(response => response)
    );
  }
}
