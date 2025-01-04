import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, RouterModule],
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService
      .register({ username: this.username, email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          alert('Registrasi berhasil! Silakan login.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error during registration:', err);
          alert('Registrasi gagal: ' + err.error.message);
        },
      });
  }
}
