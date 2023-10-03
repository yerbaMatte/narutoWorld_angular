import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { NarutoCharacter } from './naruto';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: NarutoCharacter[] = [];
  private narutoCharacters: NarutoCharacter[] = [];
  private currentNarutoCharactersList$: BehaviorSubject<NarutoCharacter[]> =
    new BehaviorSubject<NarutoCharacter[]>(this.data);

  constructor(private http: HttpClient) {}

  setAllCharacters(characters: NarutoCharacter[]) {
    this.narutoCharacters = characters;
  }

  getAllCharacters() {
    return this.narutoCharacters;
  }

  setCurrentNarutoCharactersList(currentList: NarutoCharacter[]) {
    this.currentNarutoCharactersList$.next(currentList);
  }

  getCurrentNarutoCharactersList() {
    return this.currentNarutoCharactersList$.asObservable();
  }

  searchCharacters(query: string): NarutoCharacter[] {
    query = query.toLowerCase();
    return this.narutoCharacters.filter((character) =>
      character.name.toLowerCase().includes(query)
    );
  }

  fetchData(page: number, limit: number): Observable<any> {
    const url = `/api/character?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
}
