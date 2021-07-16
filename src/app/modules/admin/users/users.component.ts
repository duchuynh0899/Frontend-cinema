import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from './../../../_shared/services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalUsersComponent } from './modal-users/modal-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'phone',
    'role',
    'updatedAt',
    'username',
    'email',
    'createdAt',
    'avatar',
    'edit',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  user: any;

  constructor(
    private usersService: UsersService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {
    this.spinner.show();
    this.usersService.getAlluser().subscribe((res: any[]) => {
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

  openEdit(user): void {
    const dialog = this.dialog.open(ModalUsersComponent, {
      width: '800px',
      panelClass: 'custom-padding-dialog',
      data: user
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.usersService.getAlluser().subscribe((res: any[]) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
    });
  }

  deleteUser(id) {
    this.usersService.deleteUser(id).subscribe(
      res => {
        this.snack.open('Success', 'x');
      }
    )
  }
}
