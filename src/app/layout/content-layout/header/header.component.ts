import { Router } from '@angular/router';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AbstractHeaderDirective } from '@shared/components/abstract/abstract-header.directive';
import { DestroyService } from '@shared/services/destroy.service';
import { LocalStorageExtention } from '@shared/extensions/local-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DestroyService]
})
export class HeaderComponent implements OnInit {
  listMenu = [{ name: 'Home', url: '' },
  { name: 'Now Showing', url: 'now-showing' },
  { name: 'Coming Soon', url: 'coming' },
  { name: 'Cinemas', url: 'cinemas' }]
  constructor(private router: Router) {

  }
  ngOnInit(): void {



  }

  logout(): void {
    this.router.navigate(['/auth/login']);
    LocalStorageExtention.deleteToken('token');
  }


}
