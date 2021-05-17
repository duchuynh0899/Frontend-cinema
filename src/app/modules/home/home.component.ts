import { IMovies } from './../../data/models/movies.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '@shared/services/movies.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  listMenu = [
    { name: 'Home', url: 'home' },
    { name: 'Now Showing', url: 'show' },
    { name: 'Coming Soon', url: 'coming' },
    { name: 'Cinemas', url: 'cinemas' },
  ];
  cinemas: any[] = [];
  nowShowingMovies: any;
  cinema: any;
  nowDate: any;
  comingSoon: any[];
  constructor(private router: Router, private moviesService: MoviesService) {
    this.getAllMovies();
    this.getNowDate();
  }

  ngOnInit(): void {
    let ran = Math.round((Math.random() * 100) % 5);
    this.cinema = this.cinemas[ran];
  }

  getAllMovies() {
    this.moviesService.getAllMovies().subscribe((res) => {
      this.cinemas = res;
      this.nowShowingMovies = this.cinemas.filter((movie) => {
        return Date.parse(movie.releaseDate) <= Date.parse(this.nowDate);
      });
      console.log(this.nowShowingMovies);

      this.comingSoon = this.cinemas.filter((movie) => {
        return Date.parse(movie.releaseDate) >= Date.parse(this.nowDate);
      });
      console.log(this.comingSoon);

    });
  }

  getNowDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    this.nowDate = mm + '/' + dd + '/' + yyyy;
  }
}
