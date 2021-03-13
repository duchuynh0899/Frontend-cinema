import { Pipe, PipeTransform } from '@angular/core';
import { LogoService } from '@shared/services/logo.service';

@Pipe({
  name: 'logo',
  pure: false
})
export class LogoPipe implements PipeTransform {

  constructor(private logoService: LogoService) { }

  transform(value: any, args?: any): string {
    return this.logoService.logos.find(x => x[args] === value)?.url || 'assets/images/brands/default.png';
  }

}
