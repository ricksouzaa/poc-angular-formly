import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { AutoCompleteSearch } from './auto-complete-search';

@Component({
  selector: 'app-auto-complete-formly',
  templateUrl: './auto-complete-formly.component.html',
  styleUrls: ['./auto-complete-formly.component.scss']
})
export class AutoCompleteFormlyComponent extends FieldType<FieldTypeConfig> {
  suggestions: any;

  completeMethod(event: any) {
    const service: AutoCompleteSearch = this.props.service as AutoCompleteSearch;
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
