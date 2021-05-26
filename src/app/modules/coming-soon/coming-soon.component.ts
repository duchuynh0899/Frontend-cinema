import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent implements OnInit {
  cinemas: any[] = [];
  comingSoon: any[];
  nowDate: string;
  p = 1;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getNowDate();
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.moviesService.getAllMovies().subscribe((res) => {
      // this.cinemas = res;
      this.comingSoon = res.filter((movie) => {
        return movie.releaseDate >= this.nowDate;
      });
    });
  }

  getNowDate(): void {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    this.nowDate = mm + '/' + dd + '/' + yyyy;
  }
}
