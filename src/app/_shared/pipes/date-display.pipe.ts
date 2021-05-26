import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'dateDisplay',
})
export class DateDisplayPipe implements PipeTransform {
  transform(date: any, args?: any): any {
    const d = new Date(date);
    return moment(d).format('DD/MM/YYYY');
  }
}
