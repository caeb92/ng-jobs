import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtsRoutingModule } from './ats-routing.module';
import { AtsComponent } from './ats.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from 'src/app/modules/material.module';


@NgModule({
  declarations: [
    AtsComponent
  ],
  imports: [
    CommonModule,
    AtsRoutingModule,
    DragDropModule,
    MaterialModule
  ]
})
export class AtsModule { }
