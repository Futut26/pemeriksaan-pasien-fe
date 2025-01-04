import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PasienService {
  private apiUrl = 'http://localhost:3000/pasien';
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

  getAllPasien(): Observable<any> {
    return this.http.get(this.apiUrl, this.getHttpOptions());
  }

  getPasienById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  createPasien(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, this.getHttpOptions());
  }

  updatePasien(id: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}`, data, this.getHttpOptions());
  }

  deletePasien(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }
}
