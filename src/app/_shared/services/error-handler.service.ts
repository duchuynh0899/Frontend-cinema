import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private snackBar: MatSnackBar) { }

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.snackBar.open(error.message || 'Interal Server');
    } else {
      console.error(error);
    }
  }

}
