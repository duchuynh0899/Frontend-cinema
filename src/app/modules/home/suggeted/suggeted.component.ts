import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTrainerComponent } from '@shared/components/dialog-trainer/dialog-trainer.component';

@Component({
  selector: 'app-suggeted',
  templateUrl: './suggeted.component.html',
  styleUrls: ['./suggeted.component.scss'],
})
export class SuggetedComponent implements OnInit {
  @Input() movieSuggested: any[];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(url): void {
    const dialogRef = this.dialog.open(DialogTrainerComponent, {
      width: '750px',
      data: { url: url },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
