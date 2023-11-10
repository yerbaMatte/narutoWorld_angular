import { Component, OnInit } from '@angular/core';
import { DataService } from '../naruto.service';
import { NarutoCharacter } from '../naruto';
import { NarutoCharacterPage } from '../naruto';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent implements OnInit {
  allNarutoCharactersList: NarutoCharacter[] = [];
  currentCharactersList: NarutoCharacter[] = [];
  numberOfPages: number = 0;
  isLoading = false;
  currentPage = 0;

  constructor(
    private dataService: DataService,
    private paginationService: PaginationService
  ) {}

  ngOnInit() {
    this.fetchAllCharacters();
    this.dataService
      .getCurrentNarutoCharactersList()
      .subscribe((characters) => (this.currentCharactersList = characters));
    this.paginationService
      .getCurrentPageObservable()
      .subscribe((currentPage) => {
        this.currentPage = currentPage;
        this.updateCurrentCharactersList();
      });
  }

  fetchAllCharacters() {
    this.dataService
      .fetchData(1, 1430)
      .subscribe((response: NarutoCharacterPage) => {
        this.dataService.setAllCharacters(response.characters);
        this.allNarutoCharactersList = response.characters;
        console.log(this.allNarutoCharactersList);
        this.updateCurrentCharactersList();
        this.numberOfPages = Math.ceil(
          this.allNarutoCharactersList.length / 12
        );
        this.isLoading = true;
      });
  }

  updateCurrentCharactersList() {
    const charactersPerPage = 12;
    const startIndex = (this.currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    const list = this.allNarutoCharactersList.slice(startIndex, endIndex);
    this.dataService.setCurrentNarutoCharactersList(list);
  }
}
