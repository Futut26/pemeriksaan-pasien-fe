import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      // Jika token ada, izinkan akses
      return true;
    } else {
      // Jika token tidak ada, alihkan ke halaman login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
