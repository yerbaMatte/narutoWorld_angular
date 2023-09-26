import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NarutoCharacterPage } from './naruto';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = '/api/character';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<NarutoCharacterPage> {
    return this.http.get<NarutoCharacterPage>(this.apiUrl);
    // .pipe(catchError(this.handleError<NarutoCharacterPage>));
  }
}

// fetchData(page: number, limit: number): Observable<any> {
//   const url = `${this.apiUrl}?page=${page}&limit=${limit}`;
//   return this.http.get(url);
// }
