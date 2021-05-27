import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items = [
    {
      name: 'Dashboard',
      url: '',
      icon: 'dashboard',
    },
    {
      name: 'Movies',
      url: 'movie',
      icon: 'movie',
    },
    {
      name: 'Cinemas',
      url: 'cinemas',
      icon: 'airplay',
    },
    {
      name: 'Showtimes',
      url: 'showtime',
      icon: 'watch_later',
    },
    {
      name: 'Reverstaitons',
      url: 'reverstaitons',
      icon: 'book_online',
    },
    {
      name: 'Account',
      url: 'account',
      icon: 'person',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
