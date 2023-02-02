import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfertasLaboralesService {

  constructor(private http: HttpClient) {}

  obtenerOfertas(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}oferta-laboral`).pipe(
      map(response => response)
    );
  }
}
