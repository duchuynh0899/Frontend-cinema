import { NowShowingComponent } from './now-showing.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: NowShowingComponent }];

export const NowShowingRoutes = RouterModule.forChild(routes);
