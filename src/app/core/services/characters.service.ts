import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NarutoCharacter } from '../../naruto';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getCharacters(page: number, limit: number): Observable<any> {
    const url = `/api/character?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
}
