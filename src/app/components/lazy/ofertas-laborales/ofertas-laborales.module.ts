import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasLaboralesRoutingModule } from './ofertas-laborales-routing.module';
import { OfertasLaboralesComponent } from './ofertas-laborales.component';

// MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfertasLaboralesComponent
  ],
  imports: [
    CommonModule,
    OfertasLaboralesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatInputModule,
  ]
})
export class OfertasLaboralesModule { }
