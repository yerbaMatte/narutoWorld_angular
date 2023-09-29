import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../naruto.service';
import { NarutoCharacter } from '../naruto';
import { NarutoCharacterPage } from '../naruto';
import { PaginationService } from '../pagination.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  narutoCharactersList: NarutoCharacter[] = [];
  data: NarutoCharacter[] = [];
  currentPageSubscription!: Subscription;
  isLoading = false;
  currentPage = 0;

  constructor(
    private dataService: DataService,
    private paginationService: PaginationService
  ) {}

  ngOnInit() {
    this.currentPageSubscription = this.paginationService
      .getCurrentPageObservable()
      .subscribe((currentPage) => {
        this.currentPage = currentPage;
        this.fetchPageData();
      });
  }

  fetchPageData() {
    this.dataService
      .fetchPageData(this.currentPage, 12)
      .subscribe((response: NarutoCharacterPage) => {
        this.narutoCharactersList = response.characters;
        this.isLoading = true;
      });
  }

  ngOnDestroy(): void {
    this.currentPageSubscription.unsubscribe();
  }
}
