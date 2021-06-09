import { MatSnackBar } from '@angular/material/snack-bar';
import { ShowtimesService } from './../../../_shared/services/showtimes.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddShowtimeComponent } from './add-showtime/add-showtime.component';
import { MoviesService } from '@shared/services/movies.service';


@Component({
  selector: 'app-showtimes-admin',
  templateUrl: './showtimes-admin.component.html',
  styleUrls: ['./showtimes-admin.component.scss'],
})
export class ShowtimesAdminComponent implements OnInit {
  movie: any;

  displayedColumns = ['ID', 'Movie', 'Cinema', 'Start Date', 'End Date', 'Time', 'action'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  showtime: any;

  constructor(
    private moviesService: MoviesService,
    private dialog: MatDialog,
    private showtimesService: ShowtimesService,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    this.getShowtime();
  }



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  addShowtime() {
   const dialog = this.dialog.open(AddShowtimeComponent, {
      width: '800px',
      panelClass: 'custom-padding-dialog',
   });

   dialog.afterClosed().subscribe(result => {
    this.getShowtime();
   });
  }

  getShowtime() {
    this.showtimesService.getShowTimes().subscribe(
      res => {
        this.dataSource = new MatTableDataSource<any>(res);
      }
    )
  }

  deleteShowtime(element) {
    this.showtimesService.deleteShowtime(element._id).subscribe(
      () => {
        this.snack.open('Success', 'x');
        this.getShowtime();
      },
      () => {
        this.snack.open('Error', 'x');
      }
    )
  }
}
