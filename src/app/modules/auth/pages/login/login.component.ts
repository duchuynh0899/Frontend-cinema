import { AuthlayoutService } from './../../../../layout/auth-layout/authlayout.service';
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
import { CurrentUserService } from '@shared/services/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  checking = false;
  myForm: FormGroup;
  errorMsg: string;
  loading: boolean = true;
  hide = true;
  getErrorMessage(): void {}

  constructor(
    fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    public languageService: LanguageService,
    private authlayoutService: AuthlayoutService,
    private snack: MatSnackBar,
    private currentUserService: CurrentUserService
  ) {
    this.myForm = fb.group({
      username: ['', TValidators.required],
      password: ['', TValidators.required],
    });
  }

  submitForm(): void {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      return;
    }
    this.authlayoutService.changeLoading(true);

    this.authlayoutService
      .login(this.myForm.value)
      .pipe(finalize(() => this.authlayoutService.changeLoading(false)))
      .subscribe(
        (res) => {
          this.checking = true;
          this.currentUserService.setCurrentUser(res.user);
          LocalStorageExtention.setToken(res.token);
          this.snack.open('Successs', 'End now', {
            duration: 500,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
          this.router.navigate(['/']);
        },
        (err) => {
          this.snack.open(err.error.error.message);
        }
      );
  }

  // showPass() {
  //   this.hide = !this.hide;
  // }
}
