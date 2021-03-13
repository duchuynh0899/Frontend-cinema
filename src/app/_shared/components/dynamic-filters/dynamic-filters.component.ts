import { Component, ElementRef, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFilterComponent } from './dialog-filter/dialog-filter.component';
import { isEmpty } from 'lodash-es';

export class IFilterOptions {
  name: string;
  displayName: string;
  type: 'input' | 'checkbox' | 'date-range';
  data?: string[]; // data checkbox
}
@Component({
  selector: 'app-dynamic-filters',
  templateUrl: './dynamic-filters.component.html',
  styleUrls: ['./dynamic-filters.component.scss']
})
export class DynamicFiltersComponent {

  @Input() filterOptions: IFilterOptions[];
  @Input() filters = {};
  isFiltersEmpty = false;

  @Output() changeFilter = new EventEmitter<any>();

  @ViewChild('addBtn', { read: ElementRef, static: true }) addBtn: ElementRef<any>;
  @ViewChild('addFilterDropdown') addFilterDropdown: TemplateRef<any>;
  @ViewChildren('chipFilter') chipFilter: QueryList<any>;

  constructor(
    public dialog: MatDialog
  ) { }

  addFilter(): void {
    this.dialog.open(this.addFilterDropdown, {
      backdropClass: 'remove-backdrop-dialog',
      panelClass: ['custom-padding-dialog', 'dropdown-dialog'],
      width: '150px',
      position: {
        left: `${this.addBtn.nativeElement.getBoundingClientRect().left}px`,
        top: `${this.addBtn.nativeElement.getBoundingClientRect().top + 40}px`
      },
      data: this.filterOptions
    });
  }

  openFilterDialog(filterOption: IFilterOptions, poisiton: ElementRef): void {
    poisiton = new ElementRef(poisiton);
    this.dialog.closeAll();
    const dialog = this.dialog.open(DialogFilterComponent, {
      backdropClass: 'remove-backdrop-dialog',
      panelClass: ['custom-padding-dialog', 'dropdown-dialog'],
      width: '300px',
      position: {
        left: `${poisiton.nativeElement.getBoundingClientRect().left}px`,
        top: `${poisiton.nativeElement.getBoundingClientRect().top + 40}px`
      },
      data: {
        filterOption,
        filters: this.filters
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result?.value) {
        this.filter(result);
      }
    });
  }

  filter(filter: any): void {
    this.filters[filter.name] = filter.value;
    this.isFiltersEmpty = !isEmpty(this.filters);
    this.changeFilter.emit(this.filters);
  }

  updateFilter(key: string, i: number, e: ElementRef): void {
    this.openFilterDialog(this.filterOptions.find((x: IFilterOptions) => x.name === key), this.chipFilter.get(i).nativeElement);
  }

  remove(key: string): void {
    delete this.filters[key];
    this.isFiltersEmpty = isEmpty(this.filters);
    this.changeFilter.emit(this.filters);
  }

  clear = () => {
    this.filters = {};
    this.isFiltersEmpty = false;
    this.changeFilter.emit(this.filters);
  }
}
