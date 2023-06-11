import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostularOfertaRoutingModule } from './postular-oferta-routing.module';
import { PostularOfertaComponent } from './postular-oferta.component';


@NgModule({
  declarations: [
    PostularOfertaComponent
  ],
  imports: [
    CommonModule,
    PostularOfertaRoutingModule
  ]
})
export class PostularOfertaModule { }
