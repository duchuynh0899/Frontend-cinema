import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})

export class EndUserService {

  baseUrl = `${environment.apiURL}/users`;

  constructor(private httpClient: HttpClient) { }

  toExcels(params: {}): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/excels`, { params });
  }

  listUser(params: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/filters`, { params });
  }
}
