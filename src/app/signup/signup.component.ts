import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username!: string;
  password!: string;
  confirmPassword!: string;
  errorMessage!: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  signup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.authService.signup(this.username, this.password).subscribe(
      (response: any) => {
        const token = response.token;
        this.authService.setToken(token);
        this.router.navigateByUrl('/main');
      },
      error => {
        this.errorMessage = error.error || 'An error occurred while signing up.';
      }
    );
  }
}

