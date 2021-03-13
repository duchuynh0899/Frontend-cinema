import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-columns',
  templateUrl: './dynamic-columns.component.html',
  styleUrls: ['./dynamic-columns.component.scss']
})
export class DynamicColumnsComponent {

  selection: SelectionModel<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialogRef: MatDialogRef<any>,
  ) {
    this.selection = new SelectionModel<any>(true, []);
    this.data.data.forEach(e => {
      if (e.checked) { this.selection.select(e.name); }
    });
  }

  selectCheckBox(checked: boolean, item: any): void {
    (checked) ? this.selection.select(item.name) : this.selection.deselect(item.name);
  }

  submit(): void {
    this.dialogRef.close({ submit: true, data: this.selection.selected });
  }

  close(): void {
    this.dialogRef.close();
  }
}
