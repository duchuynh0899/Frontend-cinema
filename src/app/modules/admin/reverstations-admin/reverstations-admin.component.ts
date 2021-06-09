import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationsService } from '@shared/services/reservations.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reverstations-admin',
  templateUrl: './reverstations-admin.component.html',
  styleUrls: ['./reverstations-admin.component.scss'],
})
export class ReverstationsAdminComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'Movie',
    'Cinema',
    'Date',
    'Start At',
    'Ticket Price',
    'Total',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  user: any;

  constructor(private reservationsService: ReservationsService, private spinner: NgxSpinnerService) {
    this.spinner.show();
    this.reservationsService.getReservations().subscribe((res: any[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {}

  ngOnInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
