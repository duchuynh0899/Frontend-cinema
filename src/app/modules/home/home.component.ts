import { Component } from '@angular/core';
import { MenuItems } from 'src/app/layout/content-layout/menu/menu-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuItems = MenuItems.filter(x => x.url !== '/');

}
