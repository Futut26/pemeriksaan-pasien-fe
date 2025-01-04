import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      // Jika token ada, arahkan ke halaman dashboard atau pemeriksaan
      this.router.navigate(['/pemeriksaan']);
      return false;
    }
    // Jika token tidak ada, izinkan akses ke halaman login atau register
    return true;
  }
}
