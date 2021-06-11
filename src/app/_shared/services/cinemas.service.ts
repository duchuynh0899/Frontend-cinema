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

  addCinema(body) {
    return this.httpClient.post<any>(`${this.baseUrl}`, body);
  }

  editCinema(body: any, id: number) {
    return this.httpClient.patch<any>(`${this.baseUrl}/${id}`, body);
  }

  deleteCinema(id) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }
}
