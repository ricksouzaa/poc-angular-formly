import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AutoCompleteSearch } from './auto-complete-formly/auto-complete-search';

export interface State {
  id: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class StateService implements AutoCompleteSearch {

  public countries: State[] = [
    {id: 'MT', name: 'Mato Grosso'},
    {id: 'SP', name: 'São Paulo'}
  ];

  find(value: any): Observable<any[]> {
    return of(this.countries.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1));
  }
}
