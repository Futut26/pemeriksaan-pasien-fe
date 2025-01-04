import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PemeriksaanService {
  private apiUrl = 'http://localhost:3000/pemeriksaan';
  constructor(
    private http: HttpClient,
  ) { }

  private getHttpOptions(): { headers: HttpHeaders } {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  
    return { headers };
  }

  getAllPemeriksaan(): Observable<any> {
    return this.http.get(this.apiUrl, this.getHttpOptions());
  }

  getPemeriksaanById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  createPemeriksaan(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, this.getHttpOptions());
  }

  updatePemeriksaan(id: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}`, data, this.getHttpOptions());
  }

  deletePemeriksaan(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }
}
