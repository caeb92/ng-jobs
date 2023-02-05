import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from './modules/services.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlService } from './services/mat-paginator-intl.service';
import { FooterComponent } from './components/stateless/footer/footer.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ServicesModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlService
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
        color: 'accent',        
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
