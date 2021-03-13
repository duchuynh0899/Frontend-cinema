import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
                this.router.navigate(['/auth/login']);
            }
            return throwError(error);
        }));
    }

}
