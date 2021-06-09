import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  baseUrl = `${environment.apiURL}/reservations`;

  constructor(private httpClient: HttpClient) {}

  buyReservations(body: {
    cinemaId: string;
    date: string;
    movieId: string;
    phone: string;
    seats: any[];
    startAt: string;
    ticketPrice: number;
    total: number;
    username: string;
  }) {
    return this.httpClient.post<any>(`${this.baseUrl}`, body);
  }

  getReservations() {
    return this.httpClient.get<any>(`${this.baseUrl}`, {
      params: new HttpParams().set('no-call', 'no-load'),
    });
  }

  getMyReservations(username: string) {
    return this.httpClient.get<any>(`${this.baseUrl}/${username}`);
  }
}
