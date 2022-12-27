import { Observable } from 'rxjs';

export interface AutoCompleteSearch {
  find(value: any): Observable<any[]>;
}
