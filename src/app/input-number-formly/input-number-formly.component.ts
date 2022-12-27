import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-input-number-formly',
  templateUrl: './input-number-formly.component.html',
  styleUrls: ['./input-number-formly.component.scss']
})
export class InputNumberFormlyComponent extends FieldType {
  get toFormControl(): FormControl {
    return this.formControl as FormControl;
  }
}
