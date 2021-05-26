import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = `${environment.apiURL}/users`;

  constructor(private httpClient: HttpClient) {}

  login(body: { username: string; password: string }) {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, body);
  }

  signup(body: {
    name: string;
    password: string;
    username: string;
    email: string;
  }) {
    return this.httpClient.post<any>(`${this.baseUrl}`, body);
  }

  updateUser(body: {
    name: string;
    phone: string;
    password: string;
    username: string;
    email: string;
  }) {
    return this.httpClient.patch<any>(`${this.baseUrl}/me`, body);
  }
}
