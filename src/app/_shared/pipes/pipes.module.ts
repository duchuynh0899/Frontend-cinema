import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDisplayPipe } from './filter-display.pipe';
import { DateDisplayPipe } from './date-display.pipe';
import { DeviceTypeIconPipe } from './device-type-icon.pipe';
import { LogoPipe } from './logo.pipe';
import { TwoStepPipe } from './two-step.pipe';
import { FormatDatePipe } from './format-date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FilterDisplayPipe,
    DateDisplayPipe,
    DeviceTypeIconPipe,
    LogoPipe,
    TwoStepPipe,
    FormatDatePipe,
  ],
  exports: [
    FilterDisplayPipe,
    DateDisplayPipe,
    DeviceTypeIconPipe,
    LogoPipe,
    FormatDatePipe,
  ],
})
export class PipesModule {}
