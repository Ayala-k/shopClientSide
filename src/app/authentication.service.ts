// authentication.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('https://localhost:7073/api/Users/login', { name:username, password });
  }

  signup(username: string, password: string): Observable<any> {
    return this.http.post<any>('https://localhost:7073/api/Users/signup', { name: username, password });
  }

  setToken(token: string) {
    // Save token to browser cookies
    console.log(token);
    
    this.cookieService.set('token', token);
  }
}
