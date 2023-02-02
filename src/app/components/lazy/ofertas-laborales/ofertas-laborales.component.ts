import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfertaLaboral } from 'src/app/models/oferta-laboral.model';
import { OfertasLaboralesService } from 'src/app/services/ofertas-laborales.service';

@Component({
  selector: 'app-ofertas-laborales',
  templateUrl: './ofertas-laborales.component.html',
  styleUrls: ['./ofertas-laborales.component.scss']
})
export class OfertasLaboralesComponent implements OnInit, OnDestroy {
  subcriptions: Subscription[] = [];
  ofertasLaborales!: OfertaLaboral[];
  constructor(private ofertasLaboralesService: OfertasLaboralesService) {}
  
  ngOnDestroy(): void {
    this.subcriptions.forEach(s => {
      s.unsubscribe();
    });
  }
  
  obtenerOfertas(): void {
    const sub = this.ofertasLaboralesService.obtenerOfertas().subscribe(ol => {
      this.ofertasLaborales = ol;
    });

    this.subcriptions.push(sub);
  }


  ngOnInit(): void {
    this.obtenerOfertas();
  }
}
