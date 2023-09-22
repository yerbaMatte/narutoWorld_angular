import { Component, OnInit } from '@angular/core';
import { DataService } from '../naruto.service';
import { NarutoCharacter } from '../naruto';

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
    this.dataService.fetchData().subscribe((response: any) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
