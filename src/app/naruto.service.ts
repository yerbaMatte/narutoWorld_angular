import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = '/api/character';
  constructor(private http: HttpClient) {}

  fetchPageData(page: number, limit: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
}
