import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertsAndSugestionsService {
  constructor() {}

  private suggestionSubject$ = new Subject();
  private cartSubject$ = new Subject();

  setSearch(search: string) {
    this.suggestionSubject$.next(search);
  }

  getSearch(): Observable<string> {
    return this.suggestionSubject$.asObservable() as Observable<string>;
  }

  setCartQuantity(cartLength: number) {
    this.cartSubject$.next(cartLength);
  }

  getCartQuantity(): Observable<number> {
    return this.cartSubject$.asObservable() as Observable<number>;
  }
}
