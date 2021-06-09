import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class ShowtimesService {
  baseUrl = `${environment.apiURL}/showtimes`;

  constructor(private httpClient: HttpClient) {}

  getShowTimes() {
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  getShowtimeMovieById(id: string) {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }

  addShowtime(body) {
    return this.httpClient.post<any>(`${this.baseUrl}`, body);
  }

  deleteShowtime(id) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }
}
