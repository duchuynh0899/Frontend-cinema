import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicColumnsComponent } from './dynamic-columns/dynamic-columns.component';
import { DynamicFiltersComponent } from './dynamic-filters/dynamic-filters.component';
import { DownloadTableDialogComponent } from './download-table-dialog/download-table-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogFilterComponent } from './dynamic-filters/dialog-filter/dialog-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '@shared/pipes/pipes.module';
import { NoDataTableComponent } from './no-data-table/no-data-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FontAwesomeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRippleModule,
    PipesModule,
  ],
  declarations: [
    DynamicColumnsComponent,
    DynamicFiltersComponent,
    DownloadTableDialogComponent,
    ConfirmDialogComponent,
    DialogFilterComponent,
    PaginatorComponent,
    NoDataTableComponent
  ],
  exports: [
    DynamicColumnsComponent,
    DynamicFiltersComponent,
    DownloadTableDialogComponent,
    ConfirmDialogComponent,
    PaginatorComponent,
    DynamicFiltersComponent,
    NoDataTableComponent
  ]
})
export class ComponentsModule { }
