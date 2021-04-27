import { CurrentUserService } from './../services/current-user.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LocalStorageExtention } from '@shared/extensions/local-storage';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
  constructor(
    private router: Router,
    private currentUserService: CurrentUserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.currentUserService.getUserInfor().pipe(
      map((e) => {
        return true;
      }),
      catchError((err) => {
        this.router.navigate(['/']);
        return of(false);
      })
    );
  }
}
