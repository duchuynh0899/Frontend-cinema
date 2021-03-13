import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-table',
  templateUrl: './no-data-table.component.html',
  styleUrls: ['./no-data-table.component.scss']
})
export class NoDataTableComponent {
  @Input() message: string;
  constructor() { }
}
