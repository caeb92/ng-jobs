import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./components/lazy/home/home.module').then(m => m.HomeModule)
  },
  { path: 'ofertas-laborales', loadChildren: () => import('./components/lazy/ofertas-laborales/ofertas-laborales.module').then(m => m.OfertasLaboralesModule) },
  { path: 'ats', loadChildren: () => import('./components/lazy/ats/ats.module').then(m => m.AtsModule) },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
