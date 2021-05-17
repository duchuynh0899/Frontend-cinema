import { MoviesService } from './../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.scss'],
})
export class DetailMoviesComponent implements OnInit {
  id: any;
  cinema: any;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getCinema();
  }

  getCinema(): void {
    this.moviesService.getCinemaById(this.id).subscribe((res) => {
      console.log(res);
      this.cinema = res;
    });
  }
}
