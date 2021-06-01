import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-detail-movie',
  templateUrl: './chart-detail-movie.component.html',
  styleUrls: ['./chart-detail-movie.component.scss']
})
export class ChartDetailMovieComponent implements OnInit {

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
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#A8385D', '#7AA3E5', '#A27EA8', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this, this.single );
  }
  ngOnInit(): void {

  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
