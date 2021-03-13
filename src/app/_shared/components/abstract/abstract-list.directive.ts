import { SelectionModel } from '@angular/cdk/collections';
import { Directive, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IPaginationInput } from '@data/models';
import { isEmpty, merge } from 'lodash';
import { identity, pick, pickBy } from 'lodash-es';
import { DynamicColumnsComponent } from '../dynamic-columns/dynamic-columns.component';
import { IFilterOptions } from '../dynamic-filters/dynamic-filters.component';

export interface IActionTable {
  prefix?: string;
  name: string;
  size?: string;
  action: string;
  type?: 'fa' | 'mat';
}
@Directive()
export abstract class AbstractListDirective<T = any> implements OnInit {
  paginationInput: IPaginationInput;
  loading: boolean;
  length: number;
  displayedColumns: string[] = [];
  dataSource: Array<T> = [];
  actions: IActionTable[];
  selection = new SelectionModel<any>(true, []);
  columns: string[];
  filters = {};
  filterOptions: IFilterOptions[];
  noHiddenColumn = ['_select', '_action'];

  @ViewChild('checkboxDropdown') checkboxDropdown: TemplateRef<any>;

  constructor(
    protected dialog: MatDialog,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.readUrl();
    this.loadData();
  }

  protected readUrl(): void {
    this.paginationInput = {
      size: Number(this.activatedRoute.snapshot.queryParams.size) || 20,
      page: Number(this.activatedRoute.snapshot.queryParams.page) || 1,
    };
  }

  protected rewriteUrl(queryParams = {}): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: pickBy(queryParams, identity),
    });
  }

  loadData(query = {}): void {
    if (!isEmpty(query)) { this.paginationInput = pick(this.paginationInput, ['page', 'size']); }
    this.loading = true;
    merge(query, pickBy(this.paginationInput, identity));
  }

  handleAction(action: string, data?: any): void {
    switch (action) {
      case 'openDropdown':
        return this.optionCheckBoxDropdown(data);
      case 'settingDisplayColumn':
        return this.settingDisplayColumn();
    }
  }

  settingDisplayColumn(): void {
    const data = [];
    this.columns.map(e => {
      data.push({ name: e, checked: this.displayedColumns.includes(e) });
    });
    const dialog = this.dialog.open(DynamicColumnsComponent, {
      width: '300px',
      panelClass: 'custom-padding-dialog',
      data: {
        data,
        title: 'Add or remove columns in a list view',
        noHiddenColumn: this.noHiddenColumn
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result?.submit) {
        this.displayedColumns = this.columns.filter(e => result.data.includes(e));
      }
    });
  }

  optionCheckBoxDropdown(data: any): void {
    const elm = new ElementRef(data);
    this.dialog.open(this.checkboxDropdown, {
      position: {
        left: `${elm.nativeElement.getBoundingClientRect().left + 20}px`,
        top: `${elm.nativeElement.getBoundingClientRect().top + 20}px`
      },
      backdropClass: 'remove-backdrop-dialog',
      panelClass: 'custom-padding-dialog',
      width: '100px',
      data: ['Delete']
    });
  }

  // setting checkbox
  setSelectAll(): void {
    if (this.isAllSelected()) {
      this.dataSource.forEach((doc: any) => {
        this.selection.deselect(doc);
      });
    } else {
      this.dataSource.forEach((doc: any) => {
        this.selection.select(doc);
      });
    }
  }

  handleRespon = (res: any) => {
    this.dataSource = res.data.data.data;
  }

  setSelect(e: any, checked: boolean): void {
    checked ? this.selection.select(e) : this.selection.deselect(e);
  }

  isAllSelected(): boolean {
    return this.dataSource.length && this.dataSource?.every(e => this.selection.isSelected(e));
  }

  isSelectionIndeterminate(): boolean {
    return this.dataSource?.some(e => this.selection.isSelected(e)) && !this.isAllSelected();
  }
  // end setting checkbox

  changePage(e): void { }

  trackByFn(index: any, asset: { id: any }): any {
    return asset.id;
  }

  isShowNoData(): boolean {
    return this.dataSource && !this.dataSource.length;
  }
}
