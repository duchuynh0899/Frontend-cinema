import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnChanges {
  listMenu = [
    { name: 'Home', url: 'home' },
    { name: 'Now Showing', url: 'show' },
    { name: 'Coming Soon', url: 'coming' },
    { name: 'Cinemas', url: 'cinemas' },
  ];
  @Input() cinemas: any[];
  cinema: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    let ran = Math.round((Math.random() * 100) % 5);
    this.cinema = this.cinemas[ran];
  }
}
