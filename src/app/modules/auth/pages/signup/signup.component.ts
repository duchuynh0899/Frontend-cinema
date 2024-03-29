import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LocalStorageExtention } from '@shared/extensions/local-storage';
import { TValidators } from '@shared/extensions/validators';
import { LanguageService } from '@shared/services/language.service';
import { UsersService } from '@shared/services/users.service';
import { finalize } from 'rxjs/operators';
import { AuthlayoutService } from 'src/app/layout/auth-layout/authlayout.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  checking = false;
  myForm: FormGroup;
  errorMsg: string;
  loading: boolean = true;
  hide = true;
  show = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  getErrorMessage(): void { }

  constructor(
    fb: FormBuilder,
    private router: Router,
    public languageService: LanguageService,
    private authlayoutService: AuthlayoutService,
    private snack: MatSnackBar
  ) {
    this.myForm = fb.group({
      fullname: ['', TValidators.required],
      username: ['', TValidators.required],
      email: ['', TValidators.required],
      phone: ['', TValidators.required],
      password: ['', TValidators.required],
      confirmPassword: ['', TValidators.required],
    });
    TValidators.setCompareValidator(
      this.myForm,
      'confirmPassword',
      'password',
      'Mật khẩu không trùng khớp',
      [TValidators.required]
    );
  }
  ngOnInit(): void {

  }

  submitForm(): void {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      return;
    }
    this.authlayoutService.changeLoading(true);
    this.authlayoutService.signup(this.myForm.value)
      .pipe(finalize(() => this.authlayoutService.changeLoading(false)))
      .subscribe(
        res => {
          this.router.navigate(['/auth/login']);
          this.snack.open('Success!!', 'X', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        },
        err => {
          if (err.error.keyValue.username) {
            this.myForm.get('username')?.setErrors({ error: 'Tài khoản này đã tồn tại' })
          }
          if (err.error.keyValue.email) {
            this.myForm.get('email')?.setErrors({ error: 'Email này đã tồn tại' })
          }
          if (err.error.keyValue.phone) {
            this.myForm.get('phone')?.setErrors({ error: 'Số điện thoại này đã tồn tại' })
          }

        });
  }



}
