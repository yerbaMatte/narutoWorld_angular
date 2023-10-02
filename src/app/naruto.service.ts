import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NarutoCharacter } from './naruto';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = '/api/character';
  private NarutoCharacters: NarutoCharacter[] = [];
  private currentNarutoCharactersList: NarutoCharacter[] = [];

  constructor(private http: HttpClient) {}

  setAllCharacters(characters: NarutoCharacter[]) {
    this.NarutoCharacters = characters;
  }

  getAllCharacters() {
    return this.NarutoCharacters;
  }

  setCurrentNarutoCharactersList(currentList: NarutoCharacter[]) {
    this.currentNarutoCharactersList = currentList;
  }

  getCurrentNarutoCharactersList() {
    return this.currentNarutoCharactersList;
  }

  searchCharacters(query: string): NarutoCharacter[] {
    query = query.toLowerCase();
    return this.NarutoCharacters.filter((character) =>
      character.name.toLowerCase().includes(query)
    );
  }

  fetchData(page: number, limit: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }
}
