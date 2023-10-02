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
      // Call the DataService to search for characters
      const filteredCharacters = this.dataService.searchCharacters(
        this.searchQuery
      );
      // Do something with the filtered characters (e.g., display in the UI)
      console.log('Filtered characters:', filteredCharacters);
      this.dataService.setCurrentNarutoCharactersList(filteredCharacters);
      console.log(this.dataService.getCurrentNarutoCharactersList());
    } else {
      // Handle an empty search query if needed
    }
  }
}
