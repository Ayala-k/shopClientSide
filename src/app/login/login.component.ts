// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage!: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    console.log("log in");
    
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Save token to browser cookies
        const token = response.token;
        this.authService.setToken(token);

        // Redirect to dashboard or desired route on successful login
        this.router.navigateByUrl('/dashbord');
      },
      error => {
        // Handle login error and display error message
        console.log(error);
        
        this.errorMessage = error.error || 'An error occurred while logging in.';
      }
    );
  }
}
