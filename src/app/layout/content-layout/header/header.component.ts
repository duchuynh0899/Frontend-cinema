import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractHeaderDirective } from '@shared/components/abstract/abstract-header.directive';
import { DestroyService } from '@shared/services/destroy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DestroyService]
})
export class HeaderComponent extends AbstractHeaderDirective {

  @Output() toggle = new EventEmitter<void>();

}
