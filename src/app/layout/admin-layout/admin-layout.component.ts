import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  items = [
    {
      name: 'Dashboard',
      url: 'dashboard',
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
      url: 'show-time',
      icon: 'watch_later',
    },
    {
      name: 'Reverstaitons',
      url: 'revers',
      icon: 'book_online',
    },
    {
      name: 'Users',
      url: 'users',
      icon: 'person',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  snavToggle(): void {}
}
