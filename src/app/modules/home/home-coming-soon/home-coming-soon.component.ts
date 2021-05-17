import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTrainerComponent } from '@shared/components/dialog-trainer/dialog-trainer.component';

@Component({
  selector: 'app-home-coming-soon',
  templateUrl: './home-coming-soon.component.html',
  styleUrls: ['./home-coming-soon.component.scss'],
})
export class HomeComingSoonComponent implements OnInit {
  @Input() movies: any[];
  slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addSlide() {
    this.movies.push({ img: 'http://placehold.it/350x150/777777' });
  }

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
