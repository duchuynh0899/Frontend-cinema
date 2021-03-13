import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviceTypeIcon'
})
export class DeviceTypeIconPipe implements PipeTransform {

  icons = {
    COMPUTER: 'laptop_mac',
    MOBILE: 'phone_iphone',
    TABLET: 'tablet_mac',
    UNKNOWN: 'devices',
    DMR: 'devices',
    GAME_CONSOLE: 'videogame_asset',
    WEARABLE: 'watch',
  };

  transform(value: string, args?: any): any {
    return this.icons[value] || this.icons.UNKNOWN;
  }

}
