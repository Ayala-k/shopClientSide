import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private cartUpdatedSubject = new Subject<void>();

  cartUpdated$ = this.cartUpdatedSubject.asObservable();

  updateCart() {
    this.cartUpdatedSubject.next();
  }
}
