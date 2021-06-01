import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js';
import { environment } from '@env';
@Injectable({
  providedIn: 'root',
})
export class PusherService {
  pusher: any;
  channel: any;
  baseUrl: any;
  constructor(private http: HttpClient) {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
    });
    this.channel = this.pusher.subscribe('events-channel');
  }


  like(likes: string) {
    return this.http.post<any>(`${this.baseUrl}`, likes);
  }
}
