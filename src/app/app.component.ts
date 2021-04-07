import { Component } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faLowVision, faUnlock, faChevronDown, faAngleDoubleRight,
  faAngleDoubleLeft, faAngleRight, faAngleLeft, faUsers,
  faUserSecret, faChartArea, faLock, faComments,
  faUser, faQuestionCircle, faHome, faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unitel-admin';

  constructor(
    library: FaIconLibrary,
    faConfig: FaConfig,
    // tslint:disable-next-line: variable-name
    _languageService: LanguageService
  ) {
    library.addIcons(
      faLowVision,
      faEdit,
      faTrashAlt,
      faUnlock,
      faChevronDown,
      faAngleDoubleRight,
      faAngleDoubleLeft,
      faAngleRight,
      faAngleLeft,
      faUserSecret,
      faUser,
      faChartArea,
      faLock,
      faQuestionCircle,
      faComments,
      faLayerGroup,
      faHome,
      faUsers
    );
    faConfig.defaultPrefix = 'far';
  }

}
