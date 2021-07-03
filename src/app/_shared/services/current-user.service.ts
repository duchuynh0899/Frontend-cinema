import { Injectable } from '@angular/core';
import { LocalStorageExtention } from '@shared/extensions/local-storage';
import { NgxPermissionsService } from 'ngx-permissions';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private userSubject: BehaviorSubject<any>;
  user$: Observable<any>;

  constructor(private authorizeService: AuthorizeService, private permissionsService: NgxPermissionsService,) {
    this.userSubject = new BehaviorSubject<any>(
      LocalStorageExtention.get('user') || {}
    );
    this.user$ = this.userSubject.asObservable();
  }

  get user(): any {
    return (
      this.userSubject.getValue() || LocalStorageExtention.get('currentUser')
    );
  }

  setCurrentUser(user: any) {
    LocalStorageExtention.set('currentUser', user);
    this.userSubject.next(user);
  }

  getUserInfor(): Observable<any> {
    return this.authorizeService.getMe().pipe(
      map((x) => {
        this.setCurrentUser(x);
        const PERMS = [x?.role];
        this.permissionsService.loadPermissions(PERMS);
      })
    );
  }
}
