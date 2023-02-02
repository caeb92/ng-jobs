import { NgModule } from '@angular/core';
import { OfertasLaboralesService } from '../services/ofertas-laborales.service';

const services = [
  OfertasLaboralesService
];

@NgModule({
  providers: [
    services  
  ],
})
export class ServicesModule { }
