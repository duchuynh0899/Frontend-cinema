import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@shared/services/movies.service';
import { ModalAddMovieComponent } from './modal-add-movie/modal-add-movie.component';

@Component({
  selector: 'app-movies-admin',
  templateUrl: './movies-admin.component.html',
  styleUrls: ['./movies-admin.component.scss'],
})
export class MoviesAdminComponent implements OnInit {
  comingSoon: any[];
  p = 1;

  constructor(
    private moviesService: MoviesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.moviesService.getAllMovies().subscribe((res) => {
      this.comingSoon = res;
    });
  }

  edit(data: any): void {
    const dialog = this.dialog.open(ModalAddMovieComponent, {
      width: '800px',
      panelClass: 'custom-padding-dialog',
      data,
    });
    dialog.afterClosed().subscribe((result) => {
      this.getAllMovies();
    });
  }

  addMovie() {
    const dialog = this.dialog.open(ModalAddMovieComponent, {
      width: '800px',
      panelClass: 'custom-padding-dialog',
    });
    dialog.afterClosed().subscribe((result) => {
      this.getAllMovies();
    });
  }
}
