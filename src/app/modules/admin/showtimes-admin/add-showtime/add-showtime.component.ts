import { ShowtimesService } from './../../../../_shared/services/showtimes.service';
import { FileServiceService } from './../../../../_shared/services/file-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { MoviesService } from '@shared/services/movies.service';
import { TValidators } from './../../../../_shared/extensions/validators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CinemasService } from '@shared/services/cinemas.service';

@Component({
  selector: 'app-add-showtime',
  templateUrl: './add-showtime.component.html',
  styleUrls: ['./add-showtime.component.scss'],
})
export class AddShowtimeComponent implements OnInit {
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
  listTime = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00',
  ];

  listLangugage = ['english', 'vietnamese'];
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
    private moviesService: MoviesService,
    private snack: MatSnackBar,
    private fileService: FileServiceService,
    private cinemasService: CinemasService,
    private showtimesService: ShowtimesService,
    private dialogRef: MatDialogRef<AddShowtimeComponent>
  ) {
    this.myForm = fb.group({
      startAt: [null, TValidators.required],
      movieId: [null, TValidators.required],
      cinemaId: [null, TValidators.required],
      startDate: [null, TValidators.required],
      endDate: [null, TValidators.required],
    });
  }

  ngOnInit(): void {
    this.getAllMovies();
    this.getCinemas();
  }

  submit(): void {
    const data = {
      ...this.myForm.value,
      endDate: this.myForm.get('startDate').value
    }
    this.showtimesService.addShowtime(data).subscribe((res) => {
      this.dialogRef.close('oke');
      this.snack.open('success', 'x');
    });
  }

  getAllMovies(): void {
    this.moviesService.getAllMovies().subscribe((res) => {
      this.movie = res;
    });
  }

  getCinemas(): void {
    this.cinemasService
      .getAllCinemas()
      .subscribe((res) => (this.cinemas = res));
  }
}
