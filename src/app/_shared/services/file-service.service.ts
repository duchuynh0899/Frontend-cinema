import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Utilities } from '@shared/extensions/ultilities';

@Injectable({
  providedIn: 'root',
})
export class FileServiceService {
  private baseURL = `${environment.apiURL}`;

  constructor(private httpClient: HttpClient) {}

  uploadAvatarUser(data: { file: any; id: string }) {
    return this.httpClient.post<any>(
      `${this.baseURL}/users/photo/${data.id}`,
      data.file
    );
  }

  uploadPostMovie(data: { file: any; id: string }) {
    return this.httpClient.post<any>(
      `${this.baseURL}/movies/photo/${data.id}`,
      data.file
    );
  }

  uploadAvatarCinema(data: { file: any; id: string }) {
    return this.httpClient.post<any>(
      `${this.baseURL}/cinemas/photo/${data.id}`,
      data.file
    );
  }
}
