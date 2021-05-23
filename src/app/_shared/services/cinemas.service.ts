import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class CinemasService {
  baseUrl = `${environment.apiURL}/cinemas`;

  constructor(private httpClient: HttpClient) {}

  getAllCinemas() {
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }
}
