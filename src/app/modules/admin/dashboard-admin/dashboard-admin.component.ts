import { ReservationsService } from '@shared/services/reservations.service';
import { CinemasService } from './../../../_shared/services/cinemas.service';
import { MoviesService } from '@shared/services/movies.service';
import { UsersService } from '@shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss'],
})
export class DashboardAdminComponent implements OnInit {
  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  users: any[];
  movies: any[];
  cinemas: any[];
  reservations: any[];
  total: any;
  bestMovies: any[];
  dataBestMovie: any;

  constructor(
    private usersService: UsersService,
    private moviesService: MoviesService,
    private cinemasService: CinemasService,
    private reservationsService: ReservationsService
  ) {
    Object.assign(this, this.single);
    this.getAllUser().subscribe();
    this.getAllMovies();
    this.getAllCinemas();
    this.getAllReservations();
  }
  ngOnInit(): void {}

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getAllUser() {
    return this.usersService.getAlluser().pipe(
      tap((res) => {
        this.users = res;
      })
    );
  }

  getAllMovies() {
    this.moviesService.getAllMovies().subscribe((res) => {
      this.movies = res;
    });
  }

  getAllCinemas() {
    this.cinemasService.getAllCinemas().subscribe((res) => {
      this.cinemas = res;
    });
  }

  getAllReservations() {
    this.reservationsService.getReservations().subscribe((res) => {
      this.reservations = res;
      console.log(
        this.reservations.reduce((a, b) => {
          return a + b.total;
        }, 0)
      );

      this.bestMovies = this.getBestMovies(this.reservations, this.movies);
      this.bestMovies.forEach((element) => {
        element.name = element.movie.title;
        return (element.value = element.count);
      });
    });
  }

  getBestMovies(reservations, movies, total = 5) {
    const reservationCounter = reservations.map((reservation) => ({
      movieId: reservation.movieId._id,
      count: reservations.filter(
        (r) => r.movieId._id === reservation.movieId._id
      ).length,
    }));

    const result = [];
    const map = new Map();
    for (const item of reservationCounter) {
      if (!map.has(item.movieId)) {
        map.set(item.movieId, true); // set any value to Map
        result.push({
          movieId: item.movieId,
          count: item.count,
        });
      }
    }
    return result
      .sort((a, b) => b.count - a.count)
      .slice(0, total)
      .map((res) => ({
        movie: movies.find((movie) => movie?._id === res.movieId),
        count: res.count,
      }));
  }
}
