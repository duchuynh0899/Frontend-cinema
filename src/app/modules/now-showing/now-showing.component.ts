import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@shared/services/movies.service';

@Component({
  selector: 'app-now-showing',
  templateUrl: './now-showing.component.html',
  styleUrls: ['./now-showing.component.scss'],
})
export class NowShowingComponent implements OnInit {
  cinemas: any[] = [];
  nowShowingMovies: any[];
  nowDate: string;
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getNowDate();
    this.getAllMovies();
    console.log(this.nowShowingMovies);

  }

  getAllMovies(): void {
    this.moviesService.getAllMovies().subscribe((res) => {
      // this.cinemas = res;
     this.nowShowingMovies = res.filter((movie) => {
       return Date.parse(movie.releaseDate) <= Date.parse(this.nowDate);
     });
      console.log(this.nowShowingMovies);

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
