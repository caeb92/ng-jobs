import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostularOfertaComponent } from './postular-oferta.component';

const routes: Routes = [{ path: '', component: PostularOfertaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostularOfertaRoutingModule { }
