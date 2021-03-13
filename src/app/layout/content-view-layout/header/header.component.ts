import { Component } from '@angular/core';
import { AbstractHeaderDirective } from '@shared/components/abstract/abstract-header.directive';
import { DestroyService } from '@shared/services/destroy.service';

@Component({
  selector: 'app-header-content-view',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DestroyService]
})
export class HeaderContentViewComponent extends AbstractHeaderDirective {
  isListenRouter = true;
}
