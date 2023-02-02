import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/stateless/navbar/navbar.component';
import { MaterialModule } from './material.module';

const components = [
  NavbarComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    components
  ]
})
export class StatelessComponentsModule { }
