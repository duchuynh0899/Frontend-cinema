import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = `${environment.apiURL}`;

  constructor(private httpClient: HttpClient) {}

  getAllMovies() {
    return this.httpClient.get<any>(`${this.baseUrl}/movies`);
  }

  getCinemaById(id: string) {
    return this.httpClient.get<any>(`${this.baseUrl}/movies/${id}`);
  }

  getMovieSuggested(username: string) {
    return this.httpClient.get<any>(
      `${this.baseUrl}/movies/usermodeling/${username}`
    );
  }


}
