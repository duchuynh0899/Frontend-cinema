import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  logos: Array<{ provider: string; system: string; url: string }> = [];
  private baseURL = `${environment.apiURL}/logos`;

  constructor(private httpClient: HttpClient) {
    this.getLogos().subscribe(res => this.logos = res);
  }

  getLogos() {
    return this.httpClient.get<any[]>(this.baseURL);
  }

}
