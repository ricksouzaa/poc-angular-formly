import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CountryService } from './country.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[];

  constructor(
    private countryService: CountryService,
    private stateService: StateService
  ) {
    this.fields = [
      {
        key: 'country',
        type: 'autoComplete',
        templateOptions: {
          label: 'Pais',
          placeholder: 'Selecione um pais',
          required: true,
          keyField: 'id',
          labelField: 'name',
          service: this.countryService
        }
      },
      {
        key: 'state',
        type: 'autoComplete',
        templateOptions: {
          label: 'Estado',
          placeholder: 'Selecione um estado',
          required: true,
          keyField: 'id',
          labelField: 'name',
          service: this.stateService
        }
      },
      {
        key: 'price',
        type: 'inputNumber',
        templateOptions: {
          label: 'Valor',
          placeholder: 'Informe um valor',
          required: true
        }
      }
    ];
  }

}
