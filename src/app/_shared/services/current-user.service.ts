import { Injectable } from '@angular/core';
import { LocalStorageExtention } from '@shared/extensions/local-storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private userSubject: BehaviorSubject<any>;
  user$: Observable<any>;

  constructor(private authorizeService: AuthorizeService) {
    this.userSubject = new BehaviorSubject<any>(LocalStorageExtention.get('user') || {});
    this.user$ = this.userSubject.asObservable();
  }

  getMe() {
    this.authorizeService.getMe().subscribe(user => {
      LocalStorageExtention.set('user', user);
      this.userSubject.next(user);
    });
  }

}
