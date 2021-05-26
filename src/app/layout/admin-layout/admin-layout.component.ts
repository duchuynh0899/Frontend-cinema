import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from './menu-items';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  items = [
    {
      name: 'Dashboard',
      isActive: true,
      isShow: true,
      url: '/',
      icon: 'dashboard',
    },
    {
      name: 'Movies',
      isActive: false,
      isShow: true,
      url: '/movie',
      icon: 'movie',
      description: 'home.add_or_manage_end_users',
      perms: ['Users'],
    },
    {
      name: 'Cinemas',
      isActive: false,
      isShow: true,
      url: '/cinemas',
      icon: 'airplay',
      description: 'home.add_or_manage_admin_users',
      perms: ['Admin'],
    },
    {
      name: 'Showtimes',
      isActive: false,
      isShow: true,
      url: '/showtime',
      icon: 'watch_later',
      description: 'home.manage_administrative_roles',
      perms: ['Admin roles'],
    },
    {
      name: 'Reverstaitons',
      isActive: false,
      isShow: true,
      url: '/reverstaitons',
      icon: 'book_online',
      description: 'home.add_or_manage_3rd_party_users',
      perms: ['Developer'],
    },
    {
      name: 'Account',
      isActive: false,
      isShow: true,
      url: '/account',
      icon: 'person',
      description: 'home.manage_privacy_and_terms',
      perms: ['Privacy & Terms'],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  snavToggle(): void {}
}
