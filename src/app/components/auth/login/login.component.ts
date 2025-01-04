  import { Component } from '@angular/core';
  import { Router, RouterModule } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import { AuthService } from '../../../services/auth.service';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [FormsModule, RouterModule],
  })
  export class LoginComponent {
    email = '';
    password = '';
    constructor(private authService: AuthService, private router: Router) {}
    login(): void {
      this.authService.login({ email: this.email, password: this.password }).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigate(['/pemeriksaan']); 
        },
        error: (err) => alert('Login failed: ' + err.error.message),
      });
    }
  }
