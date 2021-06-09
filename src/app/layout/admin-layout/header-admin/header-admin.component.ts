import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '@shared/services/current-user.service';
import { DestroyService } from '@shared/services/destroy.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
  providers: [DestroyService],
})
export class HeaderAdminComponent implements OnInit {
  currentUser: any;
  protected destroy$ = new Subject();
  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.currentUserService.user$
    .pipe(takeUntil(this.destroy$))
    .subscribe((user) => {
      this.currentUser = user;
    });
  }


}
