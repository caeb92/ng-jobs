import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FiltrosOfertasLaborales } from '../models/filtros-ofertas-laborales.model';
import { OfertaLaboral } from '../models/oferta-laboral.model';
import { RespuestaFiltroOfertasLaborales } from '../models/respuesta-filtro-ofertas-laborales.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasLaboralesService {

  constructor(private http: HttpClient) {}

  obtenerOfertas(data: any): Observable<RespuestaFiltroOfertasLaborales> {
    const body = JSON.parse(JSON.stringify(data));
    const params = new HttpParams({ fromObject: body });

    return this.http.get<RespuestaFiltroOfertasLaborales>(`${environment.apiUrl}oferta-laboral`, { params }).pipe(
      map(response => response)
    );
  }


  obtenerOferta(id: number): Observable<OfertaLaboral> {
    return this.http.get<OfertaLaboral>(`${environment.apiUrl}oferta-laboral/${id}`).pipe(
      map(response => response)
    );
  }


  obtenerFiltros(): Observable<FiltrosOfertasLaborales> {
    return this.http.get<FiltrosOfertasLaborales>(`${environment.apiUrl}oferta-laboral/filtros`,).pipe(
      map(response => response)
    );
  }
}
