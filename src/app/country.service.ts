import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AutoCompleteSearch } from './auto-complete-formly/auto-complete-search';

export interface Country {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService implements AutoCompleteSearch {

  public countries: Country[] = [
    {id: 1, name: 'Germany'},
    {id: 2, name: 'States'},
    {id: 3, name: 'Australia'},
    {id: 4, name: 'Qatar'},
    {id: 5, name: 'Brazil'},
  ];

  find(value: any): Observable<any[]> {
    return of(this.countries.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1));
  }

}
