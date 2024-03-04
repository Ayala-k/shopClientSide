import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  addToCart(itemId: number) {
    const token = this.cookieService.get('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    // const body = { itemId }
    console.log(itemId, "in ser");

    //return this.http.get<IItem[]>('https://localhost:7073/api/Items', { headers });
    return this.http.post<any>('https://localhost:7073/api/Cart', itemId, { headers })
  }
}
