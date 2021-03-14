import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from './../../../../_shared/services/users.service';
import { LocalStorageExtention } from './../../../../_shared/extensions/local-storage';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { TValidators } from '@shared/extensions/validators';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '@modules/auth/dialogs/feedback/feedback.component';
import { LanguageService } from '@shared/services/language.service';
import { AuthorizeService } from '@shared/services/authorize.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  checking = false;
  myForm: FormGroup;
  errorMsg: string;
  loading: boolean = true;
  hide = true;
  getErrorMessage(): void { }

  constructor(
    fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    public languageService: LanguageService,
    private usersService: UsersService,
    private snack: MatSnackBar
  ) {
    this.myForm = fb.group({
      username: ['', TValidators.required],
      password: ['', TValidators.required],
    });
  }

  submitForm() {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      return;
    }
    this.checking = true;
    this.usersService.login(this.myForm.value)
      .pipe(finalize(() => this.checking = false))
      .subscribe(
        res => {
          LocalStorageExtention.setToken(res.token);
          this.snack.open('Successs', 'End now', {
            duration: 500,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
          this.router.navigate(['/']);
        },
        err => {
          this.snack.open(err.error.message);
        });
  }

  openFeedBack() {
    this.dialog.open(FeedbackComponent, {
      width: '600px',
      panelClass: 'custom-padding-dialog'
    });
  }

  // showPass() {
  //   this.hide = !this.hide;
  // }

}
