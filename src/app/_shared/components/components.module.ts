import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '@shared/material.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { BookingMovieComponent } from './booking-movie/booking-movie.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogTrainerComponent } from './dialog-trainer/dialog-trainer.component';
import { DownloadTableDialogComponent } from './download-table-dialog/download-table-dialog.component';
import { DynamicColumnsComponent } from './dynamic-columns/dynamic-columns.component';
import { DialogFilterComponent } from './dynamic-filters/dialog-filter/dialog-filter.component';
import { DynamicFiltersComponent } from './dynamic-filters/dynamic-filters.component';
import { NoDataTableComponent } from './no-data-table/no-data-table.component';
import { PaginatorComponent } from './paginator/paginator.component';

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
    NoDataTableComponent,
    DialogTrainerComponent,
    BookingMovieComponent,
  ],
  exports: [
    DynamicColumnsComponent,
    DynamicFiltersComponent,
    DownloadTableDialogComponent,
    ConfirmDialogComponent,
    PaginatorComponent,
    DynamicFiltersComponent,
    NoDataTableComponent,
    BookingMovieComponent,
  ],
})
export class ComponentsModule {}
