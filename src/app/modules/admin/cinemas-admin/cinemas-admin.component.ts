import { CinemasDialogComponent } from './cinemas-dialog/cinemas-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CinemasService } from '@shared/services/cinemas.service';

@Component({
  selector: 'app-cinemas-admin',
  templateUrl: './cinemas-admin.component.html',
  styleUrls: ['./cinemas-admin.component.scss'],
})
export class CinemasAdminComponent implements OnInit {
  cinemas: any[];

  constructor(
    private cinemasService: CinemasService,
    private dialog: MatDialog
  ) {
    this.getCinemas();
  }

  ngOnInit(): void {}

  getCinemas() {
    this.cinemasService
      .getAllCinemas()
      .subscribe((res) => (this.cinemas = res));
  }

  edit(data: any): void {
    const dialog = this.dialog.open(CinemasDialogComponent, {
      width: '800px',
      panelClass: 'custom-padding-dialog',
      data,
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.getCinemas();
      }
    });
  }

  addMovie() {
    const dialog = this.dialog.open(CinemasDialogComponent, {
      width: '800px',
      panelClass: 'custom-padding-dialog',
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.getCinemas();
      }
    });
  }
}
