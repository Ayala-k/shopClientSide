import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient,private cookieService: CookieService) { }

  getItems(){
    const token = this.cookieService.get('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  
    return this.http.get<any>('https://localhost:7073/api/Items', { headers });
  }
}
