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

  addMovie(body) {
    return this.httpClient.post<any>(`${this.baseUrl}/movies`, body);
  }

  editMovie(body: any, id: number) {
    return this.httpClient.put<any>(`${this.baseUrl}/movies/${id}`, body);
  }

  deleteMovie(id) {
    return this.httpClient.delete<any>(`${this.baseUrl}/movies/${id}`);
  }
}
