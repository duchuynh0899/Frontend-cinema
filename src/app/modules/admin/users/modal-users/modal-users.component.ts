import { UsersService } from '@shared/services/users.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TValidators } from '@shared/extensions/validators';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss'],
})
export class ModalUsersComponent implements OnInit {
  myForm: FormGroup;
  selectedFile: File;
  url: string | ArrayBuffer;
  id: any;
  files: any;
  user: any;
  movie: any;
  cinemas: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private dialogRef: MatDialogRef<ModalUsersComponent>,
    private usersService: UsersService,
  ) {
    this.myForm = fb.group({
      name: [null, TValidators.required],
      phone: [null, TValidators.required],
      email: [null, TValidators.required],
      password: [null, TValidators.required],
      username: [null, TValidators.required],
      role: [null, TValidators.required],
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.myForm.patchValue({
        name: this.data.name,
        phone: this.data.phone,
        email: this.data.email,
        username: this.data.username,
        role: this.data.role,
      });
    }
  }

  submit(): void {
    const body = {
      ...this.myForm.value,
      id: this.data._id,
    };
    this.usersService.editUser(body).subscribe((res) => {
      this.dialogRef.close('oke');
      this.snack.open('success', 'x');
    });
  }
}
