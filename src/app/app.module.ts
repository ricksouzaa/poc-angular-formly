import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskConfig, NgxCurrencyModule } from 'ngx-currency';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { AutoCompleteFormlyComponent } from './auto-complete-formly/auto-complete-formly.component';
import { InputNumberFormlyComponent } from './input-number-formly/input-number-formly.component';
import { CurrencyFormatPipe } from './pipe/currency-format.pipe';
import { DecimalFormatPipe } from './pipe/decimal-format.pipe';

export const DefaultCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  nullable: false,
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.'
};


@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteFormlyComponent,
    InputNumberFormlyComponent,
    CurrencyFormatPipe,
    DecimalFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      types: [
        {name: 'autoComplete', component: AutoCompleteFormlyComponent},
        {name: 'inputNumber', component: InputNumberFormlyComponent},
      ],
      extras: {lazyRender: true}
    }),
    FormlyPrimeNGModule,
    NgxCurrencyModule.forRoot(DefaultCurrencyMaskConfig),
    AutoCompleteModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
