import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
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
  options: FormlyFormOptions = {};

  constructor(
    private countryService: CountryService,
    private stateService: StateService
  ) {
    this.fields = [
      {
        key: 'country',
        type: 'autoComplete',
        defaultValue: {

        },
        props: {
          label: 'Pais',
          placeholder: 'Selecione um pais',
          keyField: 'id',
          labelField: 'name',
          service: this.countryService,
          required: true
        }
      },
      {
        key: 'state',
        type: 'autoComplete',
        props: {
          label: 'Estado',
          placeholder: 'Selecione um estado',
          keyField: 'id',
          labelField: 'name',
          service: this.stateService,
          required: true
        }
      },
      {
        key: 'price',
        type: 'inputNumber',
        props: {
          label: 'Valor',
          placeholder: '0,00',
          required: true
        }
      },
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Name (required)',
          required: true,
        },
      }
    ];
  }

}
