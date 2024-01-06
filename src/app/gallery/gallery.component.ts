import { Component, OnInit } from '@angular/core';
import { NarutoCharacter } from '../naruto';
import { CharactersService } from '../core/services/characters.service';
import { BehaviorSubject, Observable, finalize, map, tap } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent {
  readonly characters$: Observable<NarutoCharacter[]> = this.charactersService
    .getCharacters(1, 1431)
    .pipe(map((result) => result.characters));

  constructor(private charactersService: CharactersService) {}
}
