import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private currentPageSubject = new BehaviorSubject<number>(1);

  getCurrentPage() {
    return this.currentPageSubject.value;
  }

  setCurrentPage(page: number) {
    this.currentPageSubject.next(page);
  }

  getCurrentPageObservable(): Observable<number> {
    return this.currentPageSubject.asObservable();
  }

  constructor() {}
}
