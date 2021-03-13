import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageExtention } from '@shared/extensions/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (LocalStorageExtention.getToken()) { return true; }
    this.router.navigate(['auth', 'login']);
    return false;
  }
}
