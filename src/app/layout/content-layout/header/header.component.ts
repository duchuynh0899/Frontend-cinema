import { takeUntil } from 'rxjs/operators';
import { CurrentUserService } from './../../../_shared/services/current-user.service';
import { Router } from '@angular/router';
import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Renderer2,
} from '@angular/core';
import { AbstractHeaderDirective } from '@shared/components/abstract/abstract-header.directive';
import { DestroyService } from '@shared/services/destroy.service';
import { LocalStorageExtention } from '@shared/extensions/local-storage';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DestroyService],
})
export class HeaderComponent implements OnInit {
  listMenu = [
    { name: 'Home', url: '' },
    { name: 'Now Showing', url: 'now-showing' },
    { name: 'Coming Soon', url: 'coming' },
    { name: 'Cinemas', url: 'cinemas' },
  ];
  scroll: number;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private currentUserService: CurrentUserService
  ) {}
  currentUser: any;
  protected destroy$ = new Subject();
  ngOnInit(): void {
    this.checkOffset();
    this.currentUserService.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.currentUser = user;
      });
  }

  checkOffset() {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = window.scrollY;
    });
  }

  logout(): void {
    this.router.navigate(['/auth/login']);
    LocalStorageExtention.deleteToken('token');
  }
}
