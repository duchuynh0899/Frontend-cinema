import { FormBuilder, FormGroup } from '@angular/forms';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-export-list',
  templateUrl: './download-table-dialog.component.html',
  styleUrls: ['./download-table-dialog.component.scss']
})

export class DownloadTableDialogComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<DownloadTableDialogComponent>,
    fb: FormBuilder,
  ) {
      this.myForm = fb.group({
        column: ['displayed'],
        format: ['xlsx']
      });
    }

  ngOnInit() { }

  close(): void {
    this.matDialogRef.close();
  }

  submit(): void {
    this.matDialogRef.close(
      this.myForm.getRawValue()
    );
  }
}
