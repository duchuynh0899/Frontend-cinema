import { Directive } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LocalStorageExtention } from '@shared/extensions/local-storage';
import { DestroyService } from '@shared/services/destroy.service';
import { isEmpty } from 'lodash-es';
import { filter, map, takeUntil } from 'rxjs/operators';

@Directive()
export abstract class AbstractHeaderDirective {

  avatar = null;
  data: any;
  isListenRouter = false;

  constructor(
    protected dialog: MatDialog,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected destroy$: DestroyService
  ) {
    this.listenRouter();
  }

  listenRouter(): void {
    this.router.events.pipe(
      filter(event => this.isListenRouter && event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        let data = null;
        while (child) {
          if (!isEmpty(child.snapshot.data)) { data = child.snapshot.data; }
          if (child.firstChild) {
            child = child.firstChild;
          } else if (!isEmpty(child.snapshot.data)) {
            return child.snapshot.data;
          } else {
            return data;
          }
        }
        return null;
      }),
      takeUntil(this.destroy$),
    ).subscribe(data => this.data = data);
  }



  logout(): void {
    this.router.navigate(['/auth/login']);
    LocalStorageExtention.deleteToken('token');
  }

  goToPrivacy(): void {
    this.router.navigate(['/center/privacy-and-terms']);
  }

}
