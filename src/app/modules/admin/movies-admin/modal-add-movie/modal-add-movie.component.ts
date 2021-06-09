import { FileServiceService } from './../../../../_shared/services/file-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { MoviesService } from '@shared/services/movies.service';
import { TValidators } from './../../../../_shared/extensions/validators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-movie',
  templateUrl: './modal-add-movie.component.html',
  styleUrls: ['./modal-add-movie.component.scss'],
})
export class ModalAddMovieComponent implements OnInit {
  myForm: FormGroup;
  listCategory = [
    'adventure',
    'action',
    'comedy',
    'drama',
    'fantasy',
    'historical',
    'horror',
    'mystery',
    'romance',
    'science fiction',
    'thriller',
    'political',
    'western',
  ];

  listLangugage = ['english', 'vietnamese'];
  selectedFile: File;
  url: string | ArrayBuffer;
  id: any;
  files: any;
  user: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private snack: MatSnackBar,
    private fileService: FileServiceService,
    private dialogRef: MatDialogRef<ModalAddMovieComponent>
  ) {
    this.myForm = fb.group({
      title: [null, TValidators.required],
      genre: [null, TValidators.required],
      description: [null, TValidators.required],
      language: [null, TValidators.required],
      duration: [null, TValidators.required],
      director: [null, TValidators.required],
      cast: [null, TValidators.required],
      releaseDate: [null, TValidators.required],
      endDate: [null, TValidators.required],
      trainer: [null, TValidators.required],
    });
  }

  ngOnInit() {
    if (this.data) {
      this.myForm.patchValue({
        title: this.data.title,
        genre: this.data.genre,
        description: this.data.description,
        language: this.data.language,
        duration: this.data.duration,
        director: this.data.director,
        cast: this.data.cast,
        releaseDate: this.data.releaseDate,
        endDate: this.data.endDate,
        trainer: this.data.trainer,
      });
    }
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
    // if (value.target.files && value.target.files[0]) {
    //   var reader = new FileReader();

    //   reader.readAsDataURL(value.target.files[0]); // read file as data url

    //   reader.onload = (event) => {
    //     // called once readAsDataURL is completed
    //     this.url = event.target.result;
    //   };
    // }
  }

  onUpload(): void {}

  submit() {
    this.moviesService.addMovie(this.myForm.value).subscribe((res) => {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      const data = { file: formData, id: res._id };
      this.fileService.uploadPostMovie(data).subscribe(
        (res) => {
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
    const body = {
      ...this.myForm.value,
    };
    this.moviesService.editMovie(body, this.data._id).subscribe((res) => {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      const data = { file: formData, id: res._id };
      this.fileService.uploadPostMovie(data).subscribe(
        (res) => {
          this.dialogRef.close();
          this.snack.open('success', 'x');
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  deleteMovie() {
    this.moviesService.deleteMovie(this.data._id).subscribe(
      (res) => {
        this.dialogRef.close();
        this.snack.open('success', 'x');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
