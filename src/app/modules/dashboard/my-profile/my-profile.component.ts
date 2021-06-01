import { TValidators } from '@shared/extensions/validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '@shared/services/users.service';
import { CurrentUserService } from '@shared/services/current-user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  myForm: FormGroup;
  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private currentUserService: CurrentUserService,
    private user: UsersService,
    private snack: MatSnackBar
  ) {
    this.myForm = fb.group({
      name: [null, TValidators.required],
      phone: [null, TValidators.required],
      email: [null, TValidators.required],
      password: [null, TValidators.required],
    });
  }

  ngOnInit() {
    this.currentUserService.user$.subscribe((user) => {
      this.currentUser = user;
    });
    if (this.currentUser) {
      this.myForm.patchValue({
        name: this.currentUser.name,
        phone: this.currentUser.phone,
        email: this.currentUser.email,
      });
    }
  }

  submit(): void {
    const data = {
      ...this.myForm.value,
      username: this.currentUser.username,
    };
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) {
      return;
    }
    this.user.updateUser(data).subscribe((res) => {
      this.snack.open('success', 'x');
    });
  }
}
