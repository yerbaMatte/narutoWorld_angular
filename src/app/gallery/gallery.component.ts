import { Component, OnInit } from '@angular/core';
import { DataService } from '../naruto.service';
import { NarutoCharacter } from '../naruto';
import { NarutoCharacterPage } from '../naruto';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent implements OnInit {
  narutoCharactersList: NarutoCharacter[] = [];
  data: NarutoCharacter[] = [];
  isLoading = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (response: NarutoCharacterPage) => {
        this.narutoCharactersList = response.characters;
        console.log(this.narutoCharactersList);
        this.isLoading = true;
      },
      (error: any) => {
        console.log('Failed to fetch data', error);
      }
    );
  }
}
