import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasLaboralesRoutingModule } from './ofertas-laborales-routing.module';
import { OfertasLaboralesComponent } from './ofertas-laborales.component';


@NgModule({
  declarations: [
    OfertasLaboralesComponent
  ],
  imports: [
    CommonModule,
    OfertasLaboralesRoutingModule
  ]
})
export class OfertasLaboralesModule { }
