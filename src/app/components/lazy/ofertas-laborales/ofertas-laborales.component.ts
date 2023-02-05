import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FiltrosOfertasLaborales } from 'src/app/models/filtros-ofertas-laborales.model';
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
  form!: FormGroup;
  filters!: FiltrosOfertasLaborales;

  constructor(private ofertasLaboralesService: OfertasLaboralesService) {}
  
  obtenerOfertas(): void {
    const sub = this.ofertasLaboralesService.obtenerOfertas({}).subscribe(ol => {
      this.ofertasLaborales = ol;
    });

    this.subcriptions.push(sub);
  }

  obtenerFiltros(): void {
    const sub = this.ofertasLaboralesService.obtenerFiltros().subscribe(filtros => {
      this.filters = filtros;
    })
  }

  filtrarOfertasLaborales():void {
    const fc = this.form.controls;
    const u = undefined;

    const filtersData = {
      categorias: fc['categorias'].value || u,
      comunas: fc['comunas'].value || u,
      empresas: fc['empresas'].value || u,
      regiones: fc['regiones'].value || u,
      tags: fc['tags'].value || u,
    };

    const sub = this.ofertasLaboralesService.obtenerOfertas(filtersData).subscribe(ofertasLaborales => {
      this.ofertasLaborales = ofertasLaborales;
    });

    this.subcriptions.push(sub);
  }

  initForm(): void {
    this.form = new FormGroup({
      categorias: new FormControl(),
      comunas: new FormControl(),
      empresas: new FormControl(),
      regiones: new FormControl(),
      tags: new FormControl(),
    });

    this.form.valueChanges.subscribe(() => {
      this.filtrarOfertasLaborales();
    });
  }

  resetForm():void {
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  ngOnInit(): void {
    this.obtenerFiltros();    
    this.initForm();
    this.obtenerOfertas();
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach(s => {
      s.unsubscribe();
    });
  }
}
