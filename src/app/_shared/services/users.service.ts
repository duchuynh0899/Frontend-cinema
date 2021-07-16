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

  getAlluser() {
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  editUser(body: {
    name: string;
    phone: string;
    password: string;
    username: string;
    email: string;
    role: string;
    id: string
  }) {
    const data = {
      name: body.name,
      phone: body.phone,
      password: body.password,
      username: body.username,
      email: body.email,
      role: body.role
    }
    return this.httpClient.patch<any>(`${this.baseUrl}/${body.id}`, data);
  }

  deleteUser(id) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }

  sendMail(data) {
    return this.httpClient.post<any>(`${environment.apiURL}/invitations`, data);
  }
}
