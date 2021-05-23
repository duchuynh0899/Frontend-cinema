import { CinemasService } from './../../_shared/services/cinemas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss'],
})
export class CinemasComponent implements OnInit {
  cinemas: any[];

  constructor(private cinemasService: CinemasService) {
    this.getCinemas();
  }

  ngOnInit(): void {}

  getCinemas() {
    this.cinemasService
      .getAllCinemas()
      .subscribe((res) => (this.cinemas = res));
  }
}
