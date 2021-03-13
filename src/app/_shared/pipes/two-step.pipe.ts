import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoStep'
})
export class TwoStepPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'ON' : 'OFF';
  }

}
