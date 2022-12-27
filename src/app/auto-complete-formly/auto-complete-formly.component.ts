import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { AutoCompleteSearch } from './auto-complete-search';

@Component({
  selector: 'app-auto-complete-formly',
  templateUrl: './auto-complete-formly.component.html',
  styleUrls: ['./auto-complete-formly.component.scss']
})
export class AutoCompleteFormlyComponent extends FieldType {
  suggestions: any;

  get toFormControl(): FormControl {
    return this.formControl as FormControl;
  }

  completeMethod(event: any) {
    const service: AutoCompleteSearch = this.to.service as AutoCompleteSearch;
    service.find(event.query)
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        take(1)
      )
      .subscribe(
        data => this.updateSuggestions(data),
        error => this.updateSuggestions()
      );
  }

  updateSuggestions(value?: any[]) {
    if (this.suggestions) {
      this.suggestions.length = 0;
    }
    this.suggestions = value || [];
  }

}
