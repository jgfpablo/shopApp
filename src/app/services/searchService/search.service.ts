import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new Subject();
  private cartSubjet = new Subject();

  setSearch(search: string) {
    this.searchSubject.next(search);
  }

  getSearch(): Observable<string> {
    return this.searchSubject.asObservable() as Observable<string>;
  }

  setCartCount(cartLength: number) {
    this.cartSubjet.next(cartLength);
  }

  getCartCount(): Observable<number> {
    return this.cartSubjet.asObservable() as Observable<number>;
  }
  constructor() {}
}
