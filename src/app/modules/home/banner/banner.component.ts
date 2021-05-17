import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  listMenu = [
    { name: 'Home', url: 'home' },
    { name: 'Now Showing', url: 'show' },
    { name: 'Coming Soon', url: 'coming' },
    { name: 'Cinemas', url: 'cinemas' },
  ];
  @Input() cinemas: any[];
  cinema: any;

  constructor(private router: Router) {}
  ngOnInit(): void {
    let ran = Math.round((Math.random() * 100) % 5);
    setTimeout(() => {
      this.cinema = this.cinemas[ran];
    }, 1000);
  }
}
