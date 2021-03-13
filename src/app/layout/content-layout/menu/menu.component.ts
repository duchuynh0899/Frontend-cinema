import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from './menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems = MenuItems;
  tabActive = 'none';
  @Output() toggle = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void { }
  snavToggle(): void {
    this.toggle.emit('false');
  }
}
