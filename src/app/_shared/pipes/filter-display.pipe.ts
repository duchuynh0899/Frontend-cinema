import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'filterDisplay'
})
export class FilterDisplayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.key === 'lastLogin') { return `${value.key}: ${moment(value.value[0]).format('MM/DD/YYYY')}-${moment(value.value[1]).format('MM/DD/YYYY')}`; }
    return `${value.key}: ${value.value}`;
  }

}
