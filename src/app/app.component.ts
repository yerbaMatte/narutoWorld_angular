import { Component } from '@angular/core';
import { NarutoCharacter } from './naruto';
import { DataService } from './naruto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  narutoCharactersList: NarutoCharacter[] = [];
  data = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData(1, 15).subscribe((response: any) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
