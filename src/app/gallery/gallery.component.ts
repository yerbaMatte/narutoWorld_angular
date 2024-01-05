import { Component, OnInit } from '@angular/core';
import { NarutoCharacter } from '../naruto';
import { CharactersService } from '../core/services/characters.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent implements OnInit {
  readonly characters$: Observable<NarutoCharacter[]> = this.charactersService
    .getCharacters(1, 1431)
    .pipe(map((result) => result.characters));

  isLoading = false;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.characters$.subscribe(console.log);
    this.isLoading = true;
  }
}
