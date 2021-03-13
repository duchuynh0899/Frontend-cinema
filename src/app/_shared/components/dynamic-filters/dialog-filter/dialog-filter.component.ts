import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-dialog-filter',
  templateUrl: './dialog-filter.component.html',
  styleUrls: ['./dialog-filter.component.scss']
})
export class DialogFilterComponent {

  dialogForm: FormGroup;
  title: string;
  selection: SelectionModel<any>;
  checked = false;
  dateForm: Date;
  dateTo: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialogRef: MatDialogRef<any>,
    private fb: FormBuilder
  ) {
    switch (this.data.filterOption.type) {
      case 'input':
        this.dialogForm = this.fb.group({
          [this.data.filterOption.name]: this.data.filters[this.data.filterOption.name] || ''
        });
        break;
      case 'checkbox':
        this.selection = new SelectionModel<any>(true, []);
        // tslint:disable-next-line: max-line-length
        if (this.data.filters[this.data.filterOption.name]) { this.data.filters[this.data.filterOption.name].forEach(x => this.selection.select(x)); }
        break;
      case 'date-range':
        if (this.data.filters.lastLogin) {
          this.dateForm = this.data.filters?.lastLogin[0] || '';
          this.dateTo = this.data.filters?.lastLogin[1] || '';
        }
        break;
      default: break;
    }
  }

  selectCheckBox(item: any): void {
    (!this.selection.selected.includes(item)) ? this.selection.select(item) : this.selection.deselect(item);
  }

  submit(): void {
    // tslint:disable-next-line: max-line-length
    let value: any;
    switch (this.data.filterOption.type) {
      case 'input':
        value = this.dialogForm.controls[this.data.filterOption.name].value;
        break;
      case 'checkbox':
        value = this.selection.selected;
        break;
      case 'date-range':
        value = [this.dateForm.toISOString(), this.dateTo.toISOString()];
        break;
      default: break;
    }
    this.dialogRef.close({ name: this.data.filterOption.name, value });
  }
}
