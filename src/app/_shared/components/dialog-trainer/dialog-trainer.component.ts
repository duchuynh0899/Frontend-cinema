import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-trainer',
  templateUrl: './dialog-trainer.component.html',
  styleUrls: ['./dialog-trainer.component.scss'],
})
export class DialogTrainerComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogTrainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private hostElement: ElementRef
  ) {}

  ngOnInit(): void {
    const iframe = this.hostElement.nativeElement.querySelector('iframe');
    iframe.src = this.data.url;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
