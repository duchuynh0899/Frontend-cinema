import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthlayoutService {
  private loadingSubject = new Subject<boolean>();
  loading = this.loadingSubject.asObservable();

  changeLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }
  baseUrl = `${environment.apiURL}/users`

  constructor(private httpClient: HttpClient) { }

  login(body: { username: string; password: string; }) {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, body);
  }

  signup(body: { name: string; password: string; username: string; email: string }) {
    return this.httpClient.post<any>(`${this.baseUrl}`, body);
  }
}
