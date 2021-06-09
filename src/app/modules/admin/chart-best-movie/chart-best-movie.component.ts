import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-best-movie',
  templateUrl: './chart-best-movie.component.html',
  styleUrls: ['./chart-best-movie.component.scss'],
})
export class ChartBestMovieComponent implements OnInit {
  @Input() bestMovies: any;
  single = [];
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

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this, this.single);
  }

  ngOnInit() {
    this.single = this.bestMovies;
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
