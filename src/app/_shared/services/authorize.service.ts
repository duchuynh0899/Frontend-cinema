import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  baseUrl = `${environment.apiURL}/accounts`;
  constructor(private httpClient: HttpClient) {}

  login(body: { username: string; password: string }) {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, body);
  }

  logout() {
    return this.httpClient.post<any>(`${environment.apiURL}`, null);
  }

  getMe() {
    return this.httpClient.get<any>(`${environment.apiURL}/users/me`);
  }

  exportExcelsDevs(params: {}): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/excels/devs`, { params });
  }

  exportExcelsAdmin(params: {}): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/excels/admins`, {
      params,
    });
  }
}
