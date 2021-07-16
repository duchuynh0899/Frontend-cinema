import { MatSnackBar } from '@angular/material/snack-bar';
import { CinemasService } from '@shared/services/cinemas.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TValidators } from '@shared/extensions/validators';
import { FileServiceService } from '@shared/services/file-service.service';

@Component({
  selector: 'app-cinemas-dialog',
  templateUrl: './cinemas-dialog.component.html',
  styleUrls: ['./cinemas-dialog.component.scss'],
})
export class CinemasDialogComponent implements OnInit {
  myForm: FormGroup;
  listCategory = ['Hà Nội ', 'Thái Bình', 'Thành phố Hồ chí Minh'];
  selectedFile: File;
  url: string | ArrayBuffer;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private cinemasService: CinemasService,
    private snack: MatSnackBar,
    private fileService: FileServiceService,
    private dialogRef: MatDialogRef<CinemasDialogComponent>
  ) {
    this.myForm = fb.group({
      name: [null, TValidators.required],
      city: [null, TValidators.required],
      ticketPrice: [null, TValidators.required],
      seatsAvailable: [null, TValidators.required],
      seats: fb.array([this.fb.control('', [TValidators.required])]),
    });
  }

  get urlRedirectsArray() {
    return <FormArray>this.myForm.get('seats');
  }

  ngOnInit() {
    console.log(this.data);

    if (this.data) {
      this.myForm.patchValue({
        name: this.data.name,
        city: this.data.city,
        ticketPrice: this.data.ticketPrice,
        seatsAvailable: this.data.seatsAvailable,
      });
    }
  }

  addControl(): void {
    this.urlRedirectsArray.push(this.fb.control('', [TValidators.required]));
  }

  deleteControl(index: any): void {
    this.urlRedirectsArray.removeAt(index);
  }

  onSelectFile(value: any) {
    this.selectedFile = value.target.files[0] as File;
    const dots = this.selectedFile.name.split('.');
    const fileType = '.' + dots[dots.length - 1];
    const fileTypes = ['.gif', '.jpg', '.png', '.jpeg', '.bmp'];
    if (
      value.target.files &&
      value.target.files[0] &&
      fileTypes.join('.').indexOf(fileType) !== -1 &&
      this.selectedFile.size < 5000000
    ) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (e) => {
        this.url = e.target.result;
      };
    } else {
      this.snack.open('lỗi', ' x');
    }
  }

  addMovie() {
    const seats: any[] = this.myForm.get('seats').value;

    if (seats[0] === '5') {
      seats[0] = [0, 0, 0, 0, 0];
    }
    if (seats[0] === '6') {
      seats[0] = [0, 0, 0, 0, 0, 0];
    }
    if (seats[0] === '7') {
      seats[0] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[0] === '8') {
      seats[0] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[0] === '9') {
      seats[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[0] === '10') {
      seats[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '5') {
      seats[1] = [0, 0, 0, 0, 0];
    }
    if (seats[1] === '6') {
      seats[1] = [0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '7') {
      seats[1] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '8') {
      seats[1] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '9') {
      seats[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '10') {
      seats[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '5') {
      seats[2] = [0, 0, 0, 0, 0];
    }
    if (seats[2] === '6') {
      seats[2] = [0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '7') {
      seats[2] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '8') {
      seats[2] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '9') {
      seats[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '10') {
      seats[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '5') {
      seats[3] = [0, 0, 0, 0, 0];
    }
    if (seats[3] === '6') {
      seats[3] = [0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '7') {
      seats[3] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '8') {
      seats[3] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '9') {
      seats[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '10') {
      seats[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    const body = {
      ...this.myForm.value,
      seats,
    };
    this.cinemasService.addCinema(body).subscribe((res) => {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      const data = { file: formData, id: res._id };
      this.fileService.uploadAvatarCinema(data).subscribe(
        (res2) => {
          this.dialogRef.close();
          this.snack.open('success', 'x');
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  edit() {
    const seats: any[] = this.myForm.get('seats').value;

    if (seats[0] === '5') {
      seats[0] = [0, 0, 0, 0, 0];
    }
    if (seats[0] === '6') {
      seats[0] = [0, 0, 0, 0, 0, 0];
    }
    if (seats[0] === '7') {
      seats[0] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[0] === '8') {
      seats[0] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[0] === '9') {
      seats[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[0] === '10') {
      seats[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '5') {
      seats[1] = [0, 0, 0, 0, 0];
    }
    if (seats[1] === '6') {
      seats[1] = [0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '7') {
      seats[1] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '8') {
      seats[1] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '9') {
      seats[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[1] === '10') {
      seats[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '5') {
      seats[2] = [0, 0, 0, 0, 0];
    }
    if (seats[2] === '6') {
      seats[2] = [0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '7') {
      seats[2] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '8') {
      seats[2] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '9') {
      seats[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[2] === '10') {
      seats[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '5') {
      seats[3] = [0, 0, 0, 0, 0];
    }
    if (seats[3] === '6') {
      seats[3] = [0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '7') {
      seats[3] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '8') {
      seats[3] = [0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '9') {
      seats[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (seats[3] === '10') {
      seats[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    const body = {
      ...this.myForm.value,
      seats,
    };
    this.cinemasService.editCinema(body, this.data._id).subscribe((res) => {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      const data = { file: formData, id: res._id };
      this.fileService.uploadAvatarCinema(data).subscribe(
        (res2) => {
          this.dialogRef.close('oke');
          this.snack.open('success', 'x');
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  deleteCinema() {
    this.cinemasService.deleteCinema(this.data._id).subscribe(
      (res2) => {
        this.dialogRef.close('oke');
        this.snack.open('success', 'x');
      },
      (err) => {
        this.snack.open('error', 'x');
      }
    );
  }
}
