import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IPagination } from '@shared/interfaces/pagination';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ttc-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

  @Input() pagination: IPagination;
  @Input() length: number;
  @Input() pageSizeOptions = [5, 10, 25, 100];
  @Output() page = new EventEmitter<PageEvent>();

  pageIndex = 1;
  pageSize = 10;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.pagination) {
      this.pageIndex = this.pagination.pageIndex || this.pageIndex;
      this.pageSize = this.pagination.pageSize || this.pageSize;
    }
  }

  nextPage(): void {
    if (!this.hasNextPage()) { return; }
    const previousPageIndex = this.pageIndex;
    this.pageIndex++;
    this.emitPageEvent(previousPageIndex);
  }

  previousPage(): void {
    if (!this.hasPreviousPage()) { return; }
    const previousPageIndex = this.pageIndex;
    this.pageIndex--;
    this.emitPageEvent(previousPageIndex);
  }

  firstPage(): void {
    if (!this.hasPreviousPage()) { return; }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = 1;
    this.emitPageEvent(previousPageIndex);
  }

  lastPage(): void {
    if (!this.hasNextPage()) { return; }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.getNumberOfPages();
    this.emitPageEvent(previousPageIndex);
  }

  hasPreviousPage(): boolean {
    return this.pageIndex > 1 && this.pageSize !== 0;
  }

  /** Whether there is a next page. */
  hasNextPage(): boolean {
    const maxPageIndex = this.getNumberOfPages();
    return this.pageIndex < maxPageIndex && this.pageSize !== 0;
  }

  /** Calculate the number of pages */
  getNumberOfPages(): number {
    if (!this.pageSize) { return 0; }
    return Math.ceil(this.length / this.pageSize);
  }

  /** Checks whether the buttons for going forwards should be disabled. */
  nextButtonsDisabled(): boolean {
    return !this.hasNextPage();
  }

  /** Checks whether the buttons for going backwards should be disabled. */
  previousButtonsDisabled(): boolean {
    return !this.hasPreviousPage();
  }

  changePageSize(pageSize: number): void {
    // Current page needs to be updated to reflect the new page size. Navigate to the page
    // containing the previous page's first item.
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;

    this.pageIndex = Math.floor(startIndex / pageSize) || 1;
    this.pageSize = pageSize;
    this.emitPageEvent(previousPageIndex);
  }

  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  private emitPageEvent(previousPageIndex: number): void {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
}
