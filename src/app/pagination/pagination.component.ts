import { Component } from '@angular/core';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  currentPage!: number;

  constructor(private paginationService: PaginationService) {
    this.currentPage = this.paginationService.getCurrentPage();
  }

  onPageClick(pageNumber: number): void {
    this.paginationService.setCurrentPage(pageNumber);
    this.currentPage = pageNumber;
    console.log(this.currentPage);
  }
}
