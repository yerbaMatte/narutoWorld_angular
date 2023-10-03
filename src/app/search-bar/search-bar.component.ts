import { Component } from '@angular/core';
import { DataService } from '../naruto.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchQuery: string = '';

  constructor(private dataService: DataService) {}

  search() {
    if (this.searchQuery.trim() !== '') {
      const filteredCharacters = this.dataService.searchCharacters(
        this.searchQuery
      );

      console.log('Filtered characters:', filteredCharacters);
      this.dataService.setCurrentNarutoCharactersList(filteredCharacters);
    } else {
    }
  }
}
