import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DokterService {
  private apiUrl = 'http://localhost:3000/dokter';
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

  getAllDokter(): Observable<any> {
    return this.http.get(this.apiUrl, this.getHttpOptions());
  }

  getDokterById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  createDokter(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, this.getHttpOptions());
  }

  updateDokter(id: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}`, data, this.getHttpOptions());
  }

  deleteDokter(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

}
