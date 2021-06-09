import { filter } from 'rxjs/operators';
import { ShowtimesService } from './../../services/showtimes.service';

import { MoviesService } from './../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.scss'],
})
export class DetailMoviesComponent implements OnInit {
  id: any;
  cinema: any;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [],
  };
  dataShowTime: any;
  show = false;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private showtimesService: ShowtimesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getCinema();
    this.getShowTime();
    console.log(this.dataShowTime, 123);
  }

  getCinema(): void {
    this.moviesService.getCinemaById(this.id).subscribe((res) => {
      this.cinema = res;
    });
  }

  handleDateClick(arg) {
    console.log(arg);
  }

  getShowTime() {
    this.showtimesService.getShowtimeMovieById(this.id).subscribe((res) => {
      this.dataShowTime = res;
      this.dataShowTime.forEach((element) => {
        element.date = element.startDate;
        return (element.title = element.cinemaId.name);
      });
    });
  }

  showtime() {
    this.show = !this.show;
    this.calendarOptions.events = this.dataShowTime;
  }
}
