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

  myForm: FormGroup;
  errorMsg: string;
  loading: boolean = true;

  getErrorMessage(): void {}

  constructor(
    fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    public languageService: LanguageService,
    private authorizeService: AuthorizeService,
  ) {
    this.myForm = fb.group({
      language: [languageService.currentLang.value, [TValidators.required]],
      username: ['', [TValidators.required]],
      password: ['', [TValidators.required]],
    });
  }

  submitForm() {
    this.myForm.markAsDirty();
    this.errorMsg = "";
    this.loading = true;

    this.authorizeService.login(this.myForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        res => {
          LocalStorageExtention.setToken(res.data.token);
          this.router.navigate(['/']);
        },
        err => {
          if (err.error.status === 400) {
            this.errorMsg = 'Must not be blank';
            return;
          }
          this.errorMsg = err.error.error;
          throw err;
        });
  }

  openFeedBack() {
    this.dialog.open(FeedbackComponent, {
      width: '600px',
      panelClass: 'custom-padding-dialog'
    });
  }

}
