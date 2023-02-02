import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasLaboralesComponent } from './ofertas-laborales.component';

const routes: Routes = [{ path: '', component: OfertasLaboralesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasLaboralesRoutingModule { }
